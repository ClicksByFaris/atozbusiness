// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

import vercel from '@astrojs/vercel';

import favicons from 'astro-favicons';

export default defineConfig({
  site: 'https://atozbusiness.ae',
  trailingSlash: 'ignore',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes('/studio') &&
        !page.includes('/admin'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    favicons(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  output: 'server',
  adapter: vercel({
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
  }),
  redirects: {
    '/services/family-visa-services-abudhabi': '/services/family-visa-abu-dhabi',
  }
});