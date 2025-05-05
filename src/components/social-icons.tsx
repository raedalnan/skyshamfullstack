import { IconItem } from "@/lib/types";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import IconGroup from "./icon-group";

const socialMediaLinks: IconItem[] = [
  { id: 1, icon: FaFacebookF, href: "https://facebook.com/yourprofile" },
  { id: 2, icon: BsTwitterX, href: "https://x.com/yourprofile" },
  { id: 3, icon: FaInstagram, href: "https://instagram.com/yourprofile" },
];

export default function SocialIcons() {
  return <IconGroup items={socialMediaLinks} />;
}
