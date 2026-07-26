import React from "react";
import type { InspectorComponentProps, TreeComponentDefinition } from "../componentDefinition";
import classNames from "classnames";
import Media from "../Media";
import { z } from "zod";

import type { InjectedViewportProps } from 'react-in-viewport';
import { handleViewport } from 'react-in-viewport';
import StepCount from "../editor-inspector/StepCount";
import Field from "../editor-inspector/Field";
import MediaListEditor from "../editor-inspector/MediaListEditor";

export const MediaListPropsSchema = z.object({
  links: z.union([z.array(z.string())]).optional(),
  title: z.string().optional(),
  col: z.number().optional(),
  mCol: z.number().optional(),
}).strict();

export const MediaListDefinition: TreeComponentDefinition<"MediaList", MediaListProps> = {
  type: "MediaList",
  component: MediaList,
  propsSchema: MediaListPropsSchema,
  allowChildren: [],
  inspectorComponent: MediaListInspector,
  editorComponent: MediaListViewer,
};

type MediaListProps = z.infer<typeof MediaListPropsSchema>;

type MediaProps = {
  link: string
}

type ViewportMediaProps = MediaProps & InjectedViewportProps<HTMLDivElement>;

const ViewportMedia = handleViewport<HTMLDivElement, ViewportMediaProps>(Media);

export default function MediaList({ links = [], title = "", col = 0, mCol = col }: MediaListProps) {
  function getLinks(linksValue: string[]) {
    const linkList = linksValue;

    return linkList
      .filter((n) => n !== "" && !n.startsWith("//"))
      .map((n) => n)
      .filter((n): n is string => typeof n === 'string');
  }

  function getClass(colValue: number, mColValue: number) {
    const colClassName = "grid-c" + colValue;
    const mColClassName = "m-grid-c" + mColValue;
    return {
      [colClassName]: true,
      [mColClassName]: true,
    };
  }

  return (
    <div className="media-list-container">
      {title ? (
        <div className="project-text-container project-view-title">
          <h2>{title}</h2>
        </div>
      ) : null}
      <div className={classNames("grid-c", getClass(col, mCol))}>
        {getLinks(links).map((link) => (
          <div className="media-container" key={link}>
            <ViewportMedia link={link} />
          </div>
        ))}
      </div>
    </div>
  );
}

function MediaListInspector({ node, onChangeProps }: InspectorComponentProps<"MediaList", MediaListProps>) {
  if (!node.props) {
    return (<p>no props</p>)
  }

  const links = node.props.links ?? [];

  return (
    <div>
      <div>
        <Field label={'col'} >
          <StepCount
            value={node.props.col ?? 1}
            max={4}
            onChange={(v) => {
              onChangeProps({
                ...node.props,
                col: v,
              })
            }}
          />
        </Field>
        <Field label={"mCol"}>
          <StepCount
            value={node.props.mCol ?? 1}
            max={4}
            size={24}
            onChange={(v) => {
              onChangeProps({
                ...node.props,
                mCol: v,
              })
            }}
          />
        </Field>
      </div>
      <Field label={'links'} direction={"column"}>
        <MediaListEditor
          value={links}
          onChange={(nextLinks) => onChangeProps({
            ...node.props,
            links: nextLinks,
          })}
          col={1}
          itemHeight={100}
        />
      </Field>
    </div>
  )
}


function MediaListViewer({ node }: InspectorComponentProps<"MediaList", MediaListProps>) {
  if (!node.props) {
    return (<div style={{ color: '#888' }}>No media configuration provided.</div>)
  }

  const rawLinks = node.props.links
  if (!Array.isArray(rawLinks)) {
    return (<div style={{ color: '#f59e0b' }}>Media links must be an array.</div>)
  }

  const links = rawLinks
    .filter((link): link is string => typeof link === 'string')
    .map((link) => link.trim())
    .filter((link) => link !== '' && !link.startsWith('//'))

  if (links.length === 0) {
    return (<div style={{ color: '#888' }}>No valid media links available.</div>)
  }

  const col = 4;

  return (
    <div
      style={{
        display: 'grid',
        gap: 12,
        gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
      }}
    >
      {links.map((link, index) => (
        <div
          key={`${link}-${index}`}
          style={{
            minHeight: 120,
            borderRadius: 14,
            overflow: 'hidden',
            background: '#111',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ViewportMedia link={link} />
        </div>
      ))}
    </div>
  )
}
