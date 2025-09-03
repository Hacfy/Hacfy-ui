import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, UserCheck, FileCheck, BadgeCheck, CheckCircle2 } from "lucide-react"

// Simple, reusable section block aligned with red + white theme
function Section({
  id,
  eyebrow,
  title,
  description,
  bullets,
  image,
  imageAlt,
  reverse = false,
}: {
  id: string
  eyebrow?: string
  title: string
  description: string
  bullets?: string[]
  image?: string
  imageAlt?: string
  reverse?: boolean
}) {
  return (
    <section id={id} className="py-12 md:py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`grid md:grid-cols-2 items-center gap-10 md:gap-14 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}
        >
          <div>
            {eyebrow ? (
              <p className="text-xs md:text-sm font-semibold text-secondary tracking-wide uppercase mb-2">{eyebrow}</p>
            ) : null}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance">{title}</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>

            {bullets && bullets.length > 0 && (
              <ul className="mt-6 space-y-3">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5" aria-hidden="true" />
                    <span className="text-gray-800">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative">
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
              <Image
                src={image || "/placeholder.svg?height=640&width=900&query=cyber%20resilience%20illustration"}
                alt={imageAlt || "Cyber resilience illustration"}
                width={900}
                height={640}
                className="h-auto w-full"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LeadershipCard({
  icon: Icon,
  title,
  description,
  bullets,
}: {
  icon: React.ElementType
  title: string
  description: string
  bullets: string[]
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3">
        <span className="p-2.5 rounded-lg bg-red-50" aria-hidden="true">
          <Icon className="w-5 h-5 text-secondary" />
        </span>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-3 text-gray-700">{description}</p>
      <ul className="mt-5 space-y-3">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <BadgeCheck className="w-5 h-5 text-secondary mt-0.5" aria-hidden="true" />
            <span className="text-gray-800">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CyberResiliencePage() {
  return (
    <main>
      {/* Hero */}
      <header className="bg-white">
        <div className="max-w-6xl mx-auto px-4 pt-14 md:pt-24 pb-10 md:pb-16">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="inline-flex items-center gap-2 text-secondary">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
            <h1 className="text-sm font-semibold tracking-wide uppercase ">
              Resilient security that empowers growth
            </h1>
            </div>
              <span className="text-3xl md:text-5xl font-bold text-gray-900 text-balance">Cyber Resilience</span>

            <p className="text-gray-700 md:text-lg leading-relaxed max-w-3xl">
              We turn cybersecurity into a strategic advantage. Align leadership, compliance, and risk with your
              business roadmap so you stay secure, audit-ready, and trusted—without slowing innovation.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-secondary px-5 py-2.5 text-white font-medium hover:opacity-95 transition"
              >
                Get in touch
              </Link>

              {/* Quick anchors */}
              <nav aria-label="Section navigation" className="flex flex-wrap gap-2 text-sm">
                <a
                  href="#advisory"
                  className="px-3 py-1 rounded-full border border-gray-200 hover:border-secondary text-gray-700"
                >
                  Advisory
                </a>
                <a
                  href="#leadership"
                  className="px-3 py-1 rounded-full border border-gray-200 hover:border-secondary text-gray-700"
                >
                  vCISO & vDPO
                </a>
                <a
                  href="#regulatory-compliance"
                  className="px-3 py-1 rounded-full border border-gray-200 hover:border-secondary text-gray-700"
                >
                  Compliance
                </a>
                <a
                  href="#risk-assessment"
                  className="px-3 py-1 rounded-full border border-gray-200 hover:border-secondary text-gray-700"
                >
                  Risk
                </a>
                <a
                  href="#iso-27001"
                  className="px-3 py-1 rounded-full border border-gray-200 hover:border-secondary text-gray-700"
                >
                  ISO 27001
                </a>
                <a
                  href="#pci-dss"
                  className="px-3 py-1 rounded-full border border-gray-200 hover:border-secondary text-gray-700"
                >
                  PCI DSS
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* Brand accent */}
        <div className="h-1 w-full bg-secondary" />
      </header>

      {/* Cyber Advisory & Consultancy */}
      <Section
        id="advisory"
        eyebrow="Advisory & Consultancy"
        title="Transform security into a growth driver"
        description="We don’t just advise—we empower. Our Cyber Advisory & Consultancy services help you build resilient, scalable, and future-proof cybersecurity programs that directly support business growth."
        bullets={[
          "Analyze your unique threat landscape with deep industry insights",
          "Design robust, scalable security architectures",
          "Develop actionable roadmaps aligned with your business objectives",
          "Bridge the gap between technical execution and executive strategy",
        ]}
        image="/images/1.png"
        imageAlt="Cyber advisory and consultancy meeting"
      />

      {/* vCISO + vDPO combined */}
      <section id="leadership" className="py-12 md:py-20 bg-red-50/40">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs md:text-sm font-semibold text-secondary tracking-wide uppercase mb-2">
            Virtual Leadership
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance">Executive leadership, on demand</h2>
          <p className="mt-4 text-gray-700 max-w-3xl">
            Get the executive guidance you need—without the full-time cost. Our vCISO and vDPO services align risk,
            growth, and compliance to strengthen resilience across the organization.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-8">
            <LeadershipCard
              icon={UserCheck}
              title="vCISO (Virtual Chief Information Security Officer)"
              description="Executive-level leadership tailored to your maturity and risk appetite."
              bullets={[
                "Strategic security planning aligned with growth",
                "Board-level reporting in business terms",
                "Policy and program oversight for governance & compliance",
                "Scalable roadmaps that evolve with your business",
              ]}
            />
            <LeadershipCard
              icon={FileCheck}
              title="vDPO (Virtual Data Protection Officer)"
              description="Turn privacy into a competitive advantage while meeting global data laws."
              bullets={[
                "Tailored privacy frameworks by sector and jurisdiction",
                "Compliance with GDPR, DPDP, HIPAA, and international laws",
                "Governance, risk management, and incident response planning",
                "Embed responsible data practices to build customer trust",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <Section
        id="regulatory-compliance"
        eyebrow="Compliance"
        title="Regulatory Compliance"
        description="From complexity to clarity. We simplify global standards—GDPR, HIPAA, DPDP Act, ISO 27001, PCI DSS, NIST, SOC 2—and turn them into practical controls that satisfy auditors and strengthen your posture."
        bullets={[
          "Translate regulations into clear, actionable steps",
          "Build sustainable, auditor-ready compliance programs",
          "Strengthen security while ensuring readiness",
        ]}
        image="/images/3.png"
        imageAlt="Regulatory compliance documentation"
        reverse
      />

      {/* Cyber Risk Assessment */}
      <Section
        id="risk-assessment"
        eyebrow="Risk"
        title="Cyber Risk Assessment"
        description="Clarity, prioritization, and action. Know your risks and control them with measurable, business-aligned outcomes."
        bullets={[
          "360° visibility into your security posture",
          "Business-driven prioritization of threats and vulnerabilities",
          "Actionable remediation intelligence—not just reports",
          "Transparent stakeholder reporting to demonstrate due diligence",
        ]}
        image="/images/4.png"
        imageAlt="Cyber risk assessment dashboard"
      />

      {/* ISO 27001 */}
      <Section
        id="iso-27001"
        eyebrow="Certification"
        title="ISO 27001 Certification Services"
        description="Beyond the certificate—build real resilience. We guide you with a structured, practical methodology that strengthens your business."
        bullets={[
          "Gap analysis to assess your current state",
          "Tailored implementation of security controls",
          "ISMS design for sustainability",
          "Audit preparation and certification support",
        ]}
        image="/images/5.png"
        imageAlt="ISO 27001 program visuals"
        reverse
      />

      {/* PCI DSS */}
      <Section
        id="pci-dss"
        eyebrow="Compliance"
        title="PCI DSS Compliance"
        description="Secure payments. Protect customers. Build trust. We help you secure your payment ecosystem while reducing compliance costs."
        bullets={[
          "Conduct gap assessments and identify risks",
          "Implement technical and procedural safeguards",
          "Prepare documentation and validation for audit success",
          "Reduce PCI scope to optimize effort and cost",
        ]}
        image="/images/6.png"
        imageAlt="PCI DSS compliance visuals"
      />

      {/* Final CTA */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to strengthen resilience?</h3>
              <p className="mt-2 text-gray-700">
                Speak with our experts to align security, compliance, and growth—without slowing your roadmap.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-secondary px-5 py-2.5 text-white font-medium hover:opacity-95 transition"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
