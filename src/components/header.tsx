'use client';

import { useStore } from '@/store/store';
import { faHamburger, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';

const ROTATION_RANGE = 62.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const Header = () => {
	const { setHamburger, darkMode, setDarkMode, userSetTheme, setUserSetTheme } = useStore();

	const handleColorScheme = () => {
		const mode = darkMode === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', mode);
		setDarkMode(mode);
		setUserSetTheme(true);
	};

	const ref = useRef<HTMLDivElement | null>(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const xSpring = useSpring(x);
	const ySpring = useSpring(y);

	const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return [0, 0];

		const rect = ref.current.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
		const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

		const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
		const rY = mouseX / width - HALF_ROTATION_RANGE;

		x.set(rX);
		y.set(rY);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	useEffect(() => {
		if (userSetTheme) return;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const mode = mediaQuery.matches ? 'dark' : 'light';

		setDarkMode(mode);
		document.documentElement.setAttribute('data-theme', mode);

		const listener = () => {
			setDarkMode(mode);
		};

		mediaQuery.addEventListener('change', listener);

		return () => mediaQuery.removeEventListener('change', listener);
	}, []);

	return (
		<header className="flex items-center justify-between text-primary-200 text-2xl lg:text-[38px] py-6 px-4 lg:py-8 w-full lg:max-w-[75%] mx-auto">
			<div className="flex gap-4 items-center">
				<div className="lg:hidden">
					<FontAwesomeIcon
						onClick={() => setHamburger()}
						icon={faHamburger}
						className="cursor-pointer"
					/>
				</div>
				<motion.div
					ref={ref}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					style={{
						transformStyle: 'preserve-3d',
						transform,
					}}
					className="hidden relative lg:flex justify-center items-center w-[300px] h-[70px] overflow-hidden"
				>
					<h1
						className={`absolute font-sigma-one transition-all duration-200 cursor-none hover:bg-secondary-700 rounded-3xl px-6`}
					>
						MQuan169
					</h1>
				</motion.div>
			</div>
			<h1 className="font-sigma-one lg:hidden">MQuan169</h1>
			<div
				onClick={handleColorScheme}
				className="w-[40px] h-[40px] lg:w-[59px] lg:h-[59px] rounded-full bg-secondary-100 flex justify-center items-center cursor-pointer"
			>
				{darkMode === 'dark' ? (
					<FontAwesomeIcon icon={faLightbulb} className="text-xl lg:text-3xl text-neutral-100" />
				) : (
					<FontAwesomeIcon icon={faMoon} className="text-xl lg:text-3xl text-neutral-100" />
				)}
			</div>
		</header>
	);
};

export default Header;
