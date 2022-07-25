import Container from './elements/main-container';
import FeatureRowsGroup from './sections/feature-rows-group';
import FeatureColumnsGroup from './sections/feature-columns-group';
import RichText from './sections/rich-text';
import { useState, useEffect } from 'react';

const sectionElements = {
	'sections.feature-rows-group': FeatureRowsGroup,
	'sections.feature-columns-group': FeatureColumnsGroup,
	'sections.rich-text': RichText
};

// Display a section individually
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
	return (
		<Container slug={slug}>
			<div className="flex flex-col">
				{sections.map((section, index) => {
					return (
						<Section
							key={`section${index}`}
							data={section}
							screenWidth={screenWidth}
						/>
					);
				})}
			</div>
		</Container>
	);
};

export default Sections;
