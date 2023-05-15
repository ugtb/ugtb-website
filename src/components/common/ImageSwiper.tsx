import clsx from 'clsx';
import { useEffect, useRef } from 'preact/hooks';
import { Navigation, type SwiperOptions } from 'swiper';
import { register } from 'swiper/element';
import type { Image } from '~/types';
import ButtonIcon from './ButtonIcon';
import ButtonLink, { type ButtonLinkProps } from './ButtonLink';

register();

export interface SwiperProps {
  class?: string;
  variant?: 'default' | 'alternate';
  navClass?: string;
  navVariant?: ButtonIconProps['variant'];
  imageClass?: string;
  buttonProps?: ButtonLinkProps;
  data: Image[];
}

export default function Swiper({
  class: className,
  variant = 'default',
  navClass,
  navVariant,
  imageClass,
  buttonProps,
  data,
}: SwiperProps) {
  const swiperEl = useRef(null);
  const prevEl = useRef<HTMLButtonElement>(null);
  const nextEl = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const swiperOptions: SwiperOptions = {
      modules: [Navigation],
      cssMode: true,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 40,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
      navigation: {
        prevEl: prevEl.current,
        nextEl: nextEl.current,
      },
    };

    Object.assign(swiperEl.current, swiperOptions);
    swiperEl.current.initialize();
  }, []);

  return (
    <div
      class={clsx(
        'flex gap-12 lg:gap-14',
        {
          'flex-col': variant === 'default',
          'flex-col-reverse': variant === 'alternate',
        },
        className
      )}
    >
      <swiper-container class="-my-2 w-full" ref={swiperEl} init="false">
        {data.map(({ src, attributes }) => (
          <swiper-slide class="h-full py-2">
            <img
              class={clsx('aspect-square', imageClass)}
              src={src}
              alt=""
              {...attributes}
            />
          </swiper-slide>
        ))}
      </swiper-container>

      <div class="space-y-12 sm:flex sm:flex-row-reverse sm:items-center sm:justify-between sm:space-y-0">
        <div class={clsx('flex justify-between gap-4', navClass)}>
          <ButtonIcon ref={prevEl} icon="prev" variant={navVariant} />
          <ButtonIcon ref={nextEl} icon="next" variant={navVariant} />
        </div>
        {buttonProps && <ButtonLink {...buttonProps} />}
      </div>
    </div>
  );
}
