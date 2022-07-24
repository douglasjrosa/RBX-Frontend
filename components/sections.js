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
const Section = (props) => {

	const {component} = props.data;
	
	const SectionComponent = sectionElements[component];

	return !SectionComponent ? null : <SectionComponent {...props} />;
};

// Display the list of sections
const Sections = ({ sections, slug }) => {
	console.log(sections);
	
	return (
		<Container slug={slug}>
			<div className="flex flex-col">
				{sections.map((section, index) => (
					<Section
						key={`section${index}`}
						data={section}
					/>
				))}
			</div>
		</Container>
	);
};

export default Sections;
