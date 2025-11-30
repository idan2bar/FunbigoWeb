// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: "https://www.funbigo.com",

  redirects: {
      // HTTP 302 - Temporary Redirect (for allowing future changes)
      '/qr': { destination: 'https://linktr.ee/funbigo', status: 302 },
      '/community': { destination: 'https://linktr.ee/funbigo', status: 302 },
      '/discord': { destination: 'https://discord.gg/T59A7NjwKz', status: 302 },
      '/whatsapp': { destination: 'https://chat.whatsapp.com/GjSQyTo90jCLDLC2YqqUpo', status: 302 },
      '/googlePlay': { destination: 'https://play.google.com/store/apps/details?id=com.Funbigo', status: 302 },
  },

  adapter: node({
    mode: 'standalone'
  })
});