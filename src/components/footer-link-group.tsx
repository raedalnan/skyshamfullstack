import { FooterLink } from "@/lib/types";
import Link from "next/link";

type FooterLinksGroupProps = {
  title?: string;
  links: FooterLink[];
};

export default function FooterLinksGroup({
  title,
  links,
}: FooterLinksGroupProps) {
  return (
    <>
      <h3 className="font-noto-sans font-bold text-2xl capitalize">{title}</h3>
      <ul className="flex flex-col gap-4 mt-5">
        {links.map((item) => (
          <li key={item.id}>
            <Link
              className="text-dark font-semibold hover:underline underline-offset-8 decoration-primary decoration-2 transition"
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
