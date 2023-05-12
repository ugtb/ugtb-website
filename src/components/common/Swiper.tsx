import clsx from 'clsx';
import { useEffect, useRef } from 'preact/hooks';
import { Navigation, type SwiperOptions } from 'swiper';
import { register } from 'swiper/element';
import { type CardInfo } from '~/types';
import ButtonIcon, { type ButtonIconProps } from './ButtonIcon';
import ButtonLink, { type ButtonLinkProps } from './ButtonLink';
import Card, { type CardProps } from './Card';

register();

export interface SwiperProps {
  class?: string;
  navClass?: string;
  linkClass?: string;
  variant?: 'default' | 'alternate';
  cardVariant?: CardProps['variant'];
  navVariant?: ButtonIconProps['variant'];
  linkVariant?: ButtonLinkProps['variant'];
  cardsInfo: CardInfo[];
  linkText?: string;
  linkHref?: string;
}

export default function Swiper({
  class: className,
  navClass,
  linkClass,
  variant = 'default',
  cardVariant = 'default',
  navVariant = 'white',
  linkVariant = 'primary',
  cardsInfo,
  linkText,
  linkHref,
}: SwiperProps) {
  const swiperEl = useRef<HTMLElement>(null);
  const prevEl = useRef<HTMLButtonElement>(null);
  const nextEl = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const swiperOptions: SwiperOptions = {
      modules: [Navigation],
      cssMode: true,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1440: {
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

  const classes = {
    root: clsx(
      'flex gap-12 lg:gap-14',
      {
        'flex-col': variant === 'default',
        'flex-col-reverse': variant === 'alternate',
      },
      className
    ),
    nav: clsx('flex justify-between gap-4', navClass),
  };

  return (
    <div class={classes.root}>
      <swiper-container class="-my-2 w-full" ref={swiperEl} init="false">
        {cardsInfo.map(info => (
          <swiper-slide class="py-2">
            <Card variant={cardVariant} info={info} />
          </swiper-slide>
        ))}
      </swiper-container>

      <div class="space-y-12 sm:flex sm:flex-row-reverse sm:items-center sm:justify-between sm:space-y-0">
        <div class={classes.nav}>
          <ButtonIcon ref={prevEl} icon="prev-arrow" variant={navVariant} />
          <ButtonIcon ref={nextEl} icon="next-arrow" variant={navVariant} />
        </div>
        {linkText && linkHref && (
          <ButtonLink class={linkClass} href={linkHref} variant={linkVariant}>
            {linkText}
          </ButtonLink>
        )}
      </div>
    </div>
  );
}
