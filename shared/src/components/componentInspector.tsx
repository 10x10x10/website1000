import React from "react";
import type { InspectorComponentProps } from "./componentDefinition";
import type { ZodTypeAny } from "zod";
import type { z } from "zod";

const resolvePropInputType = (type: string, value: unknown): 'boolean' | 'number' | 'string' | 'array' | 'enum' | 'unsupported' => {
  if (/\benum\(/.test(type)) {
    return 'enum'
  }

  if (typeof value === 'boolean' || type.includes('boolean')) {
    return 'boolean'
  }

  if (typeof value === 'number' || type.includes('number')) {
    return 'number'
  }

  if (Array.isArray(value) || type.includes('[]')) {
    return 'array'
  }

  if (typeof value === 'string' || type.includes('string')) {
    return 'string'
  }

  return 'unsupported'
}

const parseEnumOptions = (type: string): string[] => {
  const match = type.match(/enum\(([^)]*)\)/)
  if (!match) return []
  return match[1].split(' | ').map((value) => JSON.parse(value))
}

const renderInputForProp = (
  value: unknown,
  type: string,
  onChange: (value: unknown) => void,
) => {
  const inputType = resolvePropInputType(type, value)

  if (inputType === 'enum') {
    const options = parseEnumOptions(type)
    return (
      <select
        value={value === undefined || value === null ? '' : String(value)}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }

  if (inputType === 'boolean') {
    return (
      <input
        type="checkbox"
        checked={Boolean(value)}
        onChange={(event) => onChange(event.target.checked)}
      />
    )
  }

  if (inputType === 'number') {
    return (
      <input
        type="number"
        value={value === undefined || value === null ? '' : String(value)}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    )
  }

  if (inputType === 'string' || inputType === 'array') {
    return (
      <textarea
        rows={4}
        style={{ width: '100%', resize: 'none' }}
        value={inputType === 'array' && Array.isArray(value) ? value.join('\n') : value === undefined || value === null ? '' : String(value)}
        onChange={(event) => onChange(inputType === 'array' ? event.target.value.split('\n') : event.target.value)}
      />
    )
  }

  if (value === null || value === undefined) {
    return <span style={{ color: '#888' }}>No editor for this prop type</span>
  }

  return <span style={{ color: '#888' }}>Unsupported prop type</span>
}

const getSchemaDef = (schema: unknown) => {
  if (schema && typeof schema === 'object') {
    return (schema as any)._def ?? (schema as any).def
  }
  return undefined
}

const getSchemaType = (schema: ZodTypeAny): string => {
  const def = getSchemaDef(schema)
  const typeName = def?.typeName ?? def?.type

  if (typeName === 'ZodString' || typeName === 'string') return 'string'
  if (typeName === 'ZodNumber' || typeName === 'number') return 'number'
  if (typeName === 'ZodBoolean' || typeName === 'boolean') return 'boolean'
  if (typeName === 'ZodEnum' || typeName === 'enum') {
    const values = def?.values ?? def?.options ?? Object.values(def?.enum ?? def?.entries ?? {})
    if (Array.isArray(values) && values.length > 0) {
      return `enum(${values.map((val: unknown) => JSON.stringify(val)).join(' | ')})`
    }
    return 'enum'
  }
  if (typeName === 'ZodArray' || typeName === 'array') {
    const elementSchema = def?.element ?? def?.type
    return `${getSchemaType(elementSchema)}[]`
  }
  if (typeName === 'ZodOptional' || typeName === 'optional') {
    return `${getSchemaType(def?.innerType)} | undefined`
  }
  if (typeName === 'ZodNullable' || typeName === 'nullable') {
    return `${getSchemaType(def?.innerType)} | null`
  }
  if (typeName === 'ZodDefault' || typeName === 'default') {
    return getSchemaType(def?.innerType)
  }
  if (typeName === 'ZodUnion' || typeName === 'union') {
    return ((def?.options ?? []) as ZodTypeAny[]).map(getSchemaType).join(' | ')
  }
  if (typeName === 'ZodLiteral' || typeName === 'literal') return JSON.stringify(def?.value)
  if (typeName === 'ZodObject' || typeName === 'object') return 'object'

  return String(typeName)
};

const isOptionalSchema = (schema: ZodTypeAny): boolean => {
  const def = getSchemaDef(schema)
  const typeName = def?.typeName ?? def?.type

  if (typeName === 'ZodOptional' || typeName === 'optional' || typeName === 'ZodNullable' || typeName === 'nullable' || typeName === 'ZodDefault' || typeName === 'default') {
    return true
  }

  if (typeName === 'ZodUnion' || typeName === 'union') {
    return ((def?.options ?? []) as ZodTypeAny[]).some(isOptionalSchema)
  }

  return false
};

const unwrapSchema = (schema: ZodTypeAny): ZodTypeAny => {
  const def = getSchemaDef(schema)
  const typeName = def?.typeName ?? def?.type

  if (typeName === 'ZodOptional' || typeName === 'optional' || typeName === 'ZodNullable' || typeName === 'nullable' || typeName === 'ZodDefault' || typeName === 'default') {
    return unwrapSchema(def?.innerType)
  }

  return schema
};

const getObjectSchemaProps = (schema: ZodTypeAny): { name: string; type: string; optional: boolean; schema: ZodTypeAny }[] => {
  const unwrapped = unwrapSchema(schema)
  const def = (unwrapped as any)._def
  const typeName = def?.typeName ?? def?.type
  if (!def || (typeName !== 'ZodObject' && typeName !== 'object')) {
    return []
  }

  const shapeDef = def.shape
  const shape = typeof shapeDef === 'function' ? shapeDef() : shapeDef
  if (!shape || typeof shape !== 'object') {
    return []
  }

  return Object.entries(shape).map(([name, fieldSchema]) => ({
    name,
    type: getSchemaType(fieldSchema as ZodTypeAny),
    optional: isOptionalSchema(fieldSchema as ZodTypeAny),
    schema: fieldSchema as ZodTypeAny,
  }))
};

export function createInspector<T extends string, P>(propsSchema: z.ZodType<P>): React.ComponentType<InspectorComponentProps<T, P>> {
  const propDefinitions = getObjectSchemaProps(propsSchema)

  return function Inspector({ node, onChangeProps }: InspectorComponentProps<T, P>) {
    const props = (node.props ?? {}) as Record<string, unknown>

    const handlePropChange = (propName: string, nextValue: unknown) => {
      onChangeProps({
        ...(node.props ?? {}),
        [propName]: nextValue,
      } as P)
    }

    if (propDefinitions.length === 0) {
      return (<div>
        No props available for this component.
      </div>)
    }

    return (
      <div>
        {propDefinitions.map((field) => (
          <div key={field.name} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 4 }}>
              <label style={{ fontWeight: 500 }}>{field.name}</label>
              <span style={{ color: '#666' }}>{field.type}</span>
            </div>
            {renderInputForProp(props[field.name], field.type, (next) => handlePropChange(field.name, next))}
          </div>
        ))}
      </div>
    )
  }
}

