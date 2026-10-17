import assert from 'node:assert/strict';
import { test } from 'node:test';
import { moveNode } from '../src/components/editorTree.ts';

const title = (content) => ({ type: 'Title', props: { content } });
const section = (...children) => ({ type: 'Section', children });

test('earlier root moves into later container without losing its content', () => {
  const a = title('A');
  const tree = [a, section()];
  const original = structuredClone(tree);
  assert.deepEqual(moveNode(tree, [0], [1, 0]), [section(a)]);
  assert.deepEqual(tree, original, 'does not mutate the source tree');
});

const inventory = (nodes) => nodes.flatMap((node) => {
  if (node && typeof node === 'object') {
    const { children, ...content } = node;
    return [JSON.stringify(content), ...inventory(children ?? [])];
  }
  return [`${typeof node}:${String(node)}`];
}).sort();

const a = title('A');
const b = title('B');
const c = title('C');
for (const { name, tree, from, to, expected } of [
  { name: 'sibling forward', tree: [a, b, c], from: [0], to: [3], expected: [b, c, a] },
  { name: 'sibling backward', tree: [a, b, c], from: [2], to: [0], expected: [c, a, b] },
  { name: 'later root into earlier container', tree: [section(b), a], from: [1], to: [0, 1], expected: [section(b, a)] },
  { name: 'child into another parent', tree: [section(a), section(b)], from: [0, 0], to: [1, 0], expected: [section(), section(a, b)] },
  { name: 'child to root before its parent', tree: [section(a), b], from: [0, 0], to: [0], expected: [a, section(), b] },
  { name: 'child to root end', tree: [section(a), b], from: [0, 0], to: [2], expected: [section(), b, a] },
  { name: 'root removal shifts target ancestor', tree: [a, section(section(b))], from: [0], to: [1, 0, 1], expected: [section(section(b, a))] },
  { name: 'nested sibling removal shifts target ancestor', tree: [section(a, section(section(b)))], from: [0, 0], to: [0, 1, 0, 0], expected: [section(section(section(a, b)))] },
  { name: 'later nested child into earlier branch', tree: [section(section(b), a)], from: [0, 1], to: [0, 0, 0], expected: [section(section(a, b))] },
  { name: 'container without children array', tree: [a, { type: 'Section' }], from: [0], to: [1, 0], expected: [section(a)] },
  { name: 'undefined primitive', tree: [undefined, section()], from: [0], to: [1, 0], expected: [section(undefined)] },
]) {
  test(name, () => {
    const original = structuredClone(tree);
    const result = moveNode(tree, from, to);
    assert.deepEqual(result, expected);
    assert.deepEqual(inventory(result), inventory(tree), 'preserves every node and primitive');
    assert.deepEqual(tree, original, 'leaves the input unchanged');
  });
}

for (const [name, from, to] of [
  ['same position', [0], [0]],
  ['immediately after itself', [0], [1]],
  ['inside itself', [1], [1, 0]],
  ['inside a descendant', [1], [1, 0, 0]],
  ['missing source', [9], [0]],
  ['missing parent', [0], [9, 0]],
  ['out of range insertion', [0], [1, 9]],
  ['negative index', [-1], [0]],
  ['fractional index', [0], [0.5]],
  ['empty source', [], [0]],
  ['empty target', [0], []],
]) {
  test(`invalid move preserves the entire tree: ${name}`, () => {
    const tree = [a, section(section(b))];
    const original = structuredClone(tree);
    assert.equal(moveNode(tree, from, to), tree);
    assert.deepEqual(tree, original);
  });
}

test('a primitive cannot be a destination parent', () => {
  const tree = [a, 'text'];
  assert.equal(moveNode(tree, [0], [1, 0]), tree);
});
