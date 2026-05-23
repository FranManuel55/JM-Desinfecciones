import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviewsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    name: z.string(),
    rating: z.number().min(1).max(5),
    date: z.string(),
    text: z.string(),
    source: z.enum(['google', 'facebook', 'instagram']).default('google'),
  }),
});

const faqCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    order: z.number().optional().default(0),
  }),
});

const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    featured: z.boolean().default(false),
    order: z.number().optional().default(0),
  }),
});

export const collections = {
  reviews: reviewsCollection,
  faq: faqCollection,
  services: servicesCollection,
};