export function createEditor<T extends string, P>(propsSchema: z.ZodType<P>): React.ComponentType<InspectorComponentProps<T, P>> {
  const propDefinitions = getObjectSchemaProps(propsSchema)

  return function Editor({ node }: InspectorComponentProps<T, P>) {
    const props = (node.props ?? {}) as Record<string, unknown>
    const validation = propsSchema.safeParse(props)

    if (!validation.success) {
      return (
        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Invalid props</div>
          {validation.error.issues.map((issue, index) => (
            <div key={index} style={{ fontSize: 12 }}>
              <strong>{Array.isArray(issue.path) && issue.path.length > 0 ? issue.path.join('.') : '(root)'}</strong>: {String(issue.message)}
            </div>
          ))}
        </div>
      )
    }

    if (propDefinitions.length === 0) {
      return <div style={{ color: '#888' }}>No props available for this component</div>
    }

    return (
      <div>
        {propDefinitions.map((field) => (
          <div key={field.name} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 4 }}>
              <span style={{ fontWeight: 500 }}>{field.name}</span>
              <span style={{ color: '#666' }}>{field.type}</span>
            </div>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: '#fff' }}>
              {JSON.stringify(props[field.name], null, 2)}
            </pre>
          </div>
        ))}
      </div>
    )
  }
}

export function EmptyEditor<T extends string, P>({ node }: InspectorComponentProps<T, P>) {
  return <div style={{ color: '#888' }}>{node.type}</div>;
}

export function EmptyInspector<T extends string, P>({ node, onChangeProps }: InspectorComponentProps<T, P>) {
  return <div>{node.type}</div>;
}
