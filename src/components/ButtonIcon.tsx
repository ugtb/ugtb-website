import clsx from 'clsx';
import { forwardRef } from 'preact/compat';
import Icon from './Icon';

export interface ButtonIconProps extends ComponentProps<'button'> {
  variant?: 'white' | 'brand';
  icon: IconName;
}

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ class: className, variant, icon, ...props }, ref) => {
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
      <button ref={ref} class={classes.button} {...props}>
        <Icon name={icon} size={16} />
      </button>
    );
  }
);

export default ButtonIcon;
