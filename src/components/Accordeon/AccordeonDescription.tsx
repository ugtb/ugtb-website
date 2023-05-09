import type { AccordeoItem } from '~/types';

interface AccordeonDescriptionProps {
  item: AccordeoItem;
}

export const AccordeonDescription = ({ item }: AccordeonDescriptionProps) => {
  const { id, description } = item;
  return (
    <div class="bg-white pb-22 pt-10 sm:pb-10 sm:pl-12 sm:pr-12">
      <p class="mb-10 text-sm-400 text-neutral-dark">{description}</p>
      {/* <Button class="text-neutral-dark" variant="tetriary">Купити</Button> */}
    </div>
  );
};
