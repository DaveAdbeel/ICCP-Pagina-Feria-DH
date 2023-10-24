import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import nodejs from '@astrojs/node'

export default defineConfig({
	integrations: [tailwind()],
	output: 'hybrid',
	site: 'https://DaveAdbeel.github.io',
	adapter: nodejs({
    	mode: 'middleware' 
  })

})