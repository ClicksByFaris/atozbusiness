// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

import favicons from 'astro-favicons';

export default defineConfig({
  site: 'https://atozbusiness.ae',
  integrations: [react(), tailwind(), sitemap({
    filter: (page) =>
      !page.includes('/studio') &&
      !page.includes('/admin'),
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
    customPages: [
      'https://atozbusiness.ae/',
      'https://atozbusiness.ae/about',
      'https://atozbusiness.ae/contact',
      'https://atozbusiness.ae/careers',
      'https://atozbusiness.ae/privacy-policy',
      'https://atozbusiness.ae/terms-of-service',
    ],
  }), favicons()],
  output: 'server',
  adapter: vercel({
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
  }),
});