import DestinationGrid from "./destinations-grid";
import SectionHeader from "./section-header";
import Wrapper from "./wrapper";

export default function TopDestinations() {
  return (
    <section>
      <Wrapper>
        <SectionHeader
          className="capitalize"
          subtitle="Top Selling"
          title="Top Destinations"
        />
        <DestinationGrid />
      </Wrapper>
    </section>
  );
}
