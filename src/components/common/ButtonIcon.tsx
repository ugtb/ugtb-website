import clsx from 'clsx';
import { forwardRef, type ComponentProps } from 'preact/compat';
import type { IconName } from '~/types';
import Icon from './Icon';

export interface ButtonIconProps extends ComponentProps<'button'> {
  variant?: 'brand' | 'white';
  icon: IconName;
}

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ class: className, variant = 'brand', icon, ...props }, ref) => {
    const classes = {
      button: clsx(
        'inline-flex items-center justify-center p-2.5 border-2 rounded-full disabled:opacity-50',
        {
          'text-brand bg-transparent border-brand hover:enabled:text-white hover:enabled:bg-brand':
            variant === 'brand',
          'text-white bg-transparent border-white hover:enabled:text-brand hover:enabled:bg-white':
            variant === 'white',
        },
        className
      ),
    };
    return (
      <button ref={ref} class={classes.button} {...props}>
        <Icon name={icon} size={16} />
      </button>
    );
  }
);

export default ButtonIcon;
