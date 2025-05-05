import SectionHeader from "./section-header";
import ServiceGrid from "./service-grid";
import Wrapper from "./wrapper";

export default function ServicesSection() {
  return (
    <section className=" py-10">
      <Wrapper>
        <SectionHeader subtitle="our services" title="We Offer Best Services" />

        <ServiceGrid />
      </Wrapper>
    </section>
  );
}
