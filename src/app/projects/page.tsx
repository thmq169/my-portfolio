'use client';

import Wrapper from '@/components/wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import LinkIcon from '@/components/icons/HrefIcon';
import InforIcon from '@/components/icons/InforIcon';
import ExternalLinkIcon from '@/components/icons/ExternalLinkIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface Project {
	image: string;
	title: string;
	website: string | null;
	description: string;
	techStack: string[];
}

const projectsData: Project[] = [
	{
		image: '/images/movie-mern.png',
		title: 'Movie - MERN',
		website: 'https://movflix-thmq169.vercel.app/',
		description:
			'A fullstack movie web app where users can discover movies, TV series, and people. Features include user authentication with session management, a favorites system, a review module (create & delete), and a dynamic search with query handling. Includes a light/dark theming system with centralized state.',
		techStack: [
			'ReactJS',
			'Material UI',
			'React Router V6',
			'SwiperJS',
			'Formik',
			'Yup',
			'Axios',
			'ExpressJS',
			'MongoDB',
			'Jsonwebtoken',
		],
	},
	{
		image: '/images/kanban-mern.png',
		title: 'Kanban - MERN',
		website: 'https://kanban-thmq169.vercel.app/',
		description:
			'A fullstack Kanban board built on a modular architecture. Features scalable data models for dynamic task management, secure JWT authentication, drag-and-drop workflow, and real-time state synchronization between client and server.',
		techStack: [
			'ReactJS',
			'Material UI',
			'React Redux',
			'React Router V6',
			'Axios',
			'React Beautiful DnD',
			'ExpressJS',
			'MongoDB',
			'Jsonwebtoken',
		],
	},
	{
		image: '/images/event.png',
		title: 'Event Management',
		website: 'https://event-thmq169.vercel.app/',
		description:
			'An internal event management platform for organizing, tracking, and managing events including discover, book, attend various events with authentication, event management, search, filtering, categories, checkout, and payments. Built as a unified interface with responsive design and structured data handling across modules.',
		techStack: [
			'NextJS',
			'ReactJS',
			'TypeScript',
			'TailwindCSS',
			'Shadcn',
			'React Hook Form',
			'Zod',
			'Uploadthing',
			'React-Datepicker',
			'MongoDB',
			'Clerk',
			'Stripe',
		],
	},
	{
		image: '/images/e-wallet-landingpage.png',
		title: 'E-Wallet Landing Page',
		website: 'https://landing-page-tram-connect.vercel.app/',
		description:
			'A Web3 e-wallet landing page featuring animated sections including Multicurrency, Features, Partners, Secure Transactions, and Network. Designed for a modern fintech brand with smooth scroll animations and responsive layout.',
		techStack: ['NextJS', 'SASS', 'Framer Motion', 'SwiperJS'],
	},
	{
		image: '/images/tuabike.png',
		title: 'Tuabike Landing Page',
		website: 'https://thmq-tuabike.netlify.app/',
		description:
			'A modern bike-sharing platform with real-time location tracking, booking system, and user management. Features include secure authentication, payment integration, and a responsive design for seamless user experience.',
		techStack: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		image: '/images/inhype-covid.png',
		title: 'Inhype COVID-19 Landing Page',
		website: 'https://thmq-inhype-covid.netlify.app/',
		description:
			'A landing page for a COVID-19 information and resource platform. Features include real-time updates, preventive measures, and community support resources.',
		techStack: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		image: '/images/citicar-landing-page.png',
		title: 'Citicar Landing Page',
		website: 'https://citicar-landing-page.netlify.app/',
		description:
			'A modern car rental platform with real-time location tracking, booking system, and user management. Features include secure authentication, payment integration, and a responsive design for seamless user experience.',
		techStack: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		image: '/images/lovetravel.png',
		title: 'LoveTravel Landing Page',
		website: 'https://thmq-lovetravel.netlify.app/',
		description:
			'A modern travel booking platform with real-time location tracking, booking system, and user management. Features include secure authentication, payment integration, and a responsive design for seamless user experience.',
		techStack: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		image: '/images/travel.png',
		title: 'Travel Landing Page',
		website: 'https://thmq-travel.netlify.app/',
		description:
			'A modern travel booking platform with real-time location tracking, booking system, and user management. Features include secure authentication, payment integration, and a responsive design for seamless user experience.',
		techStack: ['HTML', 'CSS', 'JavaScript'],
	},
];

const overlayVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0 },
};

