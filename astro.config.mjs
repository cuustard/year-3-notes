// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkCallout from '@r4ai/remark-callout';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://cuustard.github.io',
	base: '/year-3-notes',
	markdown: {
		remarkPlugins: [remarkCallout],
	},
	integrations: [
		mermaid({
			autoTheme: true,
			enableLog: false,
			mermaidConfig: {
				themeVariables: {
					fontFamily: 'Inter, system-ui, sans-serif',
				},
				flowchart: {
					curve: 'basis',
					padding: 12,
					nodeSpacing: 50,
					rankSpacing: 60,
				},
			},
		}),
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
					label: 'Notes',
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