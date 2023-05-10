interface AccordeonCardProps {
  item: Record<string, string>;
}

export const AccordeonCard = ({ item }: AccordeonCardProps) => {
  const { id, name, subname, description } = item;
  return (
    <div class="relative z-0 h-[640px] bg-neutral sm:flex-grow">
      <div class="absolute inset-x-0 inset-y-0 flex max-w-[500px] flex-col justify-end sm:right-auto">
        <div class="px-6 py-8 sm:px-12">
          <p class="mb-4 text-md-400">
            <span class="mr-6 text-xxl-500">{id}</span>
            <span>{subname}</span>
          </p>
          <h3 class="text-H4-mobile lg:text-H4-desktop">{name}</h3>
        </div>
        <div class="bg-white px-6 py-10 sm:px-12">
          <p class="text-sm-400 text-neutral-dark">{description}</p>
          {/* <Button class="mt-10 text-neutral-dark" variant="tetriary">Купити</Button> */}
        </div>
      </div>
    </div>
  );
};
