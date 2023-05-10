interface AccordeonButtonProps {
  title: string;
  tag1?: string;
  tag2?: string;
  onClick: () => void;
}

export default function AccordeonButton({
  title,
  tag1,
  tag2,
  onClick,
}: AccordeonButtonProps) {
  return (
    <button
      onClick={onClick}
      class="relative z-10 hidden items-stretch justify-end gap-6 bg-brand px-6 text-white sm:flex sm:flex-col "
    >
      <div class="rotate-180 [writingMode:vertical-rl]">
        <p class="pb-2 text-xxl-500">{title}</p>
        <p class="text-left text-xl-500 opacity-40">{tag2}</p>
      </div>
      <p class="border-t border-t-white py-6 text-xl-500">{tag1}</p>
    </button>
  );
}
