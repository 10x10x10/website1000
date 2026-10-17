import assert from 'node:assert/strict';
import { test } from 'node:test';
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import App from '../src/App.tsx';
import OpenProjectPicker from '../src/components/OpenProjectPicker.tsx';
import ProjectPanel from '../src/components/ProjectPanel.tsx';
import ProjectTreeEditor from '../src/components/ProjectTreeEditor.tsx';
import MetadataPanel from '../src/components/MetadataPanel.tsx';

const project = (id = 'metadata-id') => ({ metadata: {
  id, title: 'Imported title', order: 0, cover: '', hover: '', tags: ['default'],
}, tree: [{ type: 'Section', children: [] }] });
const ok = (data) => ({ ok: true, json: async () => data });
const fail = (message) => ({ ok: false, json: async () => ({ message }) });
const deferred = () => { let resolve; const promise = new Promise((r) => { resolve = r; }); return { promise, resolve }; };
const picker = (r) => r.root.findByType(OpenProjectPicker);
const panel = (r) => r.root.findByType(ProjectPanel);
const tree = (r) => r.root.findByType(ProjectTreeEditor);
const alerts = (r) => r.root.findAllByProps({ role: 'alert' }).map((n) => n.children.join(' ')).join('\n');
const button = (r, text) => r.root.findAllByType('button').find((n) => n.children.includes(text));
const open = async (r) => { await act(async () => panel(r).props.onOpenProject()); };
const upload = async (r, name, content) => {
  await act(async () => r.root.findByProps({ type: 'file' }).props.onChange({ currentTarget: {
    files: content === undefined ? [] : [{ name, text: typeof content === 'function' ? content : async () => content }], value: name,
  } }));
};
function mockGlobal(t, key, value) {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, key);
  Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
  t.after(() => descriptor ? Object.defineProperty(globalThis, key, descriptor) : delete globalThis[key]);
}
async function setup(t, fetcher = async () => ok([])) {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (url, options) => { calls.push({ url, options }); return fetcher(url, options); });

  let r;
  await act(async () => { r = TestRenderer.create(React.createElement(App)); });
  t.after(() => act(() => r.unmount()));
  await open(r);
  return { r, calls };
}

test('valid JSON import loads metadata/tree and never writes before manual save', async (t) => {
  const { r, calls } = await setup(t);
  await act(async () => tree(r).props.onSelect([0]));
  await upload(r, 'source-name.JSON', JSON.stringify(project()));
  assert.equal(picker(r).props.isOpen, false);
  assert.deepEqual(tree(r).props.tree, project().tree);
  assert.equal(tree(r).props.selectedPath, null);
  assert.deepEqual(r.root.findByType(MetadataPanel).props.metadata, project().metadata);
  assert.equal(calls.some((c) => c.options?.method === 'PUT'), false);
});

test('illegal names require explicit correction; cancel and empty file selection preserve current project', async (t) => {
  const { r, calls } = await setup(t);
  await upload(r, 'original.json', JSON.stringify(project('original')));
  await act(async () => tree(r).props.onSelect([0]));
  await open(r);
  await upload(r, 'invalid name.json', JSON.stringify(project('replacement')));
  assert.equal(r.root.findByType(MetadataPanel).props.metadata.id, 'original');
  await act(async () => button(r, 'Import').props.onClick());
  assert.match(alerts(r), /file name/);
  await act(async () => button(r, 'Cancel import').props.onClick());
  assert.equal(alerts(r), '');
  await upload(r, '', undefined);
  assert.deepEqual(tree(r).props.selectedPath, [0]);
  await upload(r, 'invalid name.json', JSON.stringify(project('replacement')));
  await act(async () => r.root.findByProps({ id: 'import-file-name' }).props.onChange({ target: { value: 'corrected' } }));
  await act(async () => button(r, 'Import').props.onClick());
  assert.equal(r.root.findByType(MetadataPanel).props.metadata.id, 'replacement');
  await act(async () => panel(r).props.onSaveProject());
  const saved = JSON.parse(calls.find((c) => c.options?.method === 'PUT').options.body);
  assert.equal(saved.sourceFileName, 'corrected');
});

for (const [name, content, expected] of [
  ['read failure', async () => { throw new Error('File cannot be read'); }, /File cannot be read/],
  ['broken JSON', '{', /JSON|position|property/i],
  ['unknown component', JSON.stringify({ ...project(), tree: [{ type: 'Unknown' }] }), /tree/],
  ['illegal tags', JSON.stringify({ ...project(), metadata: { ...project().metadata, tags: ['illegal'] } }), /metadata.tags.0/],
]) {
  test(`${name} reports an error and preserves content, selection and source name`, async (t) => {
    const { r, calls } = await setup(t);
    await upload(r, 'original-source.json', JSON.stringify(project('original')));
    await act(async () => tree(r).props.onSelect([0]));
    await open(r);
    await upload(r, 'bad.json', content);
    assert.match(alerts(r), expected);
    assert.equal(picker(r).props.isOpen, true);
    assert.equal(r.root.findByType(MetadataPanel).props.metadata.id, 'original');
    assert.deepEqual(tree(r).props.tree, project().tree);
    assert.deepEqual(tree(r).props.selectedPath, [0]);
    await act(async () => picker(r).props.onClose());
    await act(async () => panel(r).props.onSaveProject());
    assert.equal(JSON.parse(calls.find((c) => c.options?.method === 'PUT').options.body).sourceFileName, 'original-source');
  });
}

