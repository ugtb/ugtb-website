import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [
    preact({ compat: true }),
    tailwind({ config: { applyBaseStyles: false } }),
  ],
  vite: {
    ssr: { noExternal: ['@formkit/auto-animate'] },
  },
});
