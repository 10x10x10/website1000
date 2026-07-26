import type React from "react";
import { type ZodTypeAny } from "zod";
import type { z } from "zod";
import { ComponentTypes } from "./editable";

export type InspectorComponentProps<T extends string, P> = {
  node: {
    type: T;
    props?: P;
  };
  onChangeProps: (props: P) => void;
};

export type TreeComponentDefinition<T extends string, P> = {
  type: T;
  component: React.ComponentType<any>;
  propsSchema: z.ZodType<P>;
  allowChildren: ComponentTypes[];
  inspectorComponent: React.ComponentType<InspectorComponentProps<T, P>> | null;
  editorComponent: React.ComponentType<InspectorComponentProps<T, P>> | null;
};

export type ComponentProps<C> = C extends TreeComponentDefinition<any, infer P> ? P : never;

export type ComponentPropDefinition = {
  name: string;
  type: string;
  optional: boolean;
  schema: ZodTypeAny;
};

const getSchemaType = (schema: ZodTypeAny): string => {
  const typeName = (schema as any)?._def?.typeName;

  if (typeName === 'ZodString') return 'string';
  if (typeName === 'ZodNumber') return 'number';
  if (typeName === 'ZodBoolean') return 'boolean';
  if (typeName === 'ZodEnum') return `enum(${((schema as any)._def.values as string[]).map((val) => JSON.stringify(val)).join(' | ')})`;
  if (typeName === 'ZodArray') return `${getSchemaType((schema as any)._def.type)}[]`;
  if (typeName === 'ZodOptional') return `${getSchemaType((schema as any)._def.innerType)} | undefined`;
  if (typeName === 'ZodNullable') return `${getSchemaType((schema as any)._def.innerType)} | null`;
  if (typeName === 'ZodDefault') return `${getSchemaType((schema as any)._def.innerType)} | default`;
  if (typeName === 'ZodUnion') return ((schema as any)._def.options as ZodTypeAny[]).map(getSchemaType).join(' | ');
  if (typeName === 'ZodLiteral') return JSON.stringify((schema as any)._def.value);
  if (typeName === 'ZodObject') return 'object';

  return String(typeName);
};

const isOptionalSchema = (schema: ZodTypeAny): boolean => {
  const typeName = (schema as any)?._def?.typeName;

  if (typeName === 'ZodOptional' || typeName === 'ZodNullable' || typeName === 'ZodDefault') {
    return true;
  }

  if (typeName === 'ZodUnion') {
    return ((schema as any)._def.options as ZodTypeAny[]).some(isOptionalSchema);
  }

  return false;
};

const getObjectSchemaProps = (schema: ZodTypeAny): ComponentPropDefinition[] => {
  const def = (schema as any)._def;
  if (!def || def.typeName !== 'ZodObject') {
    return [];
  }

  const shapeDef = def.shape;
  const shape = typeof shapeDef === 'function' ? shapeDef() : shapeDef;
  if (!shape || typeof shape !== 'object') {
    return [];
  }

  return Object.entries(shape).map(([name, fieldSchema]) => ({
    name,
    type: getSchemaType(fieldSchema as ZodTypeAny),
    optional: isOptionalSchema(fieldSchema as ZodTypeAny),
    schema: fieldSchema as ZodTypeAny,
  }));
};

export function getComponentPropDefinitions(definition: TreeComponentDefinition<any, any>): ComponentPropDefinition[] {
  return getObjectSchemaProps(definition.propsSchema);
}
