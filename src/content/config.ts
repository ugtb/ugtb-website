import { defineCollection, z } from 'astro:content';

export const collections = {
  services: defineCollection({
    schema: ({ image }) =>
      z.object({
        number: z.number(),
        title: z.string(),
        image: image(),
        description: z.string().optional(),
      }),
  }),
};
