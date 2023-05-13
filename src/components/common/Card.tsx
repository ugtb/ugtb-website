import clsx from 'clsx';
import type { ComponentProps } from 'preact';
import type { CardInfo } from '~/types';
import ButtonLink from './ButtonLink';

export interface CardProps extends ComponentProps<'a'> {
  variant?: 'default' | 'small' | 'image' | 'large' | 'large-image';
  info: CardInfo;
}

export default function Card({
  class: className,
  variant = 'default',
  info: { title, tag1, tag2, description, linkText, linkHref, image },
  ...props
}: CardProps) {
  switch (variant) {
    case 'large-image':
      return (
        <div
          class={clsx(
            'relative z-0 h-[600px] bg-neutral sm:flex-grow',
            className
          )}
        >
          <img class="absolute inset-x-0 inset-y-0" src={image} alt={title} />
          <div class="absolute inset-x-0 inset-y-0 flex max-w-[500px] flex-col justify-end sm:right-auto">
            <div class="p-6 sm:p-8">
              {(tag1 || tag2) && (
                <div class="mb-4 text-md-400">
                  <p class="mr-6 text-xxl-500">{tag1}</p>
                  <p>{tag2}</p>
                </div>
              )}
              <h3 class="text-H4-mobile lg:text-H4-desktop">{title}</h3>
            </div>
            <div class="bg-white p-6 sm:p-8">
              <p class="text-sm-400 text-neutral-dark">{description}</p>
              <ButtonLink
                class="mt-8 text-neutral-dark"
                variant="tetriary"
                href={linkHref}
                {...props}
              >
                {linkText}
              </ButtonLink>
            </div>
          </div>
        </div>
      );

    case 'large':
      return (
        <div class={clsx('flex flex-col gap-10 sm:flex-row', className)}>
          <div class="relative shrink-0 basis-1/2 pl-24 md:pl-22 lg:pl-20">
            <p class="absolute -left-0 top-0 text-H0-mobile text-neutral-soft md:-left-8 lg:-left-16 lg:text-H0-desktop">
              {tag1}
            </p>
            <div class="relative h-[360px] w-full bg-neutral-soft">
              <img
                class="absolute inset-x-0 inset-y-0"
                src={image}
                alt={title}
              />
            </div>
          </div>

          <div class="flex flex-col items-start justify-between gap-6">
            <h2 class="text-H5-mobile lg:text-H5-desktop">{title}</h2>
            <p class="text-neutral">{description}</p>
            <ButtonLink
              class="ml-auto"
              variant="tetriary"
              href={linkHref}
              {...props}
            >
              {linkText}
            </ButtonLink>
          </div>
        </div>
      );

    case 'image':
      return (
        <a
          class={clsx(
            'group relative block h-[400px] border border-neutral-400 bg-neutral-soft shadow-md',
            className
          )}
          href={linkHref}
          aria-label={linkText}
          {...props}
        >
          <img class="absolute inset-x-0 inset-y-0" src={image} alt={title} />
          <div class="absolute inset-x-0 inset-y-0 flex flex-col justify-between gap-10 bg-neutral-soft bg-opacity-40 p-10 opacity-0 transition-opacity group-hover:opacity-100">
            <h3 class="text-H5-mobile sm:text-H5-desktop">{title}</h3>
            {(tag1 || tag2) && (
              <div class="flex items-center justify-between gap-10 text-xl-500">
                <p class="text-brand">{tag1}</p>
                <p class="text-neutral">{tag2}</p>
              </div>
            )}
          </div>
        </a>
      );

    case 'small':
    case 'default':
    default:
      return (
        <div
          class={clsx(
            'block border border-neutral-400 bg-white pb-8 pl-8 shadow-md',
            className
          )}
        >
          <div
            class={clsx(
              'relative bg-neutral-soft [clip-path:polygon(0_calc(100%-64px),40px_100%,100%_100%,100%_0,0_0)]',
              variant === 'small' ? 'h-[200px]' : 'h-[360px]'
            )}
          >
            <img class="absolute inset-x-0 inset-y-0" src={image} alt={title} />
          </div>
          <div
            class={clsx(
              'pr-8 pt-8',
              variant === 'small' ? 'space-y-4' : 'space-y-6'
            )}
          >
            <h3 class="text-H5-mobile sm:text-H5-desktop">{title}</h3>
            {(tag1 || tag2) && (
              <div class="flex items-center justify-between gap-10">
                <p class="text-brand">{tag1}</p>
                <p class="uppercase text-neutral">{tag2}</p>
              </div>
            )}
            <ButtonLink variant="tetriary" href={linkHref} {...props}>
              {linkText}
            </ButtonLink>
          </div>
        </div>
      );
  }
}
