export type Image = {
  src: string;
  attributes: Record<string, unknown>;
};

export type Company = {
  contacts: {
    name: string;
    shortName: string;
    fullName: string;
    addressLines?: string[];
    phones?: string[];
    emails?: string[];
    mapLatLng?: [number, number];
  };
  statistics: Record<string, number>;
};

export type IconName =
  | 'logo'
  | 'location'
  | 'mobile'
  | 'email'
  | 'prev'
  | 'next'
  | 'right';
