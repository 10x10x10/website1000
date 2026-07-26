import type { TreeNode, TreeNodePrimitive } from '@1000website/shared';

export type EditorTreeNode = TreeNode | TreeNodePrimitive;
export type NodePath = number[];

export function getNodeAtPath(tree: EditorTreeNode[], path: NodePath): EditorTreeNode | undefined {
  let current: unknown = tree;

  for (let index = 0; index < path.length; index += 1) {
    if (!Array.isArray(current)) {
      return undefined;
    }
    const next = current[path[index]];
    if (next === undefined) {
      return undefined;
    }

    if (index === path.length - 1) {
      return next as EditorTreeNode;
    }

    if (typeof next === 'object' && next !== null && 'children' in next && Array.isArray((next as any).children)) {
      current = (next as any).children;
      continue;
    }

    return undefined;
  }

  return undefined;
}

function cloneArray<T>(value: T[]): T[] {
  return value.slice();
}

export function updateNodeAtPath(
  tree: EditorTreeNode[],
  path: NodePath,
  updater: (node: EditorTreeNode) => EditorTreeNode,
): EditorTreeNode[] {
  if (path.length === 0) {
    return tree;
  }

  const [head, ...rest] = path;
  const next = tree[head];
  if (next === undefined) {
    return tree;
  }

  const newTree = cloneArray(tree);
  if (rest.length === 0) {
    newTree[head] = updater(newTree[head]);
    return newTree;
  }

  if (typeof next === 'object' && next !== null && 'children' in next && Array.isArray((next as any).children)) {
    const children = (next as any).children as EditorTreeNode[];
    const updatedChildren = updateNodeAtPath(children, rest, updater);
    newTree[head] = { ...(next as object), children: updatedChildren } as EditorTreeNode;
    return newTree;
  }

  return tree;
}

export function deleteNodeAtPath(tree: EditorTreeNode[], path: NodePath): EditorTreeNode[] {
  if (path.length === 0) {
    return tree;
  }

  const [head, ...rest] = path;
  const next = tree[head];
  if (next === undefined) {
    return tree;
  }

  const newTree = cloneArray(tree);
  if (rest.length === 0) {
    newTree.splice(head, 1);
    return newTree;
  }

  if (typeof next === 'object' && next !== null && 'children' in next && Array.isArray((next as any).children)) {
    const children = (next as any).children as EditorTreeNode[];
    const updatedChildren = deleteNodeAtPath(children, rest);
    newTree[head] = { ...(next as object), children: updatedChildren } as EditorTreeNode;
    return newTree;
  }

  return tree;
}

function ensureChildren(node: EditorTreeNode): EditorTreeNode {
  if (typeof node !== 'object' || node === null) {
    return node;
  }

  if ('children' in node && Array.isArray((node as any).children)) {
    return node;
  }

  return { ...(node as any), children: [] } as EditorTreeNode;
}

export function insertNodeAtParent(
  tree: EditorTreeNode[],
  parentPath: NodePath,
  node: EditorTreeNode,
  index?: number,
): EditorTreeNode[] {
  if (parentPath.length === 0) {
    const copied = cloneArray(tree);
    const insertIndex = index === undefined ? copied.length : Math.max(0, Math.min(index, copied.length));
    copied.splice(insertIndex, 0, node);
    return copied;
  }

  const [head, ...rest] = parentPath;
  const next = tree[head];
  if (next === undefined || typeof next !== 'object' || next === null) {
    return tree;
  }

  const nextWithChildren = ensureChildren(next);
  const children = (nextWithChildren as any).children as EditorTreeNode[];
  const insertedChildren = insertNodeAtParent(children, rest, node, index);
  const newTree = cloneArray(tree);
  newTree[head] = { ...(nextWithChildren as object), children: insertedChildren } as EditorTreeNode;
  return newTree;
}

function getParentPath(path: NodePath): NodePath {
  return path.slice(0, -1);
}

export function moveNode(
  tree: EditorTreeNode[],
  fromPath: NodePath,
  toPath: NodePath,
): EditorTreeNode[] {
  const node = getNodeAtPath(tree, fromPath);
  if (node === undefined) {
    return tree;
  }

  const treeAfterDelete = deleteNodeAtPath(tree, fromPath);
  const toParentPath = getParentPath(toPath);
  let insertIndex = toPath[toPath.length - 1];

  const fromParentPath = getParentPath(fromPath);
  if (JSON.stringify(toParentPath) === JSON.stringify(fromParentPath)) {
    const fromIndex = fromPath[fromPath.length - 1];
    if (fromIndex < insertIndex) {
      insertIndex -= 1;
    }
  }

  return insertNodeAtParent(treeAfterDelete, toParentPath, node, insertIndex);
}
