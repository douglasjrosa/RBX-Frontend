import dynamic from 'next/dynamic';

// Display a section individually
const Section = ({ sectionData, mounted }) => {
	// Prepare the component
	const section = sectionData.__component.replace('sections.', '');
	const SectionComponent = dynamic(() =>
		import(`@/components/sections/${section}`)
	);
		
	if (!SectionComponent) {
		return null;
	}
	
	// Display the section
	return <SectionComponent data={sectionData} mounted={mounted} />;
};

// Display the list of sections
const Sections = ({ sections, mounted }) => {
	return (
		<div className="flex flex-col">
			{sections.map((section) => (
				<Section
					sectionData={section}
					key={`${section.__component}${section.id}`}
					mounted={mounted}
				/>
			))}
		</div>
	);
};

export default Sections;
