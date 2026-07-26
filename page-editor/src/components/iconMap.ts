import type { ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'
import {
  BoxSelect,
  Award,
  CreditCard,
  Box,
  Image,
  LayoutGrid,
  Heading,
  List,
  Minus,
  Type,
  Video,
} from 'lucide-react'
import { ComponentTypes } from '@1000website/shared'

export type IconComponent = ComponentType<LucideProps>

export const iconMap: Record<ComponentTypes, IconComponent> = {
  Section: Box,
  Title: Heading,
  Text: Type,
  List: List,
  Space: BoxSelect,
  Divider: Minus,
  GridLayout: LayoutGrid,
  Card: CreditCard,
  Credits: Award,
  EmbedVideo: Video,
  MediaList: Image,
}
