'use client';

import { useStore } from '@/store/store';
import {
	faEnvelope,
	faFileDownload,
	faLocationArrow,
	faMobile,
	faXmark,
	faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Profile = () => {
	const { hamburger, setHamburger } = useStore();
	const [download, setDownload] = useState(false);

	useEffect(() => {
		if (hamburger) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	}, [hamburger]);

	return (
		<div
			className={` ${
				hamburger ? 'translate-y-0 h-[120%]' : 'translate-y-[-150%]'
			} bg-bg absolute z-40 lg:top-0 inset-0 lg:bg-transparent lg:z-0 lg:relative font-inter -translate-y-full lg:translate-y-0 transition delay-150 duration-200 ease-in-out`}
		>
			<div className="absolute top-6 right-6 z-40 p-2 block lg:hidden" onClick={() => setHamburger()}>
				<FontAwesomeIcon icon={faXmark} className="text-xl text-primary-200 cursor-pointer" />
			</div>
			<aside className="mt-24 md:mt-16 relative text-primary-300">
				<div className="max-w-[90%] mx-auto xl:max-w-full bg-neutral-100 border-3 border-tertiary-300 rounded-xl p-8">
					<div className="flex justify-center absolute -top-16 w-full left-0">
						<div className="rounded-xl border-4 border-tertiary-300 w-40 h-40 md:w-50 md:h-50 overflow-hidden">
							<Image loading="eager" src="/images/avt.png" alt="avatar" width={200} height={200} />
						</div>
					</div>
					<div className="mt-18 md:mt-28">
						<div className="text-2.5xl text-center font-bold">Tô Hoàng Minh Quân</div>
						<div className="bg-tertiary-200 font-semibold text-center px-6 py-2 rounded-sm border border-tertiary-300 max-w-max mx-auto mt-1">
							Software Engineer
						</div>
						<div className="flex items-center justify-center gap-4 mt-6">
							<Link href={'https://github.com/thmq169'} aria-label="github profile" target="_blank">
								<Image
									loading="lazy"
									src="/icons/github-square.png"
									alt="github icon"
									width={34}
									height={34}
									className="w-8.5 h-8.5"
								/>
							</Link>
							<Link
								href={'https://www.linkedin.com/in/thmq169'}
								aria-label="linkedin profile"
								target="_blank"
							>
								<Image
									loading="lazy"
									src="/icons/linkedin-square.png"
									alt="linkedin icon"
									width={34}
									height={34}
									className="w-8.5 h-8.5"
								/>
							</Link>
							<Link href={'https://t.me/mquan169'} aria-label="telegram profile" target="_blank">
								<Image
									loading="lazy"
									src="/icons/telegram-square.png"
									alt="telegram icon"
									width={34}
									height={34}
									className="w-8.5 h-8.5"
								/>
							</Link>
						</div>
						<div className="bg-tertiary-400 px-5 py-4 rounded-xl mt-6">
							<Link
								href={'tel:+84971462609'}
								className="flex items-center gap-4 border-b border-black/10 pb-3 mb-3"
							>
								<div className="bg-neutral-100 w-[35px] h-[35px] p-2 flex justify-center items-center rounded-sm">
									<FontAwesomeIcon icon={faMobile} className="text-xl" />
								</div>
								<span className="font-semibold text-[15px]">+84 971462609</span>
							</Link>
							<Link
								href={'mailto:tohoangminhquan.dp@gmail.com'}
								className="flex items-center gap-4 border-b border-black/10 pb-3 my-3"
							>
								<div className="bg-neutral-100 w-[35px] h-[35px] p-2 flex justify-center items-center rounded-sm">
									<FontAwesomeIcon icon={faEnvelope} className="text-xl" />
								</div>
								<span className="font-semibold text-[15px] truncate">
									tohoangminhquan.dp@gmail.com
								</span>
							</Link>
							<div className="flex items-center border-b border-black/10 gap-4 pb-3 my-3 mt-3">
								<div className="bg-neutral-100 w-[35px] h-[35px] p-2 flex justify-center items-center rounded-sm">
									<FontAwesomeIcon icon={faCalendar} className="text-xl" />
								</div>
								<span className="font-semibold text-[15px]">16 / 09 / 2002</span>
							</div>
							<div className="flex items-center gap-4 mt-3">
								<div className="bg-neutral-100 w-[35px] h-[35px] p-2 flex justify-center items-center rounded-sm">
									<FontAwesomeIcon icon={faLocationArrow} className="text-xl" />
								</div>
								<span className="font-semibold text-[15px]">Ho Chi Minh City, Vietnam</span>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<a
							href="/CV-FrontEndDeveloper-ToHoangMinhQuan.pdf"
							download
							onMouseLeave={() => setDownload(false)}
							onMouseOver={() => setDownload(true)}
							className="font-bold font-merri-waether-sans text-xl text-tertiary-400 px-6 py-2 bg-secondary-700 border-2 border-tertiary-300 outline-none rounded-lg max-w-max mx-auto mt-7 cursor-pointer"
						>
							View Resume {download && <FontAwesomeIcon icon={faFileDownload} />}
						</a>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default Profile;
