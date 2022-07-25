import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import FeatureRowsGroup from './sections/feature-rows-group';
import FeatureColumnsGroup from './sections/feature-columns-group';
import RichText from './sections/rich-text';
import { useState, useEffect } from 'react';
const Container = dynamic(() => import('./elements/main-container'), {
	suspense: true
});

const sectionElements = {
	'sections.feature-rows-group': FeatureRowsGroup,
	'sections.feature-columns-group': FeatureColumnsGroup,
	'sections.rich-text': RichText
};

const Section = (props) => {
	const { component } = props.data;

	const SectionComponent = sectionElements[component];

	return !SectionComponent ? null : <SectionComponent {...props} />;
};

const Sections = ({ sections, slug }) => {
	const [screenWidth, setScreenWidth] = useState();

	useEffect(() => {
		setScreenWidth(window.innerWidth);
	}, []);

	const content = sections.map((section, index) => {
		return (
			<Section
				key={`section${index}`}
				data={section}
				screenWidth={screenWidth}
			/>
		);
	});

	return (
		<Suspense
			fallback={
				<div className="bg-[#E3C486] bg-repeat py-36">
					<div className="flex flex-col">{content}</div>
				</div>
			}
		>
			<Container slug={slug}>
				<div className="flex flex-col">{content}</div>
			</Container>
		</Suspense>
	);
};

export default Sections;
