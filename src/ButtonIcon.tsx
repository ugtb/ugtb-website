import clsx from 'clsx';
import IconName from '~/types';
import { Icon } from './Icon';

interface ButtonIconProps {
  class?: string;
  variant?: 'white' | 'brand';
  icon: IconName;
}

export function ButtonIcon({
  class: className,
  variant = 'white',
  icon,
}: ButtonIconProps) {
  const classes = {
    button: clsx(
      'inline-flex items-center justify-center p-2.5 border-2 rounded-full disabled:opacity-50',
      {
        'text-white bg-transparent border-white hover:enabled:text-brand hover:enabled:bg-white':
          variant === 'white',
        'text-brand bg-transparent border-brand hover:enabled:text-white hover:enabled:bg-brand':
          variant === 'brand',
      },
      className
    ),
  };

  return (
    <button class={classes.button} {...props}>
      <Icon name={icon} size={16} />
    </button>
  );
}
