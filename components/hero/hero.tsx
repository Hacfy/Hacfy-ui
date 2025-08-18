"use client";
import React from "react";
import { Button } from "../ui/button";
import { BackgroundBeams } from "../ui/background-beams";

export default function Hero() {
  return (

    <div className="w-full h-screen rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div
        className=" text-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight  md:text-7xl"
      >
        <h1 className="text-5xl md:text-8xl font-extrabold leading-tight ">
          <span className="text-white hover:text-red-500 cursor-pointer">
  A FUTURE SECURED
</span>

         
        </h1>

        <p className="mt-4 text-lg text-white max-w-7xl text-balance font-medium leading-8 tracking-wide">
          Our mission is to build a safer digital world by offering end-to-end
          cybersecurity solutions. Whether you're a student, professional,
          startup, or enterprise, our services are tailored to meet your needs.
          From penetration testing to comprehensive security consulting, we
          empower individuals and organizations to defend against the evolving
          cyber threat landscape.
        </p>

        <div className="mt-8 flex justify-center">
          <Button className="px-6 py-3 text-lg border-2 text-secondary tracking-tight font-bold hover:text-white hover:bg-secondary">
           Schedule a call
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>

  );
}
