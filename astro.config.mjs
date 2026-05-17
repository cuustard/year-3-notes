// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://cuustard.github.io',
	base: '/year-3-notes',
	integrations: [
		starlight({
			title: 'SCC Year 3 Notes',
			customCss: ['./src/styles/custom.css'],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/cuustard/year-3-notes',
				},
			],
			sidebar: [
				{
					label: 'Year 3 Notes',
					items: [
						{
							autogenerate: {
								directory: 'server-side-web',
							},
						},
					],
				},
			],
		}),
	],
});