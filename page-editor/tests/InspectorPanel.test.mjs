import assert from 'node:assert/strict';
import { test } from 'node:test';
import React, { useState } from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { z } from 'zod';
import InspectorPanel from '../src/components/InspectorPanel.tsx';

function StatefulInspector({ node, onChangeProps }) {
  const [draft, setDraft] = useState(node.props.content);
  return React.createElement('input', {
    value: draft,
    onChange: (event) => {
      setDraft(event.target.value);
      onChangeProps({ content: event.target.value });
    },
  });
}

const definitions = {
  Title: { type: 'Title', propsSchema: z.object({ content: z.string() }), allowChildren: [], inspectorComponent: StatefulInspector },
  Section: { type: 'Section', propsSchema: z.object({}), allowChildren: ['Title'], inspectorComponent: null },
};
const title = (content) => ({ type: 'Title', props: { content } });

test('Inspector mounts and updates across selection transitions without React warnings', () => {
  const errors = [];
  const originalError = console.error;
  console.error = (...args) => errors.push(args);
  let renderer;
  const props = { definitions, onUpdateNode() {}, onDeleteNode() {} };
  const update = (selectedNode, selectedPath) => act(() => renderer.update(
    React.createElement(InspectorPanel, { ...props, selectedNode, selectedPath }),
  ));
  try {
    act(() => { renderer = TestRenderer.create(React.createElement(InspectorPanel, {
      ...props, selectedNode: null, selectedPath: null,
    })); });
    assert.match(JSON.stringify(renderer.toJSON()), /Select a component/);
    update(title('A'), [0]);
    assert.equal(renderer.root.findByType('input').props.value, 'A');
    update({ type: 'Section', props: {} }, [1]);
    assert.equal(renderer.root.findAllByType('input').length, 0);
    assert.match(JSON.stringify(renderer.toJSON()), /Allowed children/);
    update(null, null);
    assert.match(JSON.stringify(renderer.toJSON()), /Select a component/);
    update(title('B'), [0]);
    assert.equal(renderer.root.findByType('input').props.value, 'B');
    assert.deepEqual(errors, []);
  } finally {
    act(() => renderer?.unmount());
    console.error = originalError;
  }
});

test('deletion and project replacement discard stale inspector state', () => {
  let renderer;
  let selectedNode = title('old project');
  let selectedPath = [0];
  const updates = [];
  const render = () => React.createElement(InspectorPanel, {
    definitions, selectedNode, selectedPath,
    onUpdateNode: (path, node) => updates.push({ path, node }),
    onDeleteNode: () => { selectedNode = null; selectedPath = null; renderer.update(render()); },
  });
  act(() => { renderer = TestRenderer.create(render()); });
  act(() => renderer.root.findByType('input').props.onChange({ target: { value: 'edited' } }));
  assert.deepEqual(updates, [{ path: [0], node: title('edited') }]);
  act(() => renderer.root.findByType('button').props.onClick());
  assert.match(JSON.stringify(renderer.toJSON()), /Select a component/);
  assert.equal(renderer.root.findAllByType('input').length, 0);
  selectedNode = title('new project');
  selectedPath = [0];
  act(() => renderer.update(render()));
  assert.equal(renderer.root.findByType('input').props.value, 'new project');
  selectedNode = title('different node');
  selectedPath = [1];
  act(() => renderer.update(render()));
  assert.equal(renderer.root.findByType('input').props.value, 'different node');
  act(() => renderer.unmount());
});
