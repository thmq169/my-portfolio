import * as motion from 'motion/react-client';
import React from 'react';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.section
			layout
			initial={{ opacity: 0, scale: 0, filter: 'blur(10px)' }}
			animate={{ opacity: 1, scale: 1, filter: 'none' }}
			transition={{
				duration: 0.4,
				scale: { type: 'spring', visualDuration: 0.4, bounce: 0.3 },
			}}
			className="flex-1 wrapper px-5 py-6 lg:px-8 lg:py-7 mt-4 lg:mt-0"
		>
			{children}
		</motion.section>
	);
};

export default Wrapper;
