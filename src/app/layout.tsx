import type { Metadata } from 'next';
import { Inter, Merriweather_Sans, Poppins, Sigmar_One } from 'next/font/google';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../components/header';
import Profile from '../components/profile';
import NavBar from '../components/nav';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

config.autoAddCss = false;

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['400', '500', '700'],
});

export const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['400', '600'],
});

export const merriWeatherSans = Merriweather_Sans({
	variable: '--font-merri-weather-sans',
	subsets: ['latin'],
	weight: ['400', '600'],
});

export const sigmaOne = Sigmar_One({
	variable: '--font-sigma-one',
	subsets: ['latin'],
	weight: ['400'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${sigmaOne.variable} ${poppins.variable} ${inter.variable} ${merriWeatherSans.variable} antialiased bg-background`}
			>
				<Header />
				<main className="flex gap-8 xl:gap-12 px-5 lg:px-6 pb-20 lg:pb-28 xl:max-w-[90vw] mx-auto mb-12">
					<Profile />

					{children}
					<NavBar />
					<Analytics />
					<SpeedInsights />
				</main>
			</body>
		</html>
	);
}
