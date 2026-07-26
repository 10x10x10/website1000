import type { EditorTreeNode } from './editorTree';

export function isTreeNode(node: unknown): node is { type: string; props?: Record<string, unknown>; children?: EditorTreeNode[] } {
  return typeof node === 'object' && node !== null && 'type' in node;
}
