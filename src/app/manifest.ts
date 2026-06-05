import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'THMQ Portfolio',
		short_name: 'THMQ',
		description:
			'Portfolio of Tô Hoàng Minh Quân — Software Engineer specializing in enterprise applications, scalable UI architectures, and modern web development with React, Next.js, and TypeScript.',
		start_url: '/',
		display: 'standalone',
		orientation: 'portrait',
		background_color: '#ffffff',
		theme_color: '#625839',
		icons: [
			{ src: '/pwa-icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ src: '/pwa-icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ src: '/pwa-icons/icon-48x48.png', sizes: '48x48', type: 'image/png' },
			{ src: '/pwa-icons/icon-64x64.png', sizes: '64x64', type: 'image/png' },
			{ src: '/pwa-icons/icon-128x128.png', sizes: '128x128', type: 'image/png' },
			{ src: '/pwa-icons/icon-180x180.png', sizes: '180x180', type: 'image/png' }, // Apple Touch Icon
			{ src: '/pwa-icons/icon-192x192.png', sizes: '192x192', type: 'image/png' }, // PWA
			{ src: '/pwa-icons/icon-256x256.png', sizes: '256x256', type: 'image/png' },
			{ src: '/pwa-icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }, // Splash Screen
		],
	};
}
