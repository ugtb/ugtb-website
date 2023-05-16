import clsx from 'clsx';
import type { Image } from '~/types';

interface ProjectCardProps {
  class?: string;
  imageClass?: string;
  image: Image;
}

export default function ProjectCard({
  class: className,
  imageClass,
  image,
}: ProjectCardProps) {
  return (
    <div
      class={clsx(
        'group relative max-w-fit overflow-hidden shadow-md',
        className
      )}
    >
      <img
        class={clsx(
          'aspect-square transition-transform group-hover:scale-[1.01]',
          imageClass
        )}
        src={image.src}
        alt=""
        {...image.attributes}
      />
      <div class="absolute inset-x-0 inset-y-0 flex flex-col justify-between gap-10 bg-black/50 p-10 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <h3 class="-translate-y-full text-H5-mobile transition-transform group-hover:translate-y-0 lg:text-H5-desktop">
          Ремонт колектора
        </h3>
        <p class="flex translate-y-full items-center justify-between gap-10 transition-transform group-hover:translate-y-0">
          <span>Київ</span>
          <span>17 тра 2023</span>
        </p>
      </div>
    </div>
  );
}
