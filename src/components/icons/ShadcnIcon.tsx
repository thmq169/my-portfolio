import { SVGProps } from 'react';

const ShadcnIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g transform="translate(0 600) scale(0.1 -0.1)" fill="currentColor" stroke="none">
				<path d="M4708 5681c-31-10-74-29-95-41-48-29-4170-4145-4229-4223-159-213-80-528 161-642 116-55 241-56 366-4 49 20 261 229 2167 2133 2310 2308 2157 2147 2184 2294 22 118-19 260-102 355-110 125-296 178-452 128z" />

				<path d="M5135 3303c-28-10-70-30-95-45-26-15-517-500-1171-1155-1297-1299-1184-1169-1184-1373 0-110 1-118 33-183 110-224 368-309 597-195 50 25 2285 2254 2322 2316 131 220 47 502-184 613-61 29-79 33-168 36-77 3-112-1-150-14z" />
			</g>
		</svg>
	);
};

export default ShadcnIcon;
