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

  projects: defineCollection({
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        address: z.string(),
        date: z.string(),
        images: image().array(),
      }),
  }),

  companies: defineCollection({
    schema: z.object({
      contacts: z.object({
        name: z.string(),
        shortName: z.string(),
        fullName: z.string(),
        addressLines: z.string().array(),
        phones: z.string().array(),
        emails: z.string().array(),
        mapLatLng: z.tuple([z.number(), z.number()]),
      }),
      statistics: z.record(z.number()),
    }),
  }),
};
