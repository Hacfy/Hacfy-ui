"use client";

import { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FaqSection: FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl py-8 px-4 ">
      {/* Two-column layout: left for text, right for accordion */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-40">
        {/* Left column */}
        <div className="space-y-4">
          <h1 className="text-gray-500 text-2xl font-bold ">FAQs</h1>
          <h2 className="text-2xl font-bold md:text-4xl text-secondary">
            A Dedication to Supporting All Aspects of Your Life.
          </h2>
          <p className="text-xl font-semibold text-gray-500">
            Can&apos;t find what you are looking for?
          </p>
          <p className="text-lg  text-gray-500">
            Let&apos;s Talk: Engage with Us in a Conversation Tailored Just for
            You
          </p>
        </div>

        <div>
          <Accordion
            type="single"
            collapsible
            className="space-y-2 text-secondary font-semibold"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger >
                1. What is Cybersecurity, and why is it important?
              </AccordionTrigger>
              <AccordionContent className="text-[#0f0a49]">
                Cybersecurity protects digital systems, data, and networks from cyber attacks, ensuring business continuity and data privacy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                2. . Who should use Hacfy’s Cybersecurity Services?
              </AccordionTrigger>
              <AccordionContent className="text-[#0f0a49]">
               Businesses, government agencies, and organizations handling sensitive data need Hacfy’s services to improve security and stay compliant.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                3. What services does Hacfy offer?
              </AccordionTrigger>
              <AccordionContent className="text-[#0f0a49]">
          Hacfy provides vCISO, DFIR, PCI DSS compliance, Penetration Testing, Risk Assessment, and Security Audits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                4. Why choose vCISO and DFIR services?
              </AccordionTrigger>
              <AccordionContent className="text-[#0f0a49]">
                vCISO offers expert security strategy without full-time cost, and DFIR helps investigate and respond to cyber incidents quickly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                5. How does Hacfy help with compliance?
              </AccordionTrigger>
              <AccordionContent className="text-[#0f0a49]">
               We guide businesses to meet PCI DSS, GDPR, and other regulatory standards with audits, gap assessments, and actionable remediation plans.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
