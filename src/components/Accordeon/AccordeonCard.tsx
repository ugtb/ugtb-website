import type { HTMLAttributes } from 'astro/types';
import { AccordeonDescription } from './AccordeonDescription';

export const AccordeonCard = ({ item }) => {
  const { id, name, subname, description } = item;
  return (
    <>
      <div class="bg-neutral pb-8 pt-48 sm:pl-12 lg:relative lg:flex-grow lg:pb-78">
        <p class="mb-4 text-md-400">
          <span class="mr-6 text-xxl-500">{id}</span>
          {subname}
        </p>
        <h3 class="text-H4-mobile lg:text-H4-desktop">{name}</h3>
        <div class="hidden  lg:absolute lg:bottom-0 lg:left-0 lg:block lg:max-w-[500px]">
          <AccordeonDescription item={item} />
        </div>
      </div>

      {/* Screen sm-md */}
      <div class="hidden sm:block lg:hidden">
        <AccordeonDescription item={item} />
      </div>

      {/* Screen mobile */}
      <div class="bg-white sm:hidden">
        <div class="container">
          <AccordeonDescription item={item} />
        </div>
      </div>
    </>
  );
};
