import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	output: 'server',
	site: 'https://DaveAdbeel.github.io',
	base: '/ICCP-Pagina-Feria-DH'
})