test('list/load errors remain visible in picker; retries clear errors and close only after success', async (t) => {
  let listFailed = true;
  let loadFailed = true;
  const { r } = await setup(t, async (url) => url === '/api/projects'
    ? (listFailed ? fail('List offline') : ok([{ name: 'existing' }]))
    : (loadFailed ? fail('Load offline') : ok(project('existing'))));
  assert.match(alerts(r), /List offline/);
  listFailed = false;
  await act(async () => picker(r).props.onRefreshProjects());
  assert.equal(alerts(r), '');
  await act(async () => picker(r).props.onLoadProjectByName('existing'));
  assert.match(alerts(r), /Load offline/);
  assert.equal(picker(r).props.isOpen, true);
  loadFailed = false;
  await act(async () => picker(r).props.onLoadProjectByName('existing'));
  assert.equal(picker(r).props.isOpen, false);
  assert.equal(picker(r).props.operationError, null);
});

test('manual save checks current disk list, confirms overwrite, preserves filename, and exposes retryable failures', async (t) => {
  let saveFailed = true;
  let confirm = false;
  const { r, calls } = await setup(t, async (_url, options) => options?.method === 'PUT'
    ? (saveFailed ? fail('Disk is full') : ok({ message: 'Saved' }))
    : ok([{ name: 'existing' }]));
  await upload(r, 'existing.json', JSON.stringify(project()));
  mockGlobal(t, 'window', { confirm: (message) => { assert.match(message, /existing.json/); return confirm; } });
  await act(async () => panel(r).props.onSaveProject());
  assert.equal(calls.some((c) => c.options?.method === 'PUT'), false);
  confirm = true;
  await act(async () => panel(r).props.onSaveProject());
  assert.match(alerts(r), /Disk is full/);
  assert.equal(r.root.findAllByProps({ 'aria-label': 'Success' }).length, 0);
  assert.equal(r.root.findByType(MetadataPanel).props.metadata.title, 'Imported title');
  saveFailed = false;
  await act(async () => panel(r).props.onSaveProject());
  assert.equal(alerts(r), '');
  assert.equal(r.root.findAllByProps({ 'aria-label': 'Success' }).length, 1);
  assert.equal(JSON.parse(calls.find((c) => c.options?.method === 'PUT').options.body).sourceFileName, 'existing');
});

test('duplicate loads are blocked; closed picker and stale list responses cannot replace newer results', async (t) => {
  const oldLoad = deferred();
  const oldList = deferred();
  let listCalls = 0;
  const { r, calls } = await setup(t, async (url) => {
    if (url === '/api/projects') return ++listCalls === 2 ? oldList.promise : ok([{ name: 'latest' }]);
    if (url.endsWith('/old')) return oldLoad.promise;
    return ok(project('new'));
  });
  let pendingLoad;
  await act(async () => { pendingLoad = picker(r).props.onLoadProjectByName('old'); });
  assert.equal(picker(r).props.loadingProject, true);
  await act(async () => picker(r).props.onLoadProjectByName('duplicate'));
  assert.equal(calls.some((c) => c.url.endsWith('/duplicate')), false);
  await act(async () => picker(r).props.onClose());
  await open(r);
  await act(async () => picker(r).props.onLoadProjectByName('new'));
  await act(async () => { oldLoad.resolve(ok(project('old'))); await pendingLoad; });
  assert.equal(r.root.findByType(MetadataPanel).props.metadata.id, 'new');
  let pendingList;
  await act(async () => { pendingList = picker(r).props.onRefreshProjects(); });
  await act(async () => picker(r).props.onRefreshProjects());
  await act(async () => { oldList.resolve(fail('Stale error')); await pendingList; });
  assert.deepEqual(picker(r).props.localProjects, ['latest']);
  assert.equal(picker(r).props.operationError, null);
});

test('closing while file read is pending ignores stale import and errors', async (t) => {
  const { r } = await setup(t);
  const read = deferred();
  await upload(r, 'slow.json', () => read.promise);
  await act(async () => picker(r).props.onClose());
  await open(r);
  await upload(r, 'new.json', JSON.stringify(project('new')));
  await act(async () => read.resolve(JSON.stringify(project('old'))));
  assert.equal(r.root.findByType(MetadataPanel).props.metadata.id, 'new');
});

test('import → edit → save → export keeps edited content and source filename', async (t) => {
  const { r, calls } = await setup(t);
  await upload(r, 'source.json', JSON.stringify(project()));
  await act(async () => r.root.findByType(MetadataPanel).props.onChange({ ...project().metadata, title: 'Edited title' }));
  await act(async () => panel(r).props.onSaveProject());
  const saved = JSON.parse(calls.find((c) => c.options?.method === 'PUT').options.body);
  assert.equal(saved.metadata.title, 'Edited title');
  assert.equal(saved.sourceFileName, 'source');
  let exported;
  const link = { click() {}, href: '', download: '' };
  mockGlobal(t, 'document', { createElement: () => link, body: { appendChild() {}, removeChild() {} } });
  t.mock.method(URL, 'createObjectURL', (blob) => { exported = blob; return 'blob:export'; });
  t.mock.method(URL, 'revokeObjectURL', () => {});
  await act(async () => button(r, 'Export').props.onClick());
  const json = JSON.parse(await exported.text());
  assert.equal(json.metadata.title, 'Edited title');
  assert.deepEqual(json.tree, saved.tree);
  assert.equal('sourceFileName' in json, false);
});
