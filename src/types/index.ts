export interface Good {
  id: string;
  name: string;
  subname: string;
  description: string;
}

export interface CardInfo {
  title: string;
  tag1?: string;
  tag2?: string;
  description?: string;
  linkText: string;
  linkHref: string;
  image: string;
}

export type IconName =
  | 'logo'
  | 'location'
  | 'prev-arrow'
  | 'next-arrow'
  | 'right-arrow';
