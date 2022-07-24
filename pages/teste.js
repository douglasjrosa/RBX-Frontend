import Container from 'components/elements/main-container';
import FeatureRowsGroup from 'components/sections/feature-rows-group';
import { slug, contentSections } from 'data/pages/embalagem-padrao-exportacao';

export const config = { amp: 'hybrid' };

const Teste = () => {
	return (
		<Container slug={slug}>
			<div className="flex flex-col">
				<FeatureRowsGroup data={contentSections[0]} />
			</div>
		</Container>
	);
};

export default Teste;
