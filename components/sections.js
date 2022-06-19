import dynamic from 'next/dynamic';
import Container from './elements/main-container';

// Display a section individually
const Section = ({ sectionData }) => {
	// Prepare the component
	const section = sectionData.__component.replace('sections.', '');
	const SectionComponent = dynamic(() =>
		import(`@/components/sections/${section}`)
	);

	if (!SectionComponent) {
		return null;
	}

	// Display the section
	return <SectionComponent data={sectionData} />;
};

// Display the list of sections
const Sections = ({ sections, theme }) => {
	return (
		<Container theme={theme}>
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
