"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { PinContainer } from "@/components/ui/3d-pin";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 md:px-10">
      <section className="w-full max-w-5xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-secondary">
          About HacFy
        </h2>

        <div className="h-[30rem] w-full flex items-center justify-center ">
          <PinContainer
            title="Know Our Services"
            href="/#services"
            className="bg-primary h-[250px]"
          >
            <div
              className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 
              sm:basis-1/2 w-[20rem] md:w-[70rem] h-[20rem] md:h-[30rem]"
            >
              <div className="text-xl font-semibold  !m-0 !p-0  text-gray-600">
                HacFy is a full-spectrum cybersecurity company dedicated to
                building safer digital ecosystems through innovative
                technologies, expert consulting, and comprehensive security
                solutions. <br /> <br />
                From proactive threat detection and penetration testing to
                advanced vulnerability assessments and incident response, we
                provide end-to-end services tailored to the needs of
                individuals, institutions, and enterprises.
              </div>
            </div>
          </PinContainer>
        </div>
      </section>

      <section className="w-full max-w-5xl mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-secondary">
          VISION
        </h2>
        <Card className="relative overflow-hidden mt-10 bg-primary border border-gray-700">
          <CardContent className="text-gray-500 font-semibold text-lg md:text-2xl text-balance p-6 md:p-10">
            To become the most trusted whitebal force in cybersecurity,
            delivering innovative solutions, expert consultancy, and impactful
            services that empower individuals and enterprises to thrive securely
            in a connected world.
          </CardContent>
          <BorderBeam duration={8} size={100} />
        </Card>
      </section>

      <section className="w-full max-w-5xl mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-secondary">
          MISSION
        </h2>
        <Card className="relative overflow-hidden mt-10 bg-primary border border-gray-700">
          <CardContent className="text-gray-500 font-semibold text-lg md:text-2xl text-balance p-6 md:p-10">
            As a trusted partner in cybersecurity, we go beyond protection —
            empowering our clients with strategic insights, industry-best
            practices, and real-time solutions powered by AI, IoT, and
            automation. At HacFy, we’re not just solving today’s challenges —
            we’re building tomorrow’s security foundations.
          </CardContent>
          <BorderBeam duration={8} size={100} />
        </Card>
      </section>

      <section className="w-full max-w-5xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-secondary pb-2">
          HACFY CYBER CHETANA
        </h2>
        <h3 className="text-lg md:text-xl font-bold text-black  ">
          Your Digital Safety, Our Priority
        </h3>

        <div className="h-[30rem] w-full flex items-center justify-center ">
          <PinContainer
            title="cyberchetana.hacfy.com"
            href="https://cyberchetana.hacfy.com"
            className="bg-primary h-[350px]"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:w-[70rem] h-[20rem] md:h-[30rem]">
              <div className="text-base !m-0 !p-0 font-normal">
                <p className="text-lg md:text-3xl text-balance leading-relaxed text-gray-800 font-semibold">
                  HacFy Cyber Chetana is our flagship Corporate Social
                  Responsibility (CSR) initiative aimed at creating a safer
                  digital future for all.
                </p>

                <p className="text-xl font-semibold text-secondary pt-5">
                  Focused on Karnataka, this mission-driven campaign is designed
                  to:
                </p>

                <ul className="pt-6 text-gray-600 list-disc list-inside text-left max-w-3xl ml-50">
                  <li>
                    Empower young minds with cybersecurity knowledge and career
                    guidance.
                  </li>
                  <li>
                    Educate and protect women from digital abuse and online
                    threats.
                  </li>
                  <li>
                    Build grassroots digital literacy through workshops,
                    awareness drives, and school/college outreach programs.
                  </li>
                </ul>
              </div>
            </div>
          </PinContainer>
        </div>
      </section>
    </div>
  );
}
