import classNames from 'classnames';
import Markdown from 'react-markdown';
import Image from '@/components/elements/image';
import CustomLink from '@/components/elements/custom-link';
import TextHeader from '@/components/elements/text-header';

const DynamicPage = () => {
	const section = {
		__component: 'sections.feature-rows-group',
		features: [
			{
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
			},
			{
				joinNextRow: true,
				description:
					'Vamos o que interessa: Afinal, o que significa fumigação?  Pois bem, **Fumigação** é um termo que se refere a um tratamento fitossanitário, cujo objetivo é matar os fungos de um material orgânico qualquer. Esse tratamento em certos casos tem a finalidade de adequar uma **caixa de madeira fumigada para exportação** por exemplo. **RIBERMAX** Especializada em Caixa de Madeira Fumigada para Exportação',
				title: 'Definição do termo "Fumigação":',
				media: {
					name: 'fumigacao.webp',
					alternativeText: 'Marcação Fumigação NIMF-15',
					mime: 'image/webp',
					width: 155,
					height: 79
				}
			},
			{
				joinNextRow: true,
				description:
					'A caixa de madeira fumigada para exportação é a solução mais adequada para quem precisa enviar um equipamento ou um outro produto qualquer para outro país. Se o produto em questão é pesado ou grande, uma embalagem de papelão possivelmente não será apropriada. Nesse caso, há que se recorrer a uma embalagem mais forte, como as de madeira por exemplo. Assim sendo, a empresa exportadora terá que se adequar às regras impostas pela OMC (Organização Mundial do Comércio). Esta instituição internacional exige através da NIMF Nº 15 que seja feito tal tratamento. Afim de que se evite o intercâmbio de fungos, insetos e micro-organismos entre os países de origem e destino, a madeira deve passar por tal tratamento.',
				title: 'O que diz a legislação (NIMF-15) ?',
				media: {
					name: 'lupaCx.webp',
					alternativeText:
						'Caixa de madeira fista atrás de uma grande lupa.',
					mime: 'image/webp',
					width: 256,
					height: 256
				}
			},
			{
				joinNextRow: true,
				description:
					'A razão disto é que, o intercâmbio de micro-organismos pode afetar negativamente a agricultura e ecologia global. Ou seja, caso não haja no país de destino predadores naturais para esses organismos trazidos na madeira da embalagem, existe a indesejada possibilidade de se propagar uma praga que causará naquele país um desequilíbrio ecológico incalculável.  ',
				title: 'Mas tudo isso por que?',
				media: {
					name: 'worldwide.webp',
					alternativeText:
						'Bandeira do Brasil com uma seta em direção ao planeta terra e suas bandeiras',
					mime: 'image/webp',
					width: 426,
					height: 132
				}
			},
			{
				joinNextRow: true,
				description:
					'A caixa de madeira fumigada para exportação é tratada para evitar isso, e para tanto deve seguir a norma imposta pela OMC. Isto é, a NIMF-15. Esta norma foi criada para exigir que todos os países coligados tratem a madeira antes de exportar. Tudo tem que ser documentado e executado por engenheiros agrônomos autorizados pelo MAPA. o MAPA (Ministério da Agricultura, Pecuária e Abastecimento) é quem fiscaliza todo o processo, inclusive na alfândega.  Ao exportar, deve ser juntado à documentação o certificado de tratamento da madeira da embalagem. A RIBERMAX fornece embalagens fumigadas e os respectivos certificados para que o cliente não tenha nenhum problema no processo de exportação.  O tratamento utilizado para essa finalidade é o "HT" ou "Heat Treatment", popularmente conhecido como "Fumigação". Após tratada a caixa deve receber dois carimbos, um em cada lado para que o fiscal possa visualizar.  Todas as dúvidas a respeito desse assunto são esclarecidas aos nossos clientes sempre que entram em contato. Você pode tirar suas dúvidas também, basta clicar no botão do Whatsapp no canto inferior direito desta tela. Imediatamente você fala diretamente com a gente e pergunta tudo o que quiser.  Caso queira, você também pode ver mais informações direto do Ministério da Agricultura clicando nesse link:',
				title: 'Tratamento para Exportação. Como funciona?',
				media: {
					name: 'caixa-madeira-fumigada-3.webp',
					alternativeText: 'Caixa de madeira fumigada',
					mime: 'image/webp',
					width: 400,
					height: 300
				}
			},
			{
				joinNextRow: false,
				title: 'A CAIXA DE MADEIRA FUMIGADA PARA EXPORTAÇÃO DA RIBERMAX ',
				description:
					'Mas você pode se perguntar: Por que eu deveria embalar meu produto em uma caixa de madeira fumigada para exportação?  Primeiramente por causa do baixo custo. Afinal a madeira In Natura ainda é o mais barato entre os materiais que oferecem resistência estrutural. Ainda não se inventou nenhum tipo de material que ofereça tal resistência e tão ecologicamente correto quanto a madeira In natura. Por isso é que este ainda é a melhor matéria prima para se fazer a caixa de madeira fumigada para exportação.  Além disso, o mais importante é que justamente pelo fato de a madeira ser um material primário, ou seja, que não passou por longos processos industriais, ela traz consigo a característica de possuir o mais baixo custo que se mostre viável para tal solução logística.  Faça você mesmo um orçamento diretamente em nosso sistema online.  Calcule sua caixa de madeira fumigada para exportação agora.  Atendemos toda a região sudeste do Brasil. Você buscava por caixa de madeira fumigada para exportação?  Ótimo, você encontrou! Teremos um imenso prazer em lhe atender. Entre em contato.',
				media: {
					name: 'porto de santos.jpg',
					alternativeText:
						'Foto panorâmica do porto de Santos com muitos containeres.',
					mime: 'image/jpeg',
					width: 1500,
					height: 1000
				}
			}
		]
	};
	var joinNextRow = false;

	return (
		<div className="container flex flex-col z-20">
			{section.features.map((feature, index) => {
				joinNextRow = feature.joinNextRow;
				return (
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
							{index > 1 &&
								feature.media.mime.startsWith('image') && (
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
							<Markdown className="my-6">
								{feature.description}
							</Markdown>
							{feature.link && (
								<CustomLink link={feature.link}>
									<div className="text-blue-600 with-arrow hover:underline">
										{feature.link.text}
									</div>
								</CustomLink>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default DynamicPage;
