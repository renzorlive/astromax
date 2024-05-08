import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://rnz.ro',
  integrations: [tailwind(), sitemap(), partytown(), playformCompress()]
});