const modalVariants = {
	hidden: { opacity: 0, scale: 0.94, y: 24 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { type: 'spring' as const, stiffness: 320, damping: 28 },
	},
	exit: {
		opacity: 0,
		scale: 0.94,
		y: 16,
		transition: { duration: 0.18, ease: 'easeIn' as const },
	},
};

interface ProjectModalProps {
	project: Project;
	onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
	return createPortal(
		<AnimatePresence>
			<motion.div
				className="fixed inset-0 z-9999 flex items-center justify-center p-4"
				style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
				variants={overlayVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				transition={{ duration: 0.2 }}
				onClick={onClose}
			>
				<div
					className="relative group w-full max-w-lg"
					onClick={(e: React.MouseEvent) => e.stopPropagation()}
				>
					<motion.div
						className="w-full bg-[#1a1a2e] border border-tertiary-300 rounded-2xl overflow-hidden shadow-2xl"
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<motion.button
							onClick={onClose}
							aria-label="Đóng"
							className="
							absolute top-4 right-4 z-999999
							p-2 rounded-full backdrop-blur-md
							bg-white/25 cursor-pointer text-white
							opacity-0 hover:shadow-2xl group-hover:opacity-100
							-translate-y-2 group-hover:translate-y-0
							transition-all duration-300 ease-out
						"
						>
							<FontAwesomeIcon icon={faXmark} className="text-xl text-primary-200 cursor-pointer" />
						</motion.button>
						<div className="relative w-full h-64 overflow-hidden">
							<Image
								loading="lazy"
								src={project.image}
								alt={project.title}
								fill
								className="object-fill"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/30 to-transparent" />
						</div>

						<div className="px-6 pb-6 -mt-2">
							<h3 className="text-2xl font-bold capitalize leading-snug text-primary-200 mb-2">
								{project.title}
							</h3>

							<p className="text-sm text-neutral-400 leading-relaxed mb-5">{project.description}</p>

							<div className="flex flex-wrap gap-2">
								{project.techStack.map((tech, i) => (
									<motion.span
										key={i}
										initial={{ opacity: 0, y: 6 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: i * 0.04, duration: 0.2 }}
										className="text-xs px-3 py-1 rounded-full border border-tertiary-300 text-neutral-300 bg-white/5"
									>
										{tech}
									</motion.span>
								))}
							</div>

							{project.website && (
								<div className="mt-6 pt-4 border-t border-tertiary-300">
									<Link
										href={project.website}
										target="_blank"
										className="inline-flex items-center gap-2 text-sm font-medium text-primary-200 hover:text-indigo-300 transition-colors"
									>
										<ExternalLinkIcon />
										View Website
									</Link>
								</div>
							)}
						</div>
					</motion.div>
				</div>
			</motion.div>
		</AnimatePresence>,
		document.body
	);
};

const Projects = () => {
	const [selected, setSelected] = useState<Project | null>(null);

	return (
		<Wrapper>
			<>
				<h2 className="font-bold text-2.6xl mb-3 uppercase">Projects</h2>
				<div className="grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-2 items-stretch">
					{projectsData.map((project, index) => (
						<div
							key={index}
							className="flex flex-col bg-tertiary-800 border-[1.5px] border-tertiary-300 px-5 pt-5 pb-4 rounded-lg"
						>
							<div className="flex-1">
								<Image
									loading="lazy"
									src={project.image}
									alt={project.title}
									width={920}
									height={177}
									className="rounded-sm w-full md:h-[380px] lg:h-[200px] object-fill"
								/>
								<div className="text-lg font-bold text-neutral-200 mt-3 capitalize">
									{project.title}
								</div>
							</div>

							<div className="flex items-center gap-3 mt-2 w-full">
								{project.website && (
									<Link
										href={project.website}
										target="_blank"
										className="flex flex-1/2 justify-center items-center gap-1.5 px-4 py-2 rounded-md text-sm text-neutral-200 hover:bg-tertiary-600 transition-colors duration-200"
									>
										<LinkIcon />
										Website
									</Link>
								)}
								<button
									type="button"
									onClick={() => {
										setSelected(project);
										document.body.classList.add('no-scroll');
									}}
									className="flex flex-1/2 justify-center items-center cursor-pointer gap-1.5 px-4 py-2 rounded-md text-sm text-neutral-200 hover:bg-tertiary-600 transition-colors duration-200"
								>
									<InforIcon />
									Detail
								</button>
							</div>
						</div>
					))}
				</div>

				{selected && (
					<ProjectModal
						project={selected}
						onClose={() => {
							setSelected(null);
							document.body.classList.remove('no-scroll');
						}}
					/>
				)}
			</>
		</Wrapper>
	);
};

export default Projects;
