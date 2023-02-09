// https://astro.build/config
import { defineConfig } from 'astro/config';

// Astro integrations
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";

// Third-party plugins
import yaml from '@rollup/plugin-yaml';

// Import site data
import site from './src/data/site.json';
import partytown from "@astrojs/partytown";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: [sitemap(), svelte(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), partytown({
    config: {
      // Recommended for Tag Manager
      forward: ["dataLayer.push"]
    }
  }), image()],
  vite: {
    plugins: [yaml()]
  }
});