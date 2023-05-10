import { useEffect, useRef } from 'preact/hooks';
import { Navigation, type SwiperOptions } from 'swiper';
import { register } from 'swiper/element';
import type { CardInfo } from '~/types';
import ButtonIcon, { type ButtonIconProps } from './ButtonIcon';
import ButtonLink, { type ButtonLinkProps } from './ButtonLink';
import Card, { type CardProps } from './Card';

register();

interface SwiperProps {
  cardsInfo: CardProps['info'][];
  cardVariant?: CardProps['variant'];
  navVariant?: ButtonIconProps['variant'];
  linkText: string;
  linkHref: string;
  linkVariant?: ButtonLinkProps['variant'];
}

export default function Swiper({
  cardsInfo,
  cardVariant = 'default',
  navVariant = 'white',
  linkText,
  linkHref,
  linkVariant = 'primary',
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

  return (
    <div>
      <swiper-container ref={swiperEl} init="false">
        {cardsInfo.map(info => (
          <swiper-slide>
            <Card variant={cardVariant} info={info} />
          </swiper-slide>
        ))}
      </swiper-container>

      <div class="mt-12 sm:flex sm:flex-row-reverse sm:items-center sm:justify-between lg:mt-14">
        <div class="mb-12 flex justify-between gap-4 px-6 sm:mb-0 sm:px-10">
          <ButtonIcon ref={prevEl} icon="prev-arrow" variant={navVariant} />
          <ButtonIcon ref={nextEl} icon="next-arrow" variant={navVariant} />
        </div>
        {linkText && linkHref && (
          <ButtonLink href={linkHref} variant={linkVariant}>
            {linkText}
          </ButtonLink>
        )}
      </div>
    </div>
  );
}
