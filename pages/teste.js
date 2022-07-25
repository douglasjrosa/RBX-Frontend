import Container from 'components/elements/main-container';
import FeatureRowsGroup from 'components/sections/feature-rows-group';
import { slug, contentSections } from 'data/pages/embalagem-padrao-exportacao';
import { useEffect, useState } from 'react';

const Teste = () => {
	return (
		<Container slug={slug}>
			<div className="flex flex-col">
				<FeatureRowsGroup features={contentSections[0].features} screenWidth={screenWidth} />
			</div>
		</Container>
	);
};

export default Teste;
