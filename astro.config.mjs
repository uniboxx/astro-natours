// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://site_name.netlify.app',
  output: 'server',
  adapter: netlify(),
  integrations: [sitemap()],
});
