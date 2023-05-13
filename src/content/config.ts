import { defineCollection, z } from 'astro:content';

const cardSchema = z.object({
  title: z.string(),
  shortTitle: z.string().optional(),
  images: z.string().array(),
  description: z.string().optional(),
  tags: z.string().array().optional(),
});

export type CardData = z.infer<typeof cardSchema>;

export const collections = {
  project: defineCollection({
    schema: cardSchema,
  }),

  service: defineCollection({
    schema: cardSchema,
  }),
};
