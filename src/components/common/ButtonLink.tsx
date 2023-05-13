import clsx from 'clsx';
import type { ComponentProps } from 'preact';
import Icon from './Icon';

export interface ButtonLinkProps extends ComponentProps<'a'> {
  variant?: 'primary' | 'secondary' | 'tetriary';
}

export default function ButtonLink({
  class: className,
  variant = 'primary',
  children,
  ...props
}: ButtonLinkProps) {
  const classes = {
    a: clsx(
      'group inline-flex items-center gap-4 px-6 py-4 text-button uppercase border border-solid',
      {
        'rounded bg-brand text-white border-brand shadow-md':
          variant === 'primary',
        'rounded bg-white text-neutral-dark border-white shadow-md':
          variant === 'secondary',
        'rounded-full bg-transparent text-current border-current hover:text-brand transition-colors':
          variant === 'tetriary',
      },
      className
    ),
    icon: 'transition-transform group-hover:translate-x-1',
  };

  return (
    <a class={classes.a} {...props}>
      {children}
      {variant !== 'tetriary' && <Icon class={classes.icon} name="next" />}
    </a>
  );
}
