import { SectionDefinition } from './Section';
import { TitleDefinition } from './Title';
import { TextDefinition } from './Text';
import { ListDefinition } from './List';
import { SpaceDefinition } from './Space';
import { DividerDefinition } from './Divider';
import { GridLayoutDefinition } from './GridLayout';
import { CardDefinition } from './Card';
import { CreditsDefinition } from './Credits';
import { EmbedVideoDefinition } from './EmbedVideo';
import { MediaListDefinition } from './MediaList';

export { default as MediaList } from "./MediaList";

export const ComponentDefinitions = {
  Section: SectionDefinition,
  Title: TitleDefinition,
  Text: TextDefinition,
  List: ListDefinition,
  Space: SpaceDefinition,
  Divider: DividerDefinition,
  GridLayout: GridLayoutDefinition,
  Card: CardDefinition,
  Credits: CreditsDefinition,
  EmbedVideo: EmbedVideoDefinition,
  MediaList: MediaListDefinition,
} as const;

export type ComponentDefinitionMap = typeof ComponentDefinitions;
export type ComponentTypes = keyof ComponentDefinitionMap;