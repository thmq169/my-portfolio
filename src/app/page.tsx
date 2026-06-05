import Image from 'next/image';
import Wrapper from '../components/wrapper';

const services = [
	{
		image: '/images/frontend.png',
		alt: 'frontend',
		title: 'Frontend Engineering',
		description:
			'Building scalable, responsive, and user-friendly web applications with ReactJS, NextJS, TypeScript, and modern frontend architectures.',
	},
	{
		image: '/images/erp.png',
		alt: 'enterprise',
		title: 'Enterprise Web Applications',
		description:
			'Developing dynamic enterprise platforms with reusable UI components, advanced form systems, complex workflows, and API integrations.',
	},
	{
		image: '/images/optimize-performance.jpg',
		alt: 'performance',
		title: 'Performance Optimization',
		description:
			'Improving application performance through efficient state management, optimized rendering, lazy loading, and clean code structure.',
	},
	{
		image: '/images/frontend.png',
		alt: 'modern technologies',
		title: 'Modern Technologies',
		description:
			'Continuously expanding into React Native and NestJS to build cross-platform applications and strengthen backend development skills.',
	},
];

const ServiceCard = ({
	image,
	alt,
	title,
	description,
}: {
	image: string;
	alt: string;
	title: string;
	description: string;
}) => {
	return (
		<div className="bg-tertiary-500 border-3 border-tertiary-600 rounded-lg overflow-hidden flex gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_0px_20px_2px_rgba(239,224,178,0.2)]">
			<div className="relative min-w-[116px]">
				<div className="absolute inset-0 bg-black/20 z-10" />

				<Image loading='lazy'  src={image} alt={alt} width={116} height={311} className="h-full object-cover" />
			</div>

			<div className="py-4 pr-4">
				<h3 className="font-inter font-bold text-neutral-200 text-lg">{title}</h3>

				<p className="font-medium text-1sm text-primary-100 mt-3 leading-relaxed">{description}</p>
			</div>
		</div>
	);
};

export default function Home() {
	return (
		<Wrapper>
			<section className="text-neutral-200">
				<h2 className="font-bold text-xl md:text-2.6xl mb-3 uppercase">About Me</h2>

				<article className="flex flex-col gap-6 [&_span]:text-primary-200">
					<p>
						I am a Software Engineer with experience building scalable, responsive, and
						user-centric web applications using <span>ReactJS</span>, <span>NextJS</span>, <span>TypeScript</span>, <span>Redux</span>, <span>Zustand</span>, and
						modern frontend technologies. I enjoy creating dynamic UI systems, reusable component
						architectures, and maintainable frontend solutions that can support complex business
						workflows and large-scale applications.
					</p>

					<p>
						My experience includes working with enterprise platforms, real-time data handling,
						advanced form systems, API integrations, and performance optimization across different
						environments. I focus not only on building interfaces, but also on improving user
						experience, application scalability, code quality, and collaboration efficiency within
						cross-functional teams.
					</p>

					<p>
						Currently, I am passionate about learning new technologies and continuously improving my
						engineering mindset. I am expanding my knowledge in <span>React Native</span> and{' '}
						<span>NestJS</span> to strengthen both <span>mobile</span> and <span>backend</span> development skills.
					</p>

					<p>
						My short-term goal is to grow into a <span>Senior Frontend Engineer</span> capable of
						leading frontend architecture and delivering high-quality products. In the long term, I
						aim to become a <span>Fullstack Engineer</span> who can build scalable end-to-end
						systems with strong focus on performance, maintainability, and user experience.
					</p>
				</article>

				<h2 className="font-bold text-2xl md:text-2.6xl capitalize mt-6 md:mt-8">What i do</h2>

				<div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 mt-4">
					{services.map((service) => (
						<ServiceCard key={service.title} {...service} />
					))}
				</div>
			</section>
		</Wrapper>
	);
}
