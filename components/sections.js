import FeatureRowsGroup from "@/components/sections/feature-rows-group";

// Map Strapi sections to section components
const sectionComponents = {
  "sections.feature-rows-group": FeatureRowsGroup
};

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} />;
};


// Display the list of sections
const Sections = ({ sections }) => {
  return (
    <div className="flex flex-col">
		
      {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section.__component}${section.id}`}
        />
      ))}
    </div>
  );
};

export default Sections;
