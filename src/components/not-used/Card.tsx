import clsx from 'clsx';
import type { CardInfo } from '~/types';
import ButtonLink from './ButtonLink';

export interface CardProps {
  class?: string;
  variant?: 'default' | 'small' | 'image' | 'large' | 'large-image';
  data: CardInfo;
  number?: number;
  href?: string;
}

export default function Card({
  class: className,
  variant = 'default',
  data,
  number,
  ...props
}: CardProps) {
  const {
    slug,
    collection,
    data: { title, images, description, tags },
  } = data;
  const href = collection + '/' + slug;
  const image = images?.at(0);

  const tagsText = tags?.join(' - ');
  const numberText = number ? String(number).padStart(2, '0') : undefined;

  switch (variant) {
    case 'large-image':
      return (
        <div
          class={clsx(
            'relative z-0 overflow-hidden bg-neutral-light sm:flex-grow',
            className
          )}
        >
          <img class="h-[600px]" src={image} alt={title} />
          <div class="absolute inset-x-0 inset-y-0 flex items-end bg-black/50">
            <div class="flex max-w-[500px] flex-col justify-end sm:right-auto">
              <div class="p-6 sm:p-8">
                <div class="mb-4 text-md-400">
                  <p class="mr-6 text-xxl-500">{numberText}</p>
                  {tagsText && <p>{tagsText}</p>}
                </div>
                <h3 class="text-H4-mobile lg:text-H4-desktop">{title}</h3>
              </div>
              <div class="bg-white p-6 sm:p-8">
                <p class="text-sm-400 text-neutral-dark">{description}</p>
                <ButtonLink
                  class="mt-8 text-neutral-dark"
                  variant="tetriary"
                  href={href}
                  {...props}
                >
                  Детальніше
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      );

    case 'large':
      return (
        <div
          class={clsx('flex flex-col gap-8 sm:flex-row lg:gap-10', className)}
        >
          <div class="relative shrink-0 basis-1/2 pl-22 md:pl-12 lg:pl-20">
            <p class="absolute -left-0 top-0 text-H1-mobile text-neutral-light md:-left-10 lg:-left-10 lg:text-H1-desktop">
              {numberText}
            </p>
            <div class="w-full bg-neutral-soft">
              <img class="h-[360px] shadow-md" src={image} alt={title} />
            </div>
          </div>

          <div class="flex flex-col items-start gap-6">
            <h2 class="text-H5-mobile lg:text-H5-desktop">{title}</h2>
            <p class="text-neutral">{description}</p>
            {false && (
              <ButtonLink
                class="ml-auto"
                variant="tetriary"
                href={href}
                {...props}
              >
                Детальніше
              </ButtonLink>
            )}
          </div>
        </div>
      );

    case 'image':
      return (
        <a
          class={clsx(
            'group relative block border border-neutral-400 bg-neutral-soft shadow-md',
            className
          )}
          href={href}
          aria-label="Детальніше"
          {...props}
        >
          <img class="h-[400px]" src={image} alt={title} />
          <div class="absolute inset-x-0 inset-y-0 flex flex-col justify-between gap-10 bg-black/50 p-10 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <h3 class="text-H5-mobile sm:text-H5-desktop">{title}</h3>
            {tagsText && <p class="text-xl-500">{tagsText}</p>}
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
          <div class="bg-neutral-soft [clip-path:polygon(0_calc(100%-64px),40px_100%,100%_100%,100%_0,0_0)]">
            <img
              class={variant === 'small' ? 'h-[200px]' : 'h-[360px]'}
              src={image}
              alt={title}
            />
          </div>
          <div class="space-y-4 pr-8 pt-8">
            <h3 class="line-clamp-2 min-h-[2.6em] text-H5-mobile sm:min-h-[2.8em] sm:text-H5-desktop">
              {title}
            </h3>
            {tagsText && <p class="text-brand">{tagsText}</p>}
            <ButtonLink variant="tetriary" href={href} {...props}>
              Детальніше
            </ButtonLink>
          </div>
        </div>
      );
  }
}
