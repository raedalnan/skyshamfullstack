"use client";

import { Button } from "@/components/ui/button";
import { Testimonial } from "@/lib/types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SetStateAction, useEffect, useState } from "react";
import TestimonialCard from "./testimonial-card";
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Isabella Rossi",
    location: "Florence, Italy",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    message:
      "“I never expected such fast service. The team was professional, responsive, and made everything so easy to manage.”",
  },
  {
    id: 2,
    name: "James Carter",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    message:
      "“Fantastic experience from start to finish. Their attention to detail and consistent updates gave me complete peace of mind.”",
  },
  {
    id: 3,
    name: "Mei Tan",
    location: "Kuala Lumpur, Malaysia",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    message:
      "“The results were beyond what I imagined. Everything was delivered exactly on time, and the process was incredibly smooth.”",
  },
  {
    id: 4,
    name: "Liam O'Connor",
    location: "Dublin, Ireland",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    message:
      "“I've worked with many teams before, but this one stands out. Reliable, friendly, and truly professional in every sense.”",
  },
  {
    id: 5,
    name: "Sakura Hayashi",
    location: "Tokyo, Japan",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    message:
      "“A brilliant experience overall. Their support was exceptional and I always felt informed, understood, and well taken care of.”",
  },
];

export default function CardCarousel() {
  // Sample card data

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToCard = (index: SetStateAction<number>) => {
    if (isAnimating || index === currentIndex) return;

    setIsAnimating(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Reset animation flag after animation completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Calculate next index for preview card
  const nextIndex =
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="flex items-center w-full  mx-auto relative h-96 ">
      {/* Top navigation button */}

      {/* Main card container */}
      <div className="relative w-full h-full flex flex-col  ">
        {/* Main card */}
        <div
          className={`transition-all duration-300 ease-in-out absolute w-full ${
            isAnimating
              ? "opacity-0 translate-y-12"
              : "opacity-100 translate-y-0"
          }`}
        >
          <TestimonialCard testimonial={testimonials[currentIndex]} />
        </div>

        {/* Preview of next card */}
        <div className="hidden xs:flex absolute  -bottom-4 -right-12 w-full  justify-center -z-10 ">
          <div className="w-11/12 transform  ">
            <TestimonialCard
              className="bg-[#f7f7f7]"
              testimonial={testimonials[nextIndex]}
            />
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-primary w-4"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToCard(index)}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom navigation button */}
      <div className="ml-4 xs:ml-12 flex flex-col gap-4  z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-md hover:bg-gray-100"
          onClick={goToPrevious}
          aria-label="Previous card"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-md hover:bg-gray-100"
          onClick={goToNext}
          aria-label="Next card"
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
