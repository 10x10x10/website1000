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
  if (!(head in tree)) {
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

function getChildrenAtPath(tree: EditorTreeNode[], path: NodePath): EditorTreeNode[] | undefined {
  if (path.length === 0) return tree;
  const parent = getNodeAtPath(tree, path);
  if (typeof parent !== 'object' || parent === null || !('type' in parent)) return undefined;
  if (!('children' in parent)) return [];
  return Array.isArray(parent.children) ? parent.children : undefined;
}

export function moveNode(
  tree: EditorTreeNode[],
  fromPath: NodePath,
  toPath: NodePath,
): EditorTreeNode[] {
  const validPath = (path: NodePath) => path.length > 0 &&
    path.every((index) => Number.isInteger(index) && index >= 0);
  if (!validPath(fromPath) || !validPath(toPath)) return tree;

  const fromParentPath = getParentPath(fromPath);
  const toParentPath = getParentPath(toPath);
  const sourceChildren = getChildrenAtPath(tree, fromParentPath);
  const targetChildren = getChildrenAtPath(tree, toParentPath);
  const fromIndex = fromPath[fromPath.length - 1];
  let insertIndex = toPath[toPath.length - 1];
  if (!sourceChildren || !(fromIndex in sourceChildren) ||
      !targetChildren || insertIndex > targetChildren.length) return tree;

  // A node cannot become its own parent, including through a descendant.
  if (fromPath.length <= toParentPath.length &&
      fromPath.every((value, index) => value === toParentPath[index])) return tree;

  if (JSON.stringify(toParentPath) === JSON.stringify(fromParentPath)) {
    if (fromIndex < insertIndex) insertIndex -= 1;
    if (fromIndex === insertIndex) return tree;
  }

  // Removing a preceding sibling shifts the target parent and all its descendants.
  const adjustedParentPath = [...toParentPath];
  if (toParentPath.length > fromParentPath.length &&
      fromParentPath.every((value, index) => value === toParentPath[index]) &&
      toParentPath[fromParentPath.length] > fromIndex) {
    adjustedParentPath[fromParentPath.length] -= 1;
  }

  const treeAfterDelete = deleteNodeAtPath(tree, fromPath);
  if (!getChildrenAtPath(treeAfterDelete, adjustedParentPath)) return tree;
  return insertNodeAtParent(treeAfterDelete, adjustedParentPath, sourceChildren[fromIndex], insertIndex);
}
