import type { IconName } from '~/types';

interface IconProps {
  class?: string;
  name: IconName;
  size?: number;
}

export default function Icon({ class: className, name, size = 24 }: IconProps) {
  return (
    <svg
      class={className}
      width={size}
      height={size}
      dangerouslySetInnerHTML={{
        __html: `<use xlink:href=icons/icons.svg#${name}></use>`,
      }}
    ></svg>
  );
}
