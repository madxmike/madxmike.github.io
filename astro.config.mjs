import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    site: 'https://blog.michaelepps.me',
    plugins: [],
    integrations: [tailwind()],
})
