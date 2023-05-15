import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({ compat: true }),
    tailwind({ config: { applyBaseStyles: false } }),
  ],
  vite: {
    ssr: { noExternal: ['@formkit/auto-animate'] },
  },
  experimental: {
    assets: true,
  },
});
