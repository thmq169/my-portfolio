import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '../../components/wrapper';

const Experience = () => {
	const experiences = [
		{
			company: 'ESOLLABS TECHNOLOGY SOLUTION JSC ',
			role: 'Software Engineer',
			duration: '2024 - present',
			image: '/images/esollabs.png',
			link: 'https://esollabs.com/',
		},
		{
			company: 'ATOM SOLUTIONS',
			role: 'Software Engineer',
			duration: '2024 - present',
			image: '/images/atom.svg',
			link: 'https://atomsolution.vn/',
		},
	];

	return (
		<Wrapper>
			<section className="text-primary-400">
				<h2 className="font-bold text-xl md:text-2.6xl mb-3 uppercase">Experience</h2>
				<div className="flex flex-col gap-4 text-base lg:text-lg mt-2">
					{experiences.map((exp, index) => {
						const { company, image, role, duration, link } = exp;
						return (
							<Link
								href={link}
								target="_blank"
								key={index}
								className="wrapper p-4 flex flex-col md:flex-row gap-2 md:gap-5 text-wrap"
							>
								<div className="flex items-center justify-center p-1 border-2 border-tertiary-300 w-16 h-16 md:min-w-22 md:min-h-22 rounded-lg overflow-hidden cursor-pointer bg-white">
									<Image
										loading="lazy"
										src={image}
										alt={company}
										width={88}
										height={88}
										className=""
									/>
								</div>
								<div className="flex flex-col justify-between capitalize [&>div]:flex [&>div]:gap-1">
									<div>
										<span>Company:</span>{' '}
										<span className="text-primary-200 text-base md:text-xl ml-1">{company}</span>
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
