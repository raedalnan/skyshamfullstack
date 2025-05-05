import { IconType } from "react-icons";

export type BaseProps = {
    className?: string;
    children: React.ReactNode;
  };

  export type NavLink = {
    label: string;
    href: string;
  };
  export type Service = {
    id: number;
    icon: string;
    title: string;
    description: string;
  };

  export type Destination = {
    id: number;
    location: string;
    price: string;
    duration: string;
    image: string;
  };


  export type Step = {
    id: number;
    title: string;
    description: string;
    icon: IconType;
  };
  
  export type Testimonial = {
    id: number;
    name: string;
    location: string;
    image: string;
    message: string;
  };

  export type Partner = {
    id: number;
    name: string;
    logo: string;
  };

  export type FooterLink = {
    id: number;
    title: string;
    href: string;
  };


export type IconItem = {
  id: number;
  icon: IconType;
  href: string;
};
