import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useState } from 'react';
import { useMediaQuery } from '~/hooks';
import Card from './Card';
import Swiper, { type SwiperProps } from './Swiper';

export type AccordionProps = Pick<
  SwiperProps,
  'cardsInfo' | 'navVariant' | 'navClass'
>;

export default function Accordion({
  cardsInfo,
  navVariant,
  navClass,
}: AccordionProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [currentIndex, setCurrentIndex] = useState(cardsInfo.length - 1);
  const [parent] = useAutoAnimate();

  return isDesktop ? (
    <div class="text-white sm:border-l sm:border-l-neutral">
      <div ref={parent} class="sm:flex sm:gap-px">
        {cardsInfo.map((info, i) =>
          currentIndex === i ? (
            <Card variant="large-image" info={info} />
          ) : (
            <button
              class="relative z-10 hidden items-stretch justify-end gap-5 bg-brand px-5 text-white sm:flex sm:flex-col"
              onClick={() => setCurrentIndex(i)}
            >
              <div class="rotate-180 [writingMode:vertical-rl]">
                <p class="pb-2 text-xxl-500">{info.title}</p>
                <p class="text-left text-xl-500 opacity-40">{info.tag2}</p>
              </div>
              <p class="border-t border-t-white py-5 text-xl-500">
                {info.tag1}
              </p>
            </button>
          )
        )}
      </div>
    </div>
  ) : (
    <Swiper
      variant="alternate"
      cardVariant="large-image"
      navVariant={navVariant}
      navClass={navClass}
      cardsInfo={cardsInfo}
    />
  );
}
