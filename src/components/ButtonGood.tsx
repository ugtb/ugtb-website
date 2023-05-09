import type { Good } from '~/types';

interface ButtonGoodProps {
  good: Good;
  onClick: () => void;
}

export const ButtonGood = ({ good, onClick }: ButtonGoodProps) => {
  const { id, name, subname } = good;
  return (
    <button
      onClick={onClick}
      class="hidden items-stretch justify-end gap-6 border-b border-l border-neutral-dark bg-brand px-6 text-white lg:flex lg:flex-col "
    >
      <div class="rotate-180 [writingMode:vertical-rl]">
        <p class="pb-2 text-xxl-500">{name}</p>
        <p class="text-left text-xl-500 opacity-40">{subname}</p>
      </div>
      <p class="border-t border-t-white py-6 text-xl-500">{id}</p>
    </button>
  );
};
