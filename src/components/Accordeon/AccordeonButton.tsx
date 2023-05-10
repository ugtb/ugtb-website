import type { AccordeoItem } from '~/types';

interface AccordeonButtonProps {
  item: AccordeoItem;
  onClick: () => void;
}

export const AccordeonButton = ({ item, onClick }: AccordeonButtonProps) => {
  const { id, name, subname } = item;
  return (
    <button
      onClick={onClick}
      class="relative z-10 hidden items-stretch justify-end gap-6 bg-brand px-6 text-white sm:flex sm:flex-col "
    >
      <div class="rotate-180 [writingMode:vertical-rl]">
        <p class="pb-2 text-xxl-500">{name}</p>
        <p class="text-left text-xl-500 opacity-40">{subname}</p>
      </div>
      <p class="border-t border-t-white py-6 text-xl-500">{id}</p>
    </button>
  );
};
