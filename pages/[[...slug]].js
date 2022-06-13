import classNames from 'classnames';
import Markdown from 'react-markdown';
import Image from '@/components/elements/image';
import CustomLink from '@/components/elements/custom-link';
import TextHeader from '@/components/elements/text-header';

const DynamicPage = () => {
	const feature = {
		joinNextRow: true,
		description:
			'Crescem a cada dia as exportações no Brasil e com isso aumenta a procura por Caixa de Madeira Fumigada para Exportação. Apesar das instabilidades políticas e jurídicas, as indústrias brasileiras seguem fazendo o que fazem de melhor. Empreendendo e vencendo obstáculos. Obviamente, focar esforços para abrir clientes externos é o caminho certo para buscar sua própria estabilidade financeira. Assim as empresas criam sua própria sorte e traçam seus destinos rumo ao sucesso. O caminho é longo, a luta é desleal, mas os fortes nunca desistem.',
		title: 'Caixa de Madeira Fumigada para Exportação',
		media: {
			name: 'IMG_20201028_103741003-min.webp',
			alternativeText:
				'Embalagens grandes de madeira no pátio a céu aberto',
			mime: 'image/webp',
			width: 400,
			height: 300
		}
	};
	var joinNextRow = false;
	const index = 0;

	return (
		<div className="container flex flex-col z-20">
			<div
				className={classNames(
					// Common classes
					'flex flex-col justify-center md:p-8 sm:items-center bg-white md:gap-10 shadow-lg',
					{ 'rounded-t-lg': !joinNextRow },
					{ 'rounded-b-lg mb-16': !feature.joinNextRow },
					{
						'md:flex-row': index % 2 === 0,
						'md:flex-row-reverse': index % 2 === 1
					}
				)}
				key={feature.id}
			>
				{/* Media section */}
				<div className="w-full lg:w-4/12">
					{/* Images */}
					{index > 1 && feature.media.mime.startsWith('image') && (
						<Image
							media={feature.media}
							className={classNames(
								'object-cover h-auto md:rounded-md',
								{ 'rounded-t-md': !joinNextRow }
							)}
							width={feature.mediaWidth}
							height={feature.mediaHeight}
							priority={index < 1}
						/>
					)}
				</div>
				{/* Text section */}
				<div className="w-full lg:w-6/12 text-lg p-5">
					<TextHeader heading={index} className="text-4xl">
						{feature.title}
					</TextHeader>
					<Markdown className="my-6">{feature.description}</Markdown>
					{feature.link && (
						<CustomLink link={feature.link}>
							<div className="text-blue-600 with-arrow hover:underline">
								{feature.link.text}
							</div>
						</CustomLink>
					)}
				</div>
			</div>
		</div>
	);
};

export default DynamicPage;
