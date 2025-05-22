import Image from "next/image";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export default function HeroSection() {
  return (
    <section className="">
      <Wrapper>
        <div className="flex flex-col gap-6 md:flex-row items-center min-h-[84vh] ">
          <div className="col py-10 basis-1/2">
            <h3 className="font-bold uppercase text-primary font-poppins text-xl">
              Best Destinations around the world
            </h3>
            <h1 className="font-bold font-volkhov text-3xl md:text-4xl lg:text-7xl text-navy leading-[1] mt-5">
            Explore the World with Sky Sham
            </h1>
            <p className="leading-[1.6] mt-8">
            Discover breathtaking destinations, seamless flight bookings, tailored travel packages, and unforgettable experiences — all with Sky Sham Travel Agency.
            </p>
            <div className="flex items-center gap-4 mt-9">
              <Button className="cursor-pointer">Find out more</Button>
              
            </div>
          </div>
          <div className="basis-1/2 w-full h-full relative aspect-square">
            <Image fill src="/traveller-1.png" alt={""} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
