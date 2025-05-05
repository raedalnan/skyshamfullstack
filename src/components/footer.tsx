import { FooterLink } from "@/lib/types";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import FooterLinksGroup from "./footer-link-group";
import Logo from "./logo";
import SocialIcons from "./social-icons";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";
const companyLinks: FooterLink[] = [
  { id: 1, title: "About", href: "/about" },
  { id: 2, title: "Careers", href: "/careers" },
  { id: 3, title: "Mobile", href: "/mobile" },
];
const contactLinks: FooterLink[] = [
  { id: 1, title: "Help / FAQ", href: "/help" },
  { id: 2, title: "Press", href: "/press" },
  { id: 3, title: "Affiliates", href: "/affiliates" },
];
const moreLinks: FooterLink[] = [
  { id: 1, title: "Airlinefees", href: "/airlinefees" },
  { id: 2, title: "Airline", href: "/airline" },
  { id: 3, title: "Low fare tips", href: "/low-fare-tips" },
];

export default function Footer() {
  return (
    <footer className="pt-20 ">
      <Wrapper>
        <div className="grid sm:grid-cols-3 gap-8 md:grid-cols-6 ">
          <div className="">
            <Logo />
            <p className="text-dark text-sm mt-5">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div className="">
            <FooterLinksGroup title="company" links={companyLinks} />
          </div>
          <div className="">
            <FooterLinksGroup title="Contact" links={contactLinks} />
          </div>
          <div className="">
            <FooterLinksGroup title="More" links={moreLinks} />
          </div>
          <div className="sm:col-span-2">
            <SocialIcons />
            <h3 className="text-2xl text-dark my-6 capitalize">
              Discover our app
            </h3>
            <div className="flex gap-4">
              <Button className=" bg-black  text-white py-4 px-4">
                <IoLogoGooglePlaystore />
                Get it now
              </Button>
              <Button className=" bg-black  text-white py-4 px-4">
                <FaApple />
                Get it now
              </Button>
            </div>
          </div>
        </div>

        <div className="py-10 mt-5 text-center">
          <small className="capitalize tracking-wider text-dark ">
            &copy; copyright 2025, all right reserved.
          </small>
        </div>
      </Wrapper>
    </footer>
  );
}
