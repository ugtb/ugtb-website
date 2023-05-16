export type Image = {
  src: string;
  attributes: Record<string, unknown>;
};

export type IconName =
  | 'logo'
  | 'location'
  | 'mobile'
  | 'email'
  | 'prev'
  | 'next'
  | 'right';
