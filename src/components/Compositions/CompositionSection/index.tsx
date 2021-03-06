import type { SectionProps } from "./types";
import { PageSection } from "./style";

const CompositionSection = ({
  children,
  backgroundColor,
  zeroPadding,
  sectionId,
  padding,
}: SectionProps) => {
  return (
    <PageSection
      id={sectionId}
      backgroundColor={backgroundColor}
      zeroPadding={zeroPadding}
      padding={padding}
    >
      {children}
    </PageSection>
  );
};

export default CompositionSection;
