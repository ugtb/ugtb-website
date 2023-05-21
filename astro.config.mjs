import netlify from '@astrojs/netlify/functions';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ugtb.kyiv.ua',
  integrations: [
    preact({
      compat: true,
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
  ],
  vite: {
    ssr: {
      noExternal: ['@formkit/auto-animate'],
    },
  },
  experimental: {
    assets: true,
  },
  output: 'server',
  adapter: netlify(),
});
