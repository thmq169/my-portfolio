'use client';

import { useStore } from '@/store/store';
import {
	faContactBook,
	faLaptopCode,
	faNewspaper,
	faPenNib,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navInfo = [
	{
		title: 'about',
		icon: faUser,
		route: '/',
	},
	{
		title: 'experience',
		icon: faNewspaper,
		route: '/experience',
	},
	{
		title: 'projects',
		icon: faLaptopCode,
		route: '/projects',
	},
	{
		title: 'skills',
		icon: faPenNib,
		route: '/skills',
	},
	{
		title: 'contact',
		icon: faContactBook,
		route: '/contact',
	},
];

const NavBar = () => {
	const pathname = usePathname();
	const { setHamburger } = useStore();

	return (
		<nav className="fixed z-30 bottom-0 left-0 xl:relative font-poppins w-full xl:w-auto">
			<ul
				className={`bg-neutral-100 border-t-3 border-tertiary-300 xl:border-3 xl:border-tertiary-300 rounded-t-4xl xl:rounded-xl max-h-max xl:mt-36 px-4 py-6 lg:px-6 xl:py-7 grid grid-cols-5 xl:grid-cols-1 gap-3 md:gap-5`}
			>
				{navInfo.map((info) => {
					return (
						<li key={info.title}>
							<Link
								href={info.route}
								onClick={() => setHamburger(false)}
								className={`${
									pathname === info.route
										? 'bg-secondary-100 text-neutral-100'
										: 'bg-secondary-800 text-secondary-900'
								} hover:bg-secondary-100 hover:text-neutral-100 px-2 py-2 flex flex-col gap-1 items-center rounded-2xl md:rounded-full lg:rounded-sm`}
							>
								<FontAwesomeIcon icon={info.icon} className="text-lg md:text-2xl" />
								<span
									className={`${
										pathname === info.route && 'font-bold'
									} text-xs font-medium mt-1 capitalize`}
								>
									{info.title}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
