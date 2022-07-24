
import Container from 'components/elements/main-container';
import FeatureRowsGroup from 'components/sections/feature-rows-group';
import {page} from 'data/pages/embalagem-padrao-exportacao'

export const config = { amp: 'hybrid' };

const Teste = () => {	
	return (
		<Container slug={page.slug}>
			<div className="flex flex-col">
					<FeatureRowsGroup
						data={page.contentSections[0]}
					/>
			</div>
		</Container>
	);
};

export default Teste;
