import React from "react";
import { ComponentDefinitions } from "../components/editable";
import type { TreeNode, TreeNodeType, TreeNodePrimitive } from "./treeSchema";
export type { TreeNode } from "./treeSchema";

const componentMap: Record<TreeNodeType, React.ComponentType<any>> = Object.fromEntries(
  Object.entries(ComponentDefinitions).map(([type, definition]) => [type, definition.component]),
) as Record<TreeNodeType, React.ComponentType<any>>;

function isTreeNode(
  node: TreeNode | string | number | boolean | null | undefined,
): node is TreeNode {
  return (
    typeof node === "object" &&
    node !== null &&
    !Array.isArray(node) &&
    "type" in node
  );
}

function hasChildren(
  node: TreeNode,
): node is TreeNode & { children: Array<TreeNode | TreeNodePrimitive> } {
  return "children" in node && Array.isArray(node.children);
}

export function renderTree(
  node: TreeNode | string | number | boolean | null | undefined,
): React.ReactNode {
  if (node === null || node === undefined || typeof node === "boolean") {
    return null;
  }

  if (typeof node === "string" || typeof node === "number") {
    return node;
  }

  if (!isTreeNode(node)) {
    return null;
  }

  const Component = componentMap[node.type];
  if (!Component) {
    throw new Error(`treeRenderer: unknown node type "${node.type}"`);
  }

  const children = hasChildren(node)
    ? node.children.map((child, index) =>
        React.createElement(React.Fragment, { key: index }, renderTree(child)),
      )
    : undefined;

  return React.createElement(Component, node.props ?? undefined, children);
}

export function renderTreeArray(
  nodes: Array<TreeNode | string | number | boolean | null | undefined>,
): React.ReactNode {
  return nodes.map((node, index) =>
    React.createElement(React.Fragment, { key: index }, renderTree(node)),
  );
}
