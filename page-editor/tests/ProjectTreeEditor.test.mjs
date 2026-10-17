import assert from 'node:assert/strict';
import { test } from 'node:test';
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import ProjectTreeEditor from '../src/components/ProjectTreeEditor.tsx';

const dragContext = (renderer) => renderer.root.findAll((node) =>
  typeof node.props.onDragStart === 'function' && typeof node.props.onDragEnd === 'function')[0];

const title = { type: 'Title', props: {} };
const section = (...children) => ({ type: 'Section', children });

for (const [target, expected] of [
  ['before-0', [title, section(), section()]],
  ['after-0', [section(), title, section()]],
  ['inside-0', [section(title), section()]],
  ['drop-root', [section(), section(), title]],
]) {
  test(`drag end commits ${target} and clears selection`, () => {
    const changes = [];
    const selections = [];
    let renderer;
    act(() => {
      renderer = TestRenderer.create(React.createElement(ProjectTreeEditor, {
        tree: [section(), section(title)], selectedPath: [1, 0],
        onTreeChange: (tree) => changes.push(tree), onSelect: (path) => selections.push(path),
      }));
    });
    act(() => dragContext(renderer).props.onDragEnd({
      active: { id: 'drag-1,0' }, over: { id: target },
    }));
    assert.deepEqual(changes, [expected]);
    assert.deepEqual(selections, [null]);
    act(() => renderer.unmount());
  });
}

test('both drop entry points reject self/descendant moves and invalid inside targets', () => {
  let renderer;
  const changes = [];
  const selections = [];
  act(() => { renderer = TestRenderer.create(React.createElement(ProjectTreeEditor, {
    tree: [section(section(title))], selectedPath: [0],
    onTreeChange: (tree) => changes.push(tree), onSelect: (path) => selections.push(path),
  })); });
  act(() => dragContext(renderer).props.onDragStart({ active: { id: 'drag-0' } }));
  const dropTarget = () => renderer.root.findAll((node) => typeof node.type === 'function' && node.props.onDropTarget)[0].props.onDropTarget;
  for (const path of [[0], [0, 0], [9], [0, 0, 0]]) {
    act(() => dropTarget()(path, 'inside'));
    act(() => dragContext(renderer).props.onDragEnd({
      active: { id: 'drag-0' }, over: { id: `inside-${path.join(',')}` },
    }));
    act(() => dragContext(renderer).props.onDragStart({ active: { id: 'drag-0' } }));
  }
  assert.deepEqual(changes, []);
  assert.deepEqual(selections, []);
  act(() => renderer.unmount());
});

test('direct drop target uses the same lossless commit and selection reset', () => {
  let renderer;
  const changes = [];
  const selections = [];
  act(() => { renderer = TestRenderer.create(React.createElement(ProjectTreeEditor, {
    tree: [title, section()], selectedPath: [0],
    onTreeChange: (tree) => changes.push(tree), onSelect: (path) => selections.push(path),
  })); });
  act(() => dragContext(renderer).props.onDragStart({ active: { id: 'drag-0' } }));
  act(() => renderer.root.findAll((node) => typeof node.type === 'function' && node.props.onDropTarget)[0].props.onDropTarget([1], 'inside'));
  assert.deepEqual(changes, [[section(title)]]);
  assert.deepEqual(selections, [null]);
  act(() => renderer.unmount());
});
