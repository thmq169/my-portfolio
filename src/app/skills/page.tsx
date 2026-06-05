import Wrapper from '../../components/wrapper';
import * as motion from 'motion/react-client';
import {
	AntDesignIcon,
	AxiosIcon,
	CssIcon,
	EslintIcon,
	FramerMotionIcon,
	GithubIcon,
	GitIcon,
	GitlabIcon,
	Html5Icon,
	JavascriptIcon,
	JsonIcon,
	MongodbIcon,
	MuiIcon,
	NextjsIcon,
	NodejsIcon,
	NpmIcon,
	PostmanIcon,
	ReactIcon,
	ReduxIcon,
	SassIcon,
	SocketIcon,
	TailwindIcon,
	VercelIcon,
	ViteIcon,
	ZustandIcon,
	TypescriptIcon,
	ShadcnIcon,
	BootStrapIcon,
} from '@/components/icons';

const Skills = () => {
	const skillSections = [
		{
			title: 'Frontend',
			items: [
				{ image: '/icons/html5.svg', title: 'HTML5', icon: <Html5Icon /> },
				{ image: '/icons/css.svg', title: 'CSS', icon: <CssIcon /> },
				{ image: '/icons/javascript.svg', title: 'JavaScript', icon: <JavascriptIcon /> },
				{ image: '/icons/typescript.svg', title: 'TypeScript', icon: <TypescriptIcon /> },
				{ image: '/icons/tailwind.svg', title: 'Tailwind', icon: <TailwindIcon /> },
				{ image: '/icons/sass.svg', title: 'SASS', icon: <SassIcon /> },
				{ image: '/icons/react.svg', title: 'ReactJS', icon: <ReactIcon /> },
				{ image: '/icons/nextjs.svg', title: 'NextJS', icon: <NextjsIcon /> },
			],
		},
		{
			title: 'Backend & Database',
			items: [
				{ image: '/icons/nodejs.svg', title: 'NodeJS', icon: <NodejsIcon /> },
				{ image: '/icons/mongodb.svg', title: 'MongoDB', icon: <MongodbIcon /> },
			],
		},
		{
			title: 'Libraries',
			items: [
				{ image: '', title: 'Shadcn	', icon: <ShadcnIcon /> },
				{ image: '/icons/mui.svg', title: 'Material UI', icon: <MuiIcon /> },
				{ image: '/icons/ant-design.svg', title: 'Ant Design', icon: <AntDesignIcon /> },
				{ image: '/icons/bootstrap.svg', title: 'Bootstrap', icon: <BootStrapIcon /> },
				{ image: '/icons/framer-motion.svg', title: 'Motion', icon: <FramerMotionIcon /> },
			],
		},
		{
			title: 'State Management & Data',
			items: [
				{ image: '/icons/redux.svg', title: 'Redux', icon: <ReduxIcon /> },
				{ image: '/icons/zustand.svg', title: 'Zustand', icon: <ZustandIcon /> },
				{ image: '/icons/axios.svg', title: 'Axios', icon: <AxiosIcon /> },
				{ image: '/icons/json.svg', title: 'JSON', icon: <JsonIcon /> },
				{ image: '/icons/socket.svg', title: 'Socket', icon: <SocketIcon /> },
			],
		},
		{
			title: 'Tools & Software',
			items: [
				{ image: '/icons/git.svg', title: 'Git', icon: <GitIcon /> },
				{ image: '/icons/github.svg', title: 'GitHub', icon: <GithubIcon /> },
				{ image: '/icons/gitlab.svg', title: 'GitLab', icon: <GitlabIcon /> },
				{ image: '/icons/npm.svg', title: 'NPM', icon: <NpmIcon /> },
				{ image: '/icons/postman.svg', title: 'Postman', icon: <PostmanIcon /> },
				{ image: '/icons/eslint.svg', title: 'ESLint', icon: <EslintIcon /> },
				{ image: '/icons/vite.svg', title: 'Vite', icon: <ViteIcon /> },
				{ image: '/icons/vercel.svg', title: 'Vercel', icon: <VercelIcon /> },
			],
		},
	];

	return (
		<Wrapper>
			<section className="text-neutral-200">
				{skillSections.map((section) => (
					<div key={section.title} className="mt-8 first:mt-0">
						<h2 className="font-bold text-2xl mb-3 uppercase">{section.title}</h2>

						<div className="grid grid-cols-3 md:flex gap-7 flex-wrap mt-3 lg:px-3">
							{section.items.map((item, index) => {
								const { image, title, icon } = item;

								return (
									<motion.div key={index} className="max-w-max">
										<div className="relative border border-tertiary-300 max-w-max mx-auto rounded-lg p-3 shadow-[0px_0px_5.5px_1px_#EFE0B2] [&_svg]:h-16 [&_svg]:w-16">
											{/* <Image
												loading="lazy"
												src={image}
												alt={title}
												width={60}
												height={60}
												className="relative h-16 w-16 z-10"
											/> */}
											{icon}
										</div>

										<p className="text-lg text-center font-medium capitalize mt-1">{title}</p>
									</motion.div>
								);
							})}
						</div>
					</div>
				))}
			</section>
		</Wrapper>
	);
};

export default Skills;
