import { Partner } from "@/lib/types";
import PartnerItem from "./partner-item";
import Wrapper from "./wrapper";

const partners: Partner[] = [
  {
    id: 1,
    name: "Air Arabia",
    logo: "/Air_Arabia_Logo.svg.png",
  },
  {
    id: 2,
    name: "Cham Wings",
    logo: "/Cham_wings_logo.jpg",
  },
  {
    id: 3,
    name: "Emirates",
    logo: "/Emirates_logo.svg.png",
  },

  {
    id: 5,
    name: "Qatar Airways",
    logo: "/1200px-Qatar_Airways_Logo.png", 
  },
  {
    id: 6,
    name: "Fly Dubai",
    logo: "/Fly_Dubai_logo_2010_03.svg.png",
  },
  {
    id: 7,
    name: "Turkish Airlines",
    logo: "/Turkish_Airlines_logo_2019.svg.png",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-20">
      <Wrapper>
        <div className="flex gap-6 justify-between items-center ">
          {partners.map((item) => (
            <PartnerItem key={item.id} partner={item} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
