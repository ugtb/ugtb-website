import { getImage } from 'astro:assets';

type Options = {
  files: Record<string, any>[];
  width: number;
  height: number;
};

export async function getImages({ files, width, height }: Options) {
  const images = await Promise.all(
    files.map(file => getImage({ src: file.default, width, height }))
  );
  return images;
}
