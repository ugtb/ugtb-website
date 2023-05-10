import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useRef, useState } from 'react';
import { demoGoods } from '~/constants';
import type { AccordeoItem } from '~/types';
import ButtonIcon, { type ButtonIconProps } from '../ButtonIcon';
import ButtonLink, { type ButtonLinkProps } from '../ButtonLink';
import Card, { type CardProps } from '../Card';
import AccordeonButton from './AccordeonButton.tsx';

interface AccordeonGalleryProps {
  cardsInfo: CardProps['info'][];
  cardVariant?: CardProps['variant'];
  navVariant?: ButtonIconProps['variant'];
  linkText: string;
  linkHref: string;
  linkVariant?: ButtonLinkProps['variant'];
}

export default function AccordeonGallery({
  cardsInfo,
  cardVariant = 'accordion',
  navVariant,
  linkText,
  linkHref,
  linkVariant,
}) {
  const [currentIndex, setCurrentIndex] = useState(cardsInfo.length - 1);
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <div class="text-white sm:border-l sm:border-l-neutral">
      <div ref={parent} class="sm:flex sm:gap-px">
        {demoGoods.map((info, i) =>
          currentIndex === i ? (
            <Card info={info} variant={cardVariant} />
          ) : (
            <AccordeonButton {...info} onClick={() => setCurrentIndex(i)} />
          )
        )}
      </div>
    </div>
  );
}
