import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useRef, useState } from 'react';

import type { Good } from '~/types';
import { ButtonGood } from './ButtonGood.tsx';
import { GoodDescription } from './GoodDescription.tsx';
import { GoodPhoto } from './GoodPhoto';

const goods: Good[] = [
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

export const GoodsGallery = () => {
  const [currentGood, setCurrentGood] = useState(goods[3]);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  return (
    <section class="">
      <div class="bg-neutral text-white sm:bg-neutral-dark">
        <div class="container sm:pr-0">
          <div
            ref={parent}
            class="sm:border-l sm:border-neutral-light sm:pl-18 lg:flex lg:pl-0"
          >
            {goods.map(good =>
              good.id === currentGood.id ? (
                <GoodPhoto good={good} />
              ) : (
                <ButtonGood onClick={() => setCurrentGood(good)} good={good} />
              )
            )}
            <div class="hidden sm:block lg:hidden">
              <GoodDescription good={goods[0]} />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white sm:hidden">
        <div class="container">
          <GoodDescription good={goods[0]} />
        </div>
      </div>
    </section>
  );
};
