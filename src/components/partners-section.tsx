import { Partner } from "@/lib/types";
import PartnerItem from "./partner-item";
import Wrapper from "./wrapper";

const partners: Partner[] = [
  {
    id: 1,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 2,
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    id: 3,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },

  {
    id: 5,
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png", // Wordmark alternative
  },
  {
    id: 6,
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    id: 7,
    name: "Dropbox",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg",
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
