import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useRef, useState } from 'react';

import type { AccordeoItem } from '~/types';
import { AccordeonButton } from './AccordeonButton.tsx';
import { AccordeonCard } from './AccordeonCard';
// import { GoodDescription } from './GoodDescription.tsx';

const accordeonItems: AccordeoItem[] = [
  {
    id: '01',
    name: 'Штукатурки',
    subname: 'Cerecit - Knauf',
    description:
      "Довговічність будь-якого будівельного об'єкта багато в чому залежить від його гідроізоляції. Ми пропонуємо індивідуальні рішення навіть для самих складних проектів. Ми консультуємо і супроводжуємо клієнтів при застосуванні гідроізоляційних матеріалів.",
  },
  {
    id: '02',
    name: 'Клейові суміші',
    subname: 'Polimin - BauGut',
    description:
      "Довговічність будь-якого будівельного об'єкта багато в чому залежить від його гідроізоляції. Ми пропонуємо індивідуальні рішення навіть для самих складних проектів. Ми консультуємо і супроводжуємо клієнтів при застосуванні гідроізоляційних матеріалів.",
  },
  {
    id: '03',
    name: 'Ремонтні суміші',
    subname: 'Siltek',
    description:
      "Довговічність будь-якого будівельного об'єкта багато в чому залежить від його гідроізоляції. Ми пропонуємо індивідуальні рішення навіть для самих складних проектів. Ми консультуємо і супроводжуємо клієнтів при застосуванні гідроізоляційних матеріалів.",
  },
  {
    id: '04',
    name: 'Гідроізоляційні суміші',
    subname: 'BudMajster - Sika - Grover',
    description:
      "Довговічність будь-якого будівельного об'єкта багато в чому залежить від його гідроізоляції. Ми пропонуємо індивідуальні рішення навіть для самих складних проектів. Ми консультуємо і супроводжуємо клієнтів при застосуванні гідроізоляційних матеріалів.",
  },
];

export const AccordeonGallery = () => {
  const [currentGood, setCurrentGood] = useState(accordeonItems[3]);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  return (
    <div class="bg-neutral text-white sm:bg-neutral-dark">
      <div class="container sm:pr-0">
        <div
          ref={parent}
          class="sm:border-l sm:border-neutral-light sm:pl-18 lg:flex lg:pl-0"
        >
          {accordeonItems.map(item =>
            item.id === currentGood.id ? (
              <AccordeonCard item={item} />
            ) : (
              <AccordeonButton
                onClick={() => setCurrentGood(item)}
                item={item}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
