import FeatureRowsGroup from "@/components/sections/feature-rows-group";
import FeatureColumnsGroup from "@/components/sections/feature-columns-group";
import RichText from "@/components/sections/rich-text";

// Map Strapi sections to section components
const sectionComponents = {
  "sections.feature-columns-group": FeatureColumnsGroup,
  "sections.feature-rows-group": FeatureRowsGroup,
  "sections.rich-text": RichText
};

// Display a section individually
const Section = ({ sectionData, mounted }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__component];

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
