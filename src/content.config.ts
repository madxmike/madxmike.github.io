import { defineCollection, z } from 'astro:content';
import { rssSchema } from '@astrojs/rss';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: rssSchema.extend({
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
