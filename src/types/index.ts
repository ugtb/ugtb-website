import type { CardData } from '~/content/config';

export interface Good {
  id: string;
  name: string;
  subname: string;
  description: string;
}

export interface CardInfo {
  id: string;
  slug: string;
  collection: string;
  data: CardData;
}

export type IconName =
  | 'logo'
  | 'location'
  | 'mobile'
  | 'email'
  | 'prev'
  | 'next'
  | 'right';
