import ErrorPage from 'next/error';
import Sections from '@/components/sections';
import Seo from '@/components/elements/seo';
import { useRouter } from 'next/router';
import Loading from '@/components/elements/loading';
import {page} from '@/lib/pages/embalagem-padrao-exportacao'

export const config = { amp: 'hybrid' };

const Teste = () => {
	const router = useRouter();

	if (router.isFallback) return <Loading />;
	if (!page) return <ErrorPage statusCode={404} />;

	const { metadata, contentSections, slug } = page;
	return (
		<>
			{/* Add meta tags for SEO*/}
			<Seo metadata={metadata} />
			{/* Display content sections */}
			<Sections sections={contentSections} slug={slug} />
		</>
	);
};

export default Teste;
