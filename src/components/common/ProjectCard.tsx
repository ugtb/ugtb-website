import type { CollectionEntry } from 'astro:content';
import clsx from 'clsx';

export interface ProjectCardProps {
  class?: string;
  imageClass?: string;
  title: CollectionEntry<'projects'>['data']['title'];
  address: CollectionEntry<'projects'>['data']['address'];
  date: CollectionEntry<'projects'>['data']['date'];
  image: CollectionEntry<'projects'>['data']['images'][number];
}

export default function ProjectCard({
  class: className,
  imageClass,
  title,
  address,
  date,
  image,
}: ProjectCardProps) {
  return (
    <div class={clsx('group relative overflow-hidden shadow-md', className)}>
      <img
        class={clsx(
          'aspect-square w-full transition-transform group-hover:scale-[1.01]',
          imageClass
        )}
        src={image.src}
        width="600"
        height="600"
        alt={title}
      />
      <div class="absolute inset-x-0 inset-y-0 flex flex-col justify-between gap-6 bg-black/50 p-6 text-white opacity-0 transition-opacity group-hover:opacity-100 md:gap-10 md:p-10">
        <h3 class="-translate-y-full text-xxl-500 transition-transform group-hover:translate-y-0">
          {title}
        </h3>
        <p class="flex translate-y-full justify-between gap-20 text-lg-400 transition-transform group-hover:translate-y-0">
          <span>{address}</span>
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
}
