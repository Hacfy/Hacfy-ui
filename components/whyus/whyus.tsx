import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <section className=" text-secondary px-8 md:py-16 py-10">
        <h2 className=" text-4xl md:text-5xl font-bold text-center mb-20 leading ">
         Built for You
        </h2>
      <div className="max-w-9xl">
        <Image
          src="/whyus.jpg"
          alt="WhyUs"
          width={1400}
          height={400}
          className="md:w-[1050px] md:h-[450px] mx-auto p-0"
        />
      </div>
    </section>
  );
}
