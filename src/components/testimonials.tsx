import CardCarousel from "./card-carousel";
import H2 from "./h2";
import H4 from "./h4";
import Wrapper from "./wrapper";

export default function Testimonials() {
  return (
    <section className="py-20">
      <Wrapper>
        <div className="flex flex-col gap-6 justify-between md:flex-row">
          <header className="basis-1/2">
            <H4>Testimonials</H4>
            <H2 className="mt-2">
              What people say
              <br className="hidden md:block" />
              about Us.
            </H2>
          </header>
          <div className="basis-1/2">
            <CardCarousel />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
