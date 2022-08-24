export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const metaTitleSuffix = "Ribermax Embalagens de Madeira";
export const metadata = {
		twitterCardType: "summary_large_image",
		metaTitle: "Embalagens de Madeira Fumigada",
		metaDescription: "Caixas, Engradados, Paletes e Embalagens de Madeira Fumigada para Transporte e Exportação.",
		twitterUsername: "@ribermax2",
		shareImage: {
			name: "logomarca-ribermax.webp",
			alternativeText: "Logomarca Ribermax",
			ext: ".webp",
			mime: "image/webp",
			size: 88.56,
			width: 4796,
			height: 3508,
			url: `${baseUrl}/images/Logo_Ribermax_min.webp`,
			formats: {
				thumbnail: {
					name: "thumbnail_Logo_Ribermax-min.webp",
					ext: ".webp",
					mime: "image/webp",
					width: 213,
					height: 156,
					size: 5.65,
					url: `${baseUrl}/images/thumbnail_Logo_Ribermax_min.webp`
				},
				large: {
					name: "large_Logo_Ribermax-min.webp",
					ext: ".webp",
					mime: "image/webp",
					width: 1000,
					height: 731,
					size: 32.27,
					url: `${baseUrl}/images/large_Logo_Ribermax_min.webp`
				},
				medium: {
					name: "medium_Logo_Ribermax-min.webp",
					ext: ".webp",
					mime: "image/webp",
					width: 750,
					height: 549,
					size: 22.46,
					url: `${baseUrl}/images/medium_Logo_Ribermax_min.webp`
				},
				small: {
					name: "small_Logo_Ribermax-min.webp",
					ext: ".webp",
					mime: "image/webp",
					width: 500,
					height: 366,
					size: 16.63,
					url: `${baseUrl}/images/small_Logo_Ribermax_min.webp`
				}
			},
		},
	};
export const notificationBanner = {
		type: "info",
		text: "Este site faz uso de cookies para obter dados apenas da sua navegação em nosso site para melhorar sua experiência.",
	};
export const navbar = {
		links: [
			{
				newTab: false,
				url: "/",
				text: "Home",
			},
			{
				newTab: false,
				url: "/empresa",
				text: "Empresa",
			},
			{
				newTab: false,
				url: "/produtos",
				text: "Produtos",
			},
			{
				newTab: false,
				url: "/informacoes",
				text: "Informações",
			},
			{
				newTab: false,
				url: "/contato",
				text: "Contato",
			}
		],
		button: {
			newTab: true,
			type: "primary",
			url: "http://ribermax.com/?page=login",
			text: "Login",
		},
		logo: {
			name: "logomarca-h.webp",
			alternativeText: "Logomarca Horizontal Ribermax",
			ext: ".webp",
			mime: "image/webp",
			size: 5.1,
			width: 441,
			height: 113,
			url: `${baseUrl}/images/logomarca_h_p_min.webp`,
			formats: {
				thumbnail: {
					name: "thumbnail_logomarca_h_p-min.webp",
					ext: ".webp",
					mime: "image/webp",
					width: 245,
					height: 63,
					size: 6.03,
					url: `${baseUrl}/images/thumbnail_logomarca_h_p_min.webp`
				}
			},
		},
	};
export const footer = {
		smallText: "© Copyright Ribermax™ (Lei 9610 de 19/02/1998)",
		columns: [
			{
				title: "Páginas",
				links: [
					{
						newTab: false,
						url: "/",
						text: "Home",
					},
					{
						newTab: false,
						url: "/empresa",
						text: "Empresa",
					},
					{
						newTab: false,
						url: "/produtos",
						text: "Produtos",
					},
					{
						newTab: false,
						url: "/informacoes",
						text: "Informações",
					},
					{
						newTab: false,
						url: "/contato",
						text: "Contato",
					}
				],
			},
			{
				title: "Ribeirão Preto SP",
				links: [
					{
						newTab: false,
						url: "tel:+5516997655543",
						text: "(16) 99765-5543 Jesuilla (Comercial)",
					},
					{
						newTab: false,
						url: "tel:+5516982550729",
						text: "(16) 98255-0729 Renato (Administrativo)",
					}
				],
			},
			{
				title: "São Paulo SP",
				links: [
					{
						newTab: false,
						url: "tel:+5511982843965",
						text: "(11) 98284-3965 Cláudia (Comercial)",
					}
				],
			},
			{
				title: "Certificação",
				links: [
					{
						newTab: true,
						url: "https://www.ippc.int/largefiles/NIMF_15_2009_PTFINAL_0.pdf",
						text: "NIMF-15 (Fumigação)",
					}
				],
			}
		],
		logo: {
			name: "fumigacao.webp",
			alternativeText: "Marcação Fumigação NIMF-15",
			ext: ".webp",
			mime: "image/webp",
			size: 1.17,
			width: 155,
			height: 79,
			url: `${baseUrl}/images/certificacao_min.webp`,
		},
	};
export const favicon = {
		name: "logotipo_ribermax_45x45-min.webp",
		alternativeText: "Favicon Ribermax",
		ext: ".webp",
		mime: "image/webp",
		size: 0.63,
		width: 45,
		height: 45,
		url: `${baseUrl}/images/logotipo_ribermax_45x45_min.webp`,
	};
export const whatsappContacts = [
		{
			nome: "Jesuila - Comercial - Ribeirão Preto",
			fone: "+5516997655543",
		},
		{
			nome: "Cláudia - Comercial - São Paulo",
			fone: "+5511982843965",
		},
		{
			nome: "Renato - Administrativo - Ribeirão Preto",
			fone: "+5516982550729",
		}
	];
export const whatsappImage = {
		name: "logotipo_whatsapp_512x512.png",
		alternativeText: "",
		ext: ".png",
		mime: "image/png",
		size: 87.03,
		width: 512,
		height: 512,
		url: `${baseUrl}/images/logotipo_whatsapp_512x512.png`,
		formats: {
			thumbnail: {
				name: "thumbnail_logotipo_whatsapp_512x512.png",
				ext: ".png",
				mime: "image/png",
				width: 156,
				height: 156,
				size: 22.49,
				url: `${baseUrl}/images/thumbnail_logotipo_whatsapp_512x512.png`
			},
			small: {
				name: "small_logotipo_whatsapp_512x512.png",
				ext: ".png",
				mime: "image/png",
				width: 500,
				height: 500,
				size: 133.73,
				url: `${baseUrl}/images/small_logotipo_whatsapp_512x512.png`
			}
		},
	};
export const msg = "Olá, visitei o site da Ribermax e gostaria de mais informações...";
export const whatsappMsg = "Olá, visitei o site da Ribermax e gostaria de mais informações...";