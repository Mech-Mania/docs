import { defineCollection} from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      // Extend the default Starlight schema
      extend: z.object({
        author: z.string(),
        lastEditor: z.string(),
        lastUpdated:z.any(),
        createdOn: z.any(),
        description: z.string(),
        title:z.string()
      }),
    }),
  }),
};
