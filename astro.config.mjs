import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import nodejs from '@astrojs/node'

export default defineConfig({
	integrations: [tailwind()],
	output: "hybrid",
	adapter: nodejs({
    mode: 'middleware' // or 'standalone'
  }),
	site: 'https://DaveAdbeel.github.io',
	base: '/ICCP-Pagina-Feria-DH',
})