import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '../../components/wrapper';

const Experience = () => {
	const experiences = [
		{
			company: 'ATOM Solutions',
			role: 'Software Engineer',
			duration: '2024 - present',
			image: '/images/atom.svg',
			link: 'https://atomsolution.vn/',
		},
	];

	return (
		<Wrapper>
			<section className="text-primary-400">
				<h2 className="font-bold text-2.6xl mb-3 uppercase">Experiences</h2>
				<div className="flex flex-col gap-6 text-base lg:text-lg mt-2">
					{experiences.map((exp, index) => {
						const { company, image, role, duration, link } = exp;
						return (
							<Link
								href={link}
								target="_blank"
								key={index}
								className="wrapper p-4 flex flex-col md:flex-row gap-5 text-wrap"
							>
								<div className="flex items-center justify-center p-1 border-2 border-tertiary-300 max-h-full max-w-max rounded-lg overflow-hidden cursor-pointer bg-white">
									<Image loading="lazy" src={image} alt={company} width={88} height={88} />
								</div>
								<div className="flex flex-col justify-between capitalize [&>div]:flex [&>div]:gap-1">
									<div>
										<span>Company:</span>{' '}
										<span className="text-primary-200 text-xl">{company}</span>
									</div>
									<div>
										<span>Role:</span> <p>{role}</p>
									</div>
									<div>
										<span>Duration:</span> <p>{duration}</p>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</section>
		</Wrapper>
	);
};

export default Experience;
