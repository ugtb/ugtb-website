import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useState } from 'react';
import { useMediaQuery } from '~/hooks';
import Card from './Card';
import Swiper, { type SwiperProps } from './Swiper';

export type AccordionProps = Pick<
  SwiperProps,
  'data' | 'navVariant' | 'navClass'
>;

export default function Accordion({
  data,
  navVariant,
  navClass,
}: AccordionProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [currentIndex, setCurrentIndex] = useState(data.length - 1);
  const [parent] = useAutoAnimate();

  return isDesktop ? (
    <div
      ref={parent}
      class="h-[600px] text-white sm:flex sm:gap-px sm:border-l sm:border-l-neutral"
    >
      {data.map((item, i) =>
        currentIndex === i ? (
          <Card variant="large-image" data={item} number={i + 1} />
        ) : (
          <button
            class="relative z-10 hidden gap-6 overflow-hidden bg-brand px-2 pt-2 text-white sm:flex sm:flex-col sm:items-stretch sm:justify-end"
            onClick={() => setCurrentIndex(i)}
          >
            <div class="">
              <p class="rotate-180 whitespace-nowrap px-4 pb-4 text-xxl-500 [writing-mode:vertical-rl]">
                {item.data.shortTitle ?? item.data.title}
              </p>
            </div>
            <p class="border-t border-t-white py-4 text-xl-500">
              {String(i + 1).padStart(2, '0')}
            </p>
          </button>
        )
      )}
    </div>
  ) : (
    <Swiper
      variant="alternate"
      cardVariant="large-image"
      navVariant={navVariant}
      navClass={navClass}
      data={data}
    />
  );
}
