import { SVGProps } from 'react';

const ZustandIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="140"
			height="140"
			viewBox="0 0 140 140"
			{...props}
		>
			<path
				d="M 44.65 33.992 L 95.35 33.992 L 95.35 59.341 L 70 59.341 Z
				   M 44.65 59.341 L 70 59.341 L 95.35 84.691 L 44.65 84.691 Z
				   M 44.65 84.691 L 70 84.691 L 70 110.041 Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default ZustandIcon;