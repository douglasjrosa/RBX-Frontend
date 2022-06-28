import Navbar from './elements/navbar';
import Footer from './elements/footer';
import NotificationBanner from './elements/notification-banner';
import { useState } from 'react';
import WhatsAppButton from './elements/whatsapp-button';

const Layout = (params) => {
	const { children, global } = params;
	const {
		navbar,
		footer,
		notificationBanner,
		whatsappImage,
		whatsappContacts,
		whatsappMsg
	} = global;

	const [bannerIsShown, setBannerIsShown] = useState(true);

	return (
		<div className="flex flex-col justify-between ">
			<div className="flex-1">
				<div className="fixed w-full z-50">
					<Navbar navbar={navbar} />
				</div>
				<div className="relative z-10">
					<div className="flex flex-col">
						<div className="container flex flex-col z-20">
							<div className="flex flex-col justify-center md:p-8 sm:items-center bg-white md:gap-10 shadow-lg rounded-t-lg md:flex-row">
								<div className="w-full lg:w-4/12"></div>
								<div className="w-full lg:w-6/12 text-lg p-5">
									<h1 className="text-4xl py-6">
										Caixa de Madeira Fumigada para
										Exportação
									</h1>
									<p>
										Crescem a cada dia as exportações no
										Brasil e com isso aumenta a procura por
										Caixa de Madeira Fumigada para
										Exportação. Apesar das instabilidades
										políticas e jurídicas, as indústrias
										brasileiras seguem fazendo o que fazem
										de melhor. Empreendendo e vencendo
										obstáculos. Obviamente, focar esforços
										para abrir clientes externos é o caminho
										certo para buscar sua própria
										estabilidade financeira. Assim as
										empresas criam sua própria sorte e
										traçam seus destinos rumo ao sucesso. O
										caminho é longo, a luta é desleal, mas
										os fortes nunca desistem.
									</p>
								</div>
							</div>
							<div className="flex flex-col justify-center md:p-8 sm:items-center bg-white md:gap-10 shadow-lg md:flex-row-reverse">
								<div className="w-full lg:w-4/12"></div>
								<div className="w-full lg:w-6/12 text-lg p-5">
									<h2 className="text-4xl py-6">
										Definição do termo "Fumigação":
									</h2>
									<p>
										Vamos o que interessa: Afinal, o que
										significa fumigação? Pois bem,{' '}
										<strong>Fumigação</strong> é um termo
										que se refere a um tratamento
										fitossanitário, cujo objetivo é matar os
										fungos de um material orgânico qualquer.
										Esse tratamento em certos casos tem a
										finalidade de adequar uma{' '}
										<strong>
											caixa de madeira fumigada para
											exportação
										</strong>{' '}
										por exemplo. <strong>RIBERMAX</strong>{' '}
										Especializada em Caixa de Madeira
										Fumigada para Exportação
									</p>
								</div>
							</div>
							<div className="flex flex-col justify-center md:p-8 sm:items-center bg-white md:gap-10 shadow-lg md:flex-row">
								<div className="w-full lg:w-4/12">
									<span>
										<span></span>
										<img
											alt="Caixa de madeira fista atrás de uma grande lupa."
											src="https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=1080&amp;q=75"
											decoding="async"
											data-nimg="responsive"
											className="object-cover h-auto md:rounded-md"
											sizes="100vw"
											srcset="https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=640&amp;q=75 640w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=750&amp;q=75 750w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=828&amp;q=75 828w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=1080&amp;q=75 1080w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=1080&amp;q=75 1200w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=1080&amp;q=75 1920w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=1080&amp;q=75 2048w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=1080&amp;q=75 3840w"
										/>
										<noscript>
											<img
												alt="Caixa de madeira fista atrás de uma grande lupa."
												sizes="100vw"
												srcSet="https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=640&amp;q=75 640w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=750&amp;q=75 750w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=828&amp;q=75 828w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=1080&amp;q=75 1080w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=1080&amp;q=75 1200w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=1080&amp;q=75 1920w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=1080&amp;q=75 2048w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=1080&amp;q=75 3840w"
												src="https://rbx-backend-media.s3.sa-east-1.amazonaws.com/lupa_Cx_3e8af3db64.webp?w=1080&amp;q=75"
												decoding="async"
												data-nimg="responsive"
												className="object-cover h-auto md:rounded-md"
												loading="lazy"
											/>
										</noscript>
									</span>
								</div>
								<div className="w-full lg:w-6/12 text-lg p-5">
									<h3 className="text-4xl py-6">
										O que diz a legislação (NIMF-15) ?
									</h3>
									<p>
										A caixa de madeira fumigada para
										exportação é a solução mais adequada
										para quem precisa enviar um equipamento
										ou um outro produto qualquer para outro
										país. Se o produto em questão é pesado
										ou grande, uma embalagem de papelão
										possivelmente não será apropriada. Nesse
										caso, há que se recorrer a uma embalagem
										mais forte, como as de madeira por
										exemplo. Assim sendo, a empresa
										exportadora terá que se adequar às
										regras impostas pela OMC (Organização
										Mundial do Comércio). Esta instituição
										internacional exige através da NIMF Nº
										15 que seja feito tal tratamento. Afim
										de que se evite o intercâmbio de fungos,
										insetos e micro-organismos entre os
										países de origem e destino, a madeira
										deve passar por tal tratamento.
									</p>
								</div>
							</div>
							<div className="flex flex-col justify-center md:p-8 sm:items-center bg-white md:gap-10 shadow-lg md:flex-row-reverse">
								<div className="w-full lg:w-4/12">
									<span>
										<span></span>
										<img
											alt="Bandeira do Brasil com uma seta em direção ao planeta terra e suas bandeiras"
											src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
											decoding="async"
											data-nimg="responsive"
											className="object-cover h-auto md:rounded-md"
										/>
										<noscript>
											<img
												alt="Bandeira do Brasil com uma seta em direção ao planeta terra e suas bandeiras"
												sizes="100vw"
												srcSet="https://rbx-backend-media.s3.sa-east-1.amazonaws.com/worldwide_019b84e607.webp?w=640&amp;q=75 640w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/worldwide_019b84e607.webp?w=750&amp;q=75 750w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/worldwide_019b84e607.webp?w=828&amp;q=75 828w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/worldwide_019b84e607.webp?w=1080&amp;q=75 1080w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/worldwide_019b84e607.webp?w=1080&amp;q=75 1200w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/worldwide_019b84e607.webp?w=1080&amp;q=75 1920w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/worldwide_019b84e607.webp?w=1080&amp;q=75 2048w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/worldwide_019b84e607.webp?w=1080&amp;q=75 3840w"
												src="https://rbx-backend-media.s3.sa-east-1.amazonaws.com/worldwide_019b84e607.webp?w=1080&amp;q=75"
												decoding="async"
												data-nimg="responsive"
												className="object-cover h-auto md:rounded-md"
												loading="lazy"
											/>
										</noscript>
									</span>
								</div>
								<div className="w-full lg:w-6/12 text-lg p-5">
									<h4 className="text-4xl py-6">
										Mas tudo isso por que?
									</h4>
									<p>
										A razão disto é que, o intercâmbio de
										micro-organismos pode afetar
										negativamente a agricultura e ecologia
										global. Ou seja, caso não haja no país
										de destino predadores naturais para
										esses organismos trazidos na madeira da
										embalagem, existe a indesejada
										possibilidade de se propagar uma praga
										que causará naquele país um
										desequilíbrio ecológico incalculável.
									</p>
								</div>
							</div>
							<div className="flex flex-col justify-center md:p-8 sm:items-center bg-white md:gap-10 shadow-lg md:flex-row">
								<div className="w-full lg:w-4/12">
									<span>
										<span></span>
										<img
											alt="Caixa de madeira fumigada"
											src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
											decoding="async"
											data-nimg="responsive"
											className="object-cover h-auto md:rounded-md"
										/>
										<noscript>
											<img
												alt="Caixa de madeira fumigada"
												sizes="100vw"
												srcSet="https://rbx-backend-media.s3.sa-east-1.amazonaws.com/caixa_madeira_fumigada_02_9e33cfc218.webp?w=640&amp;q=75 640w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/caixa_madeira_fumigada_02_9e33cfc218.webp?w=750&amp;q=75 750w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/caixa_madeira_fumigada_02_9e33cfc218.webp?w=828&amp;q=75 828w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/caixa_madeira_fumigada_02_9e33cfc218.webp?w=1080&amp;q=75 1080w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/caixa_madeira_fumigada_02_9e33cfc218.webp?w=1080&amp;q=75 1200w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/caixa_madeira_fumigada_02_9e33cfc218.webp?w=1080&amp;q=75 1920w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/caixa_madeira_fumigada_02_9e33cfc218.webp?w=1080&amp;q=75 2048w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/caixa_madeira_fumigada_02_9e33cfc218.webp?w=1080&amp;q=75 3840w"
												src="https://rbx-backend-media.s3.sa-east-1.amazonaws.com/caixa_madeira_fumigada_02_9e33cfc218.webp?w=1080&amp;q=75"
												decoding="async"
												data-nimg="responsive"
												className="object-cover h-auto md:rounded-md"
												loading="lazy"
											/>
										</noscript>
									</span>
								</div>
								<div className="w-full lg:w-6/12 text-lg p-5">
									<h5 className="text-4xl py-6">
										Tratamento para Exportação. Como
										funciona?
									</h5>
									<p>
										A caixa de madeira fumigada para
										exportação é tratada para evitar isso, e
										para tanto deve seguir a norma imposta
										pela OMC. Isto é, a NIMF-15. Esta norma
										foi criada para exigir que todos os
										países coligados tratem a madeira antes
										de exportar. Tudo tem que ser
										documentado e executado por engenheiros
										agrônomos autorizados pelo MAPA. o MAPA
										(Ministério da Agricultura, Pecuária e
										Abastecimento) é quem fiscaliza todo o
										processo, inclusive na alfândega. Ao
										exportar, deve ser juntado à
										documentação o certificado de tratamento
										da madeira da embalagem. A RIBERMAX
										fornece embalagens fumigadas e os
										respectivos certificados para que o
										cliente não tenha nenhum problema no
										processo de exportação. O tratamento
										utilizado para essa finalidade é o "HT"
										ou "Heat Treatment", popularmente
										conhecido como "Fumigação". Após tratada
										a caixa deve receber dois carimbos, um
										em cada lado para que o fiscal possa
										visualizar. Todas as dúvidas a respeito
										desse assunto são esclarecidas aos
										nossos clientes sempre que entram em
										contato. Você pode tirar suas dúvidas
										também, basta clicar no botão do
										Whatsapp no canto inferior direito desta
										tela. Imediatamente você fala
										diretamente com a gente e pergunta tudo
										o que quiser. Caso queira, você também
										pode ver mais informações direto do
										Ministério da Agricultura clicando nesse
										link:
									</p>
									<a
										href="https://www.gov.br/agricultura/pt-br/guia-de-servicos/arquivos/FOLDER_EXPORTACAO.pdf"
										target="_blank"
										rel="noopener noreferrer"
									>
										<div className="text-blue-600 with-arrow hover:underline">
											Instrução Normativa Mapa nº 32/2015
										</div>
									</a>
								</div>
							</div>
							<div className="flex flex-col justify-center md:p-8 sm:items-center bg-white md:gap-10 shadow-lg rounded-b-lg mb-16 md:flex-row-reverse">
								<div className="w-full lg:w-4/12">
									<span>
										<span></span>
										<img
											alt="Foto panorâmica do porto de Santos com muitos containeres."
											src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
											decoding="async"
											data-nimg="responsive"
											className="object-cover h-auto md:rounded-md"
										/>
										<noscript>
											<img
												alt="Foto panorâmica do porto de Santos com muitos containeres."
												sizes="100vw"
												srcSet="https://rbx-backend-media.s3.sa-east-1.amazonaws.com/porto_de_santos_a7b4be81a1.jpg?w=640&amp;q=75 640w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/porto_de_santos_a7b4be81a1.jpg?w=750&amp;q=75 750w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/porto_de_santos_a7b4be81a1.jpg?w=828&amp;q=75 828w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/porto_de_santos_a7b4be81a1.jpg?w=1080&amp;q=75 1080w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/porto_de_santos_a7b4be81a1.jpg?w=1080&amp;q=75 1200w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/porto_de_santos_a7b4be81a1.jpg?w=1080&amp;q=75 1920w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/porto_de_santos_a7b4be81a1.jpg?w=1080&amp;q=75 2048w, https://rbx-backend-media.s3.sa-east-1.amazonaws.com/porto_de_santos_a7b4be81a1.jpg?w=1080&amp;q=75 3840w"
												src="https://rbx-backend-media.s3.sa-east-1.amazonaws.com/porto_de_santos_a7b4be81a1.jpg?w=1080&amp;q=75"
												decoding="async"
												data-nimg="responsive"
												className="object-cover h-auto md:rounded-md"
												loading="lazy"
											/>
										</noscript>
									</span>
								</div>
								<div className="w-full lg:w-6/12 text-lg p-5">
									<h6 className="text-4xl py-6">
										A CAIXA DE MADEIRA FUMIGADA PARA
										EXPORTAÇÃO DA RIBERMAX{' '}
									</h6>
									<p>
										Mas você pode se perguntar: Por que eu
										deveria embalar meu produto em uma caixa
										de madeira fumigada para exportação?
										Primeiramente por causa do baixo custo.
										Afinal a madeira In Natura ainda é o
										mais barato entre os materiais que
										oferecem resistência estrutural. Ainda
										não se inventou nenhum tipo de material
										que ofereça tal resistência e tão
										ecologicamente correto quanto a madeira
										In natura. Por isso é que este ainda é a
										melhor matéria prima para se fazer a
										caixa de madeira fumigada para
										exportação. Além disso, o mais
										importante é que justamente pelo fato de
										a madeira ser um material primário, ou
										seja, que não passou por longos
										processos industriais, ela traz consigo
										a característica de possuir o mais baixo
										custo que se mostre viável para tal
										solução logística. Faça você mesmo um
										orçamento diretamente em nosso sistema
										online. Calcule sua caixa de madeira
										fumigada para exportação agora.
										Atendemos toda a região sudeste do
										Brasil. Você buscava por caixa de
										madeira fumigada para exportação? Ótimo,
										você encontrou! Teremos um imenso prazer
										em lhe atender. Entre em contato.
									</p>
									<a href="/contato">
										<div className="text-blue-600 with-arrow hover:underline">
											Fale conosco...
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					{children}
				</div>
			</div>
			<Footer footer={footer} />
			{whatsappImage && whatsappContacts.length && whatsappMsg && (
				<WhatsAppButton
					media={whatsappImage}
					contatos={whatsappContacts}
					msg={whatsappMsg}
				/>
			)}
			{notificationBanner && bannerIsShown && (
				<NotificationBanner
					data={notificationBanner}
					closeSelf={() => setBannerIsShown(false)}
				/>
			)}
		</div>
	);
};

export default Layout;
