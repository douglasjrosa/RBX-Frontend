import ErrorPage from 'next/error';
import { getStrapiURL, getPageData } from 'utils/api';
import Sections from '@/components/sections';
import Seo from '@/components/elements/seo';

const DynamicPage = ({ sections, metadata }) => {
	// Check if the required data was provided
	if (!sections?.length) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<>
			{/* Add meta tags for SEO*/}
			<Seo metadata={metadata} />
			{/* Display content sections */}
			<Sections sections={sections} />
		</>
	);
};

export async function getStaticPaths() {
	// Get all pages from Strapi
	const pages = [
		{
			status: 'published',
			_id: '6101a60c1d24981a346d2d8c',
			slug: 'caixa-madeira-fumigada-exportacao',
			shortName: 'Caixa de madeira fumigada para exportação',
			metadata: {
				twitterCardType: 'summary_large_image',
				_id: '6101a60c1d24981a346d2d8d',
				metaTitle: 'Caixa de madeira fumigada para exportação',
				metaDescription:
					'A RIBERMAX é a Fabricante de Embalagem de Madeira que pode te ajudar se você precisa de CAIXA FUMIGADA P/ EXPORTAÇÃO. Desde 1996, o único foco da Ribermax tem sido produzir e inovar no segmento de Paletes, Engradados, Estrados, Caixas e Embalagens de Madeira para Transporte de Equipamentos, Peças e Produtos em Geral.\n',
				twitterUsername: '@RibermaxEmbalagens',
				__v: 0,
				shareImage: [],
				id: '6101a60c1d24981a346d2d8d'
			},
			contentSections: [[]],
			createdAt: '2021-07-28T18:46:36.904Z',
			updatedAt: '2022-06-02T13:25:27.660Z',
			__v: 2,
			id: '6101a60c1d24981a346d2d8c'
		}
	]; //await (await fetch(getStrapiURL('/pages'))).json();

	const paths = pages.map((page) => {
		// Decompose the slug that was saved in Strapi
		const slugArray = page.slug.split('__');
		return {
			params: { slug: slugArray }
		};
	});
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	// Find the page data for the current slug
	let chainedSlugs;
	if (params == {} || !params.slug) {
		// To get the homepage, find the only page where slug is an empty string
		chainedSlugs = ``;
	} else {
		// Otherwise find a page with a matching slug
		// Recompose the slug that was saved in Strapi
		chainedSlugs = params.slug.join('__');
	}

	// Fetch pages.
	const pageData = {
		status: 'published',
		_id: '6101a60c1d24981a346d2d8c',
		slug: 'caixa-madeira-fumigada-exportacao',
		shortName: 'Caixa de madeira fumigada para exportação',
		metadata: {
			twitterCardType: 'summary_large_image',
			_id: '6101a60c1d24981a346d2d8d',
			metaTitle: 'Caixa de madeira fumigada para exportação',
			metaDescription:
				'A RIBERMAX é a Fabricante de Embalagem de Madeira que pode te ajudar se você precisa de CAIXA FUMIGADA P/ EXPORTAÇÃO. Desde 1996, o único foco da Ribermax tem sido produzir e inovar no segmento de Paletes, Engradados, Estrados, Caixas e Embalagens de Madeira para Transporte de Equipamentos, Peças e Produtos em Geral.\n',
			twitterUsername: '@RibermaxEmbalagens',
			__v: 0,
			shareImage: {
				_id: '60910e9291d20800155fd836',
				name: 'logomarca-efect.webp',
				alternativeText: 'Logomarca Ribermax',
				caption: '',
				hash: 'logomarca_efect_31667e6ad7',
				ext: '.webp',
				mime: 'image/webp',
				size: 38.52,
				width: 575,
				height: 424,
				url: 'https://rbx-backend-media.s3.sa-east-1.amazonaws.com/logomarca_efect_31667e6ad7.webp',
				formats: [],
				provider: 'aws-s3',
				related: [],
				createdAt: '2021-05-04T09:06:26.938Z',
				updatedAt: '2022-06-13T11:45:41.620Z',
				__v: 0,
				id: '60910e9291d20800155fd836'
			},
			id: '6101a60c1d24981a346d2d8d'
		},
		contentSections: [
			{
				__component: 'sections.feature-rows-group',
				_id: '6175bb6a9036d210acb80bcc',
				features: [
					{
					  joinNextRow: true,
					  _id: '6175bb6a9036d210acb80bcd',
					  description: 'Crescem a cada dia as exportações no Brasil e com isso aumenta a procura por Caixa de Madeira Fumigada para Exportação. Apesar das instabilidades políticas e jurídicas, as indústrias brasileiras seguem fazendo o que fazem de melhor. Empreendendo e vencendo obstáculos. Obviamente, focar esforços para abrir clientes externos é o caminho certo para buscar sua própria estabilidade financeira. Assim as empresas criam sua própria sorte e traçam seus destinos rumo ao sucesso. O caminho é longo, a luta é desleal, mas os fortes nunca desistem.',
					  title: 'Caixa de Madeira Fumigada para Exportação',
					  mediaWidth: 700,
					  mediaHeight: 500,
					  link: null,
					  __v: 0,
					  media: {
						_id: '60910e9391d20800155fd837',
						name: 'IMG_20201028_103741003-min.webp',
						alternativeText: 'Embalagens grandes de madeira no pátio a céu aberto',
						caption: '',
						hash: 'IMG_20201028_103741003_min_bab37f7643',
						ext: '.webp',
						mime: 'image/webp',
						size: 17.22,
						width: 400,
						height: 300,
						url: 'https://rbx-backend-media.s3.sa-east-1.amazonaws.com/IMG_20201028_103741003_min_bab37f7643.webp',
						formats: [],
						provider: 'aws-s3',
						related: [],
						createdAt: '2021-05-04T09:06:27.535Z',
						updatedAt: '2022-06-01T21:13:23.687Z',
						__v: 0,
						id: '60910e9391d20800155fd837'
					  },
					  id: '6175bb6a9036d210acb80bcd'
					},
					{
					  joinNextRow: true,
					  _id: '6175bc2c9036d210acb80be8',
					  description: 'Vamos o que interessa: Afinal, o que significa fumigação?  Pois bem, **Fumigação** é um termo que se refere a um tratamento fitossanitário, cujo objetivo é matar os fungos de um material orgânico qualquer. Esse tratamento em certos casos tem a finalidade de adequar uma **caixa de madeira fumigada para exportação** por exemplo. **RIBERMAX** Especializada em Caixa de Madeira Fumigada para Exportação',
					  title: 'Definição do termo "Fumigação":',
					  mediaWidth: 200,
					  mediaHeight: 100,
					  link: null,
					  __v: 0,
					  media: {
						_id: '60910e7e91d20800155fd7ff',
						name: 'fumigacao.webp',
						alternativeText: 'Marcação Fumigação NIMF-15',
						caption: '',
						hash: 'certificacao_min_31d1867ee1',
						ext: '.webp',
						mime: 'image/webp',
						size: 1.17,
						width: 155,
						height: 79,
						url: 'https://rbx-backend-media.s3.sa-east-1.amazonaws.com/certificacao_min_31d1867ee1.webp',
						provider: 'aws-s3',
						related: [],
						createdAt: '2021-05-04T09:06:06.744Z',
						updatedAt: '2022-06-10T20:35:09.562Z',
						__v: 0,
						id: '60910e7e91d20800155fd7ff'
					  },
					  id: '6175bc2c9036d210acb80be8'
					},
					{
					  joinNextRow: true,
					  _id: '6175bb6a9036d210acb80bce',
					  description: 'A caixa de madeira fumigada para exportação é a solução mais adequada para quem precisa enviar um equipamento ou um outro produto qualquer para outro país. Se o produto em questão é pesado ou grande, uma embalagem de papelão possivelmente não será apropriada. Nesse caso, há que se recorrer a uma embalagem mais forte, como as de madeira por exemplo. Assim sendo, a empresa exportadora terá que se adequar às regras impostas pela OMC (Organização Mundial do Comércio). Esta instituição internacional exige através da NIMF Nº 15 que seja feito tal tratamento. Afim de que se evite o intercâmbio de fungos, insetos e micro-organismos entre os países de origem e destino, a madeira deve passar por tal tratamento.',
					  title: 'O que diz a legislação (NIMF-15) ?',
					  mediaWidth: 200,
					  mediaHeight: 200,
					  link: null,
					  __v: 0,
					  media: {
						_id: '60910e8d91d20800155fd827',
						name: 'lupaCx.webp',
						alternativeText: 'Caixa de madeira fista atrás de uma grande lupa.',
						caption: '',
						hash: 'lupa_Cx_3e8af3db64',
						ext: '.webp',
						mime: 'image/webp',
						size: 15.59,
						width: 256,
						height: 256,
						url: 'https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp',
						formats: [],
						provider: 'aws-s3',
						related: [],
						createdAt: '2021-05-04T09:06:21.733Z',
						updatedAt: '2021-11-01T23:26:03.750Z',
						__v: 0,
						id: '60910e8d91d20800155fd827'
					  },
					  id: '6175bb6a9036d210acb80bce'
					},
					{
					  joinNextRow: true,
					  _id: '6175bd2e9036d210acb80bfd',
					  description: 'A razão disto é que, o intercâmbio de micro-organismos pode afetar negativamente a agricultura e ecologia global. Ou seja, caso não haja no país de destino predadores naturais para esses organismos trazidos na madeira da embalagem, existe a indesejada possibilidade de se propagar uma praga que causará naquele país um desequilíbrio ecológico incalculável.  ',
					  title: 'Mas tudo isso por que?',
					  mediaWidth: 426,
					  mediaHeight: 132,
					  link: null,
					  __v: 0,
					  media: {
						_id: '60910e7c91d20800155fd7fb',
						name: 'worldwide.webp',
						alternativeText: 'Bandeira do Brasil com uma seta em direção ao planeta terra e suas bandeiras',
						caption: '',
						hash: 'worldwide_019b84e607',
						ext: '.webp',
						mime: 'image/webp',
						size: 15.01,
						width: 426,
						height: 132,
						url: 'https://rbx-backend-media.s3.sa-east-1.amazonaws.com/worldwide_019b84e607.webp',
						formats: [],
						provider: 'aws-s3',
						related: [],
						createdAt: '2021-05-04T09:06:04.040Z',
						updatedAt: '2022-06-10T20:35:09.562Z',
						__v: 0,
						id: '60910e7c91d20800155fd7fb'
					  },
					  id: '6175bd2e9036d210acb80bfd'
					},
					{
					  joinNextRow: true,
					  _id: '6175bb6a9036d210acb80bcf',
					  description: 'A caixa de madeira fumigada para exportação é tratada para evitar isso, e para tanto deve seguir a norma imposta pela OMC. Isto é, a NIMF-15. Esta norma foi criada para exigir que todos os países coligados tratem a madeira antes de exportar. Tudo tem que ser documentado e executado por engenheiros agrônomos autorizados pelo MAPA. o MAPA (Ministério da Agricultura, Pecuária e Abastecimento) é quem fiscaliza todo o processo, inclusive na alfândega.  Ao exportar, deve ser juntado à documentação o certificado de tratamento da madeira da embalagem. A RIBERMAX fornece embalagens fumigadas e os respectivos certificados para que o cliente não tenha nenhum problema no processo de exportação.  O tratamento utilizado para essa finalidade é o "HT" ou "Heat Treatment", popularmente conhecido como "Fumigação". Após tratada a caixa deve receber dois carimbos, um em cada lado para que o fiscal possa visualizar.  Todas as dúvidas a respeito desse assunto são esclarecidas aos nossos clientes sempre que entram em contato. Você pode tirar suas dúvidas também, basta clicar no botão do Whatsapp no canto inferior direito desta tela. Imediatamente você fala diretamente com a gente e pergunta tudo o que quiser.  Caso queira, você também pode ver mais informações direto do Ministério da Agricultura clicando nesse link:',
					  title: 'Tratamento para Exportação. Como funciona?',
					  link: {
						newTab: true,
						_id: '6175bb6b9036d210acb80bd2',
						url: 'https://www.gov.br/agricultura/pt-br/guia-de-servicos/arquivos/FOLDER_EXPORTACAO.pdf',
						text: 'Instrução Normativa Mapa nº 32/2015',
						__v: 0,
						id: '6175bb6b9036d210acb80bd2'
					  },
					  __v: 1,
					  media: {
						_id: '60910e7c91d20800155fd7f9',
						name: 'caixa-madeira-fumigada-3.webp',
						alternativeText: 'Caixa de madeira fumigada',
						caption: 'Carimbo de fumigação na madeira',
						hash: 'caixa_madeira_fumigada_02_9e33cfc218',
						ext: '.webp',
						mime: 'image/webp',
						size: 7.36,
						width: 400,
						height: 300,
						url: 'https://rbx-backend-media.s3.sa-east-1.amazonaws.com/caixa_madeira_fumigada_02_9e33cfc218.webp',
						formats: [],
						provider: 'aws-s3',
						related: [],
						createdAt: '2021-05-04T09:06:04.020Z',
						updatedAt: '2022-06-10T20:35:09.562Z',
						__v: 0,
						id: '60910e7c91d20800155fd7f9'
					  },
					  id: '6175bb6a9036d210acb80bcf'
					},
					{
					  joinNextRow: false,
					  _id: '6175bb6a9036d210acb80bd0',
					  title: 'A CAIXA DE MADEIRA FUMIGADA PARA EXPORTAÇÃO DA RIBERMAX ',
					  description: 'Mas você pode se perguntar: Por que eu deveria embalar meu produto em uma caixa de madeira fumigada para exportação?  Primeiramente por causa do baixo custo. Afinal a madeira In Natura ainda é o mais barato entre os materiais que oferecem resistência estrutural. Ainda não se inventou nenhum tipo de material que ofereça tal resistência e tão ecologicamente correto quanto a madeira In natura. Por isso é que este ainda é a melhor matéria prima para se fazer a caixa de madeira fumigada para exportação.  Além disso, o mais importante é que justamente pelo fato de a madeira ser um material primário, ou seja, que não passou por longos processos industriais, ela traz consigo a característica de possuir o mais baixo custo que se mostre viável para tal solução logística.  Faça você mesmo um orçamento diretamente em nosso sistema online.  Calcule sua caixa de madeira fumigada para exportação agora.  Atendemos toda a região sudeste do Brasil. Você buscava por caixa de madeira fumigada para exportação?  Ótimo, você encontrou! Teremos um imenso prazer em lhe atender. Entre em contato.',
					  link: {
						newTab: false,
						_id: '6175bb6b9036d210acb80bd1',
						url: '/contato',
						text: 'Fale conosco...',
						__v: 0,
						id: '6175bb6b9036d210acb80bd1'
					  },
					  __v: 1,
					  media: {
						_id: '6175c5a29036d210acb80c34',
						name: 'porto de santos.jpg',
						alternativeText: 'Foto panorâmica do porto de Santos com muitos containeres.',
						caption: '',
						hash: 'porto_de_santos_a7b4be81a1',
						ext: '.jpg',
						mime: 'image/jpeg',
						size: 470.24,
						width: 1500,
						height: 1000,
						url: 'https://rbx-backend-media.s3.sa-east-1.amazonaws.com/porto_de_santos_a7b4be81a1.jpg',
						formats: [],
						provider: 'aws-s3',
						related: [],
						createdAt: '2021-10-24T20:44:18.915Z',
						updatedAt: '2022-06-01T21:13:23.687Z',
						__v: 0,
						id: '6175c5a29036d210acb80c34'
					  },
					  id: '6175bb6a9036d210acb80bd0'
					}
				  ],
				__v: 1,
				id: '6175bb6a9036d210acb80bcc'
			}
		],
		createdAt: '2021-07-28T18:46:36.904Z',
		updatedAt: '2022-06-02T13:25:27.660Z',
		__v: 2,
		id: '6101a60c1d24981a346d2d8c'
	}; //await getPageData(chainedSlugs);

	if (pageData == null) {
		// Giving the page no props will trigger a 404 page
		return { props: {} };
	}

	// We have the required page data, pass it to the page component
	const { contentSections, metadata } = pageData;
	return {
		props: {
			sections: contentSections,
			metadata
		}
	};
}

export default DynamicPage;
