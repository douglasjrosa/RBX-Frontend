import Image from 'next/image';
//import besouro from '@/public/images/besouro chines.jpg';

export default () => {
	return (
		<div className="flex flex-col">
			<div className="container flex flex-col z-20">
				<div className="flex flex-col justify-center md:p-8 sm:items-center bg-white md:gap-10 shadow-lg rounded-lg md:flex-row">
					<div className="w-full lg:w-4/12 max-h-full">
						<Image src='/images/besouro chines.jpg' layout="fill" />
					</div>
				</div>
			</div>
		</div>
	);
};
