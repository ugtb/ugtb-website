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
            'relative z-0 h-[640px] bg-neutral sm:flex-grow',
            className
          )}
        >
          <img class="absolute inset-x-0 inset-y-0" src={image} alt={title} />
          <div class="absolute inset-x-0 inset-y-0 flex max-w-[500px] flex-col justify-end sm:right-auto">
            <div class="px-6 py-8 sm:px-12">
              {(tag1 || tag2) && (
                <div class="mb-4 text-md-400">
                  <p class="mr-6 text-xxl-500">{tag1}</p>
                  <p>{tag2}</p>
                </div>
              )}
              <h3 class="text-H4-mobile lg:text-H4-desktop">{title}</h3>
            </div>
            <div class="bg-white px-6 py-10 sm:px-12">
              <p class="text-sm-400 text-neutral-dark">{description}</p>
              <ButtonLink
                class="mt-10 text-neutral-dark"
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
            <div class="relative h-80 w-full bg-neutral-soft">
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
            'group relative block h-[420px] border border-neutral-400 bg-neutral-soft shadow-md sm:h-[520px]',
            className
          )}
          href={linkHref}
          aria-label={linkText}
          {...props}
        >
          <img class="absolute inset-x-0 inset-y-0" src={image} alt={title} />
          <div class="absolute inset-x-0 inset-y-0 flex flex-col justify-between gap-4 bg-neutral-soft bg-opacity-40 px-8 py-10 opacity-0 transition-opacity group-hover:opacity-100 sm:gap-8 sm:px-12 sm:py-16">
            <h3 class="text-H5-mobile sm:text-H5-desktop">{title}</h3>
            {(tag1 || tag2) && (
              <div class="mt-4 flex items-center justify-between gap-4">
                <p class="text-xl-500 text-brand">{tag1}</p>
                <p class="text-md-700 uppercase text-neutral">{tag2}</p>
              </div>
            )}
          </div>
        </a>
      );

    case 'small':
      return (
        <a
          class={clsx(
            'group block border border-neutral-400 bg-white pl-6 shadow-md sm:pl-12',
            className
          )}
          href={linkHref}
          aria-label={linkText}
          {...props}
        >
          <div class="relative h-[192px] bg-neutral-soft [clip-path:polygon(0_calc(100%-64px),40px_100%,100%_100%,100%_0,0_0)]">
            <img class="absolute inset-x-0 inset-y-0" src={image} alt={title} />
          </div>
          <div class="pb-12 pr-6 pt-8 sm:pr-12">
            <h3 class="text-H5-mobile group-hover:text-brand sm:text-H5-desktop">
              {title}
            </h3>
            {(tag1 || tag2) && (
              <div class="mt-4 flex items-center justify-between gap-4">
                <p class="text-brand">{tag1}</p>
                <p class="uppercase text-neutral">{tag2}</p>
              </div>
            )}
          </div>
        </a>
      );

    default:
      return (
        <div
          class={clsx(
            'block border border-neutral-400 bg-white pl-6 shadow-md sm:pl-12',
            className
          )}
        >
          <div class="relative h-[288px] bg-neutral-soft [clip-path:polygon(0_calc(100%-64px),40px_100%,100%_100%,100%_0,0_0)] sm:h-[352px]">
            <img class="absolute inset-x-0 inset-y-0" src={image} alt={title} />
          </div>
          <div class="pb-12 pr-6 pt-8 sm:pr-12">
            <h3 class="text-H5-mobile sm:text-H5-desktop">{title}</h3>
            {(tag1 || tag2) && (
              <div class="mt-4 flex items-center justify-between gap-4">
                <p class="text-brand">{tag1}</p>
                <p class="uppercase text-neutral">{tag2}</p>
              </div>
            )}
            <ButtonLink
              class="mt-8"
              variant="tetriary"
              href={linkHref}
              {...props}
            >
              {linkText}
            </ButtonLink>
          </div>
        </div>
      );
  }
}
