import clsx from 'clsx';

import { useEffect, useRef } from 'preact/hooks';
import SwiperClass, { Navigation } from 'swiper';
import 'swiper/css';
import type { Image } from '~/types';
import ButtonIcon, { type ButtonIconProps } from './ButtonIcon';
import ButtonLink, { type ButtonLinkProps } from './ButtonLink';
import ProjectCard from './ProjectCard';

export interface SwiperProps {
  class?: string;
  variant?: 'default' | 'alternate';
  navClass?: string;
  navVariant?: ButtonIconProps['variant'];
  buttonProps?: ButtonLinkProps;
  imageClass?: string;
  data: Image[];
}

export default function ProjectsSwiper({
  class: className,
  variant = 'default',
  navClass,
  navVariant,
  buttonProps,
  imageClass,
  data,
}: SwiperProps) {
  const swiperEl = useRef<HTMLDivElement>(null);
  const prevEl = useRef<HTMLButtonElement>(null);
  const nextEl = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!swiperEl.current) {
      return;
    }

    new SwiperClass(swiperEl.current, {
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
    });
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
      <div class="swiper w-full" ref={swiperEl}>
        <ul class="swiper-wrapper">
          {data.map(image => (
            <li class="swiper-slide max-w-fit">
              <ProjectCard imageClass={imageClass} image={image} />
            </li>
          ))}
        </ul>
      </div>

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
