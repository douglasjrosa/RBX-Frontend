import Container from './elements/main-container';
import FeatureRowsGroup from './sections/feature-rows-group';
import FeatureColumnsGroup from './sections/feature-columns-group';
import RichText from './sections/rich-text';

const sectionElements = {
	"sections.feature-rows-group": FeatureRowsGroup,
	"sections.feature-columns-group": FeatureColumnsGroup,
	"sections.rich-text": RichText
};

// Display a section individually
const Section = ({ sectionData }) => {
	// Prepare the component
	const section = sectionData.__component;

	const SectionComponent = sectionElements[section];

	if (!SectionComponent) {
		return null;
	}

	// Display the section
	return <SectionComponent data={sectionData} />;
};

// Display the list of sections
const Sections = ({ sections, slug }) => {
	return (
		<Container slug={slug}>
			<div className="flex flex-col">
				{sections.map((section, index) => (
					<Section
						sectionData={section}
						key={`sectionKey${index}`}
					/>
				))}
			</div>
		</Container>
	);
};

export default Sections;
