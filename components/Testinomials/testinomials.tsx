"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "The cybersecurity training gave me real-world skills and boosted my career confidence. The hands-on approach made learning impactful.",
    name: "Ram kiran",
    role: "Founder of Shree Medha College",
    image: "./sriram.jpeg"
  },
  {
    text: "Our systems were secured with expert strategies and quick support. The service gives us complete peace of mind",
    name: "Niels Hoekman",
    role: "CEO of CISA",
    image: "./Niels Hoekman.jpeg",
  },
  {
    text: "The cybersecurity training gave me real-world skills and boosted my career confidence. The hands-on approach made learning impactful.",
    name: "Kiran kashyap",
    role: "Marketing Head & Company Relationship Manager at Vithsutra Technologies",
    image: "./Kiran kashyap.jpeg",
  },
  
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial: Testimonial = testimonials[currentIndex];

  return (
    <div className="bg-primary text-white flex items-center justify-center mt-10">
      <div className="w-full max-w-2xl text-center p-10">
        <h1 className="text-5xl font-bold text-secondary">Testimonials</h1>
        <div className="relative min-h-[100px] mt-10">
          <div key={currentIndex} className="animate-fade">
            <p className="text-xl italic mb-8 text-gray-900">
              "{currentTestimonial.text}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="rounded-full w-16 h-16 object-cover"
              />
              <div className="text-left">
                <h3 className="font-bold text-lg text-gray-700">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-400">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
