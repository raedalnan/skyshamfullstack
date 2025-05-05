import BookingSteps from "@/components/booking-steps";
import HeroSection from "@/components/hero-section";
import PartnersSection from "@/components/partners-section";
import ServicesSection from "@/components/services-section";
import SubscribeSection from "@/components/subscribe-section";
import Testimonials from "@/components/testimonials";
import TopDestinations from "@/components/top-destinations";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TopDestinations />

      {/* <AviationBanner /> */}
      <BookingSteps />
      <Testimonials />
      <PartnersSection />
      <SubscribeSection />
    </main>
  );
}
