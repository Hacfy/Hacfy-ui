import type React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ShieldCheck,
  UserCheck,
  FileCheck,
  BadgeCheck,
  CheckCircle2,
  Search,
  Cloud,
  Bone as Drone,
  Brain,
  Mail,
  Wifi,
  Database,
} from "lucide-react"

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

function ForensicsCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <span className="p-2.5 rounded-lg bg-red-50" aria-hidden="true">
          <Icon className="w-6 h-6 text-secondary" />
        </span>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  )
}

export default function DigitalForensicsPage() {
  return (
    <main>
      {/* Hero */}
      <header className="bg-white">
        <div className="max-w-6xl mx-auto px-4 pt-14 md:pt-24 pb-10 md:pb-16">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="inline-flex items-center gap-2 text-secondary">
              <Search className="w-5 h-5" aria-hidden="true" />
              <h1 className="text-sm font-semibold tracking-wide uppercase">
                Uncover Hidden Evidence. Strengthen Your Defense.
              </h1>
            </div>
            <span className="text-3xl md:text-5xl font-bold text-gray-900 text-balance">Digital Forensics</span>

            <p className="text-gray-700 md:text-lg leading-relaxed max-w-3xl">
              In today's digital-first world, cyber incidents leave behind complex trails of evidence. At HacFy, our
              Digital Forensics services are designed to identify, preserve, and analyze digital artifacts with the
              highest level of accuracy and legal compliance. From investigating sophisticated cybercrimes to supporting
              law enforcement and enterprises, we deliver actionable intelligence that empowers organizations to respond
              with confidence.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-secondary px-5 py-2.5 text-white font-medium hover:opacity-95 transition"
              >
                Get Started
              </Link>

              {/* Quick anchors */}
              <nav aria-label="Section navigation" className="flex flex-wrap gap-2 text-sm">
                <a
                  href="#cloud-forensics"
                  className="px-3 py-1 rounded-full border border-gray-200 hover:border-secondary text-gray-700"
                >
                  Cloud
                </a>
                <a
                  href="#memory-forensics"
                  className="px-3 py-1 rounded-full border border-gray-200 hover:border-secondary text-gray-700"
                >
                  Memory
                </a>
                <a
                  href="#malware-analysis"
                  className="px-3 py-1 rounded-full border border-gray-200 hover:border-secondary text-gray-700"
                >
                  Malware
                </a>
                <a
                  href="#why-choose"
                  className="px-3 py-1 rounded-full border border-gray-200 hover:border-secondary text-gray-700"
                >
                  Why HacFy
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* Brand accent */}
        <div className="h-1 w-full bg-secondary" />
      </header>

      {/* Core Forensics Capabilities */}
      <section className="py-12 md:py-20 bg-red-50/40">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs md:text-sm font-semibold text-secondary tracking-wide uppercase mb-2">
            Core Capabilities
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance">
            Our Specialized Forensics Services
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl">
            Whether it's a cybercrime investigation, insider threat, or advanced malware attack, we provide clear
            insights and actionable intelligence across multiple digital environments.
          </p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ForensicsCard
              icon={Cloud}
              title="Cloud Forensics"
              description="Analyze cloud infrastructures (AWS, Azure, Google Cloud, private clouds) to trace breaches, unauthorized access, and suspicious transactions across hybrid environments."
            />
            <ForensicsCard
              icon={Drone}
              title="Drone Forensics"
              description="Recover and analyze drone data, including GPS logs, flight records, and onboard storage to investigate surveillance, smuggling, and unauthorized operations."
            />
            <ForensicsCard
              icon={Brain}
              title="Memory Forensics"
              description="Examine volatile memory (RAM) to detect hidden malware, advanced persistent threats (APTs), in-memory rootkits, and live attack traces that evade traditional disk-based analysis."
            />
            <ForensicsCard
              icon={Mail}
              title="Email Forensics"
              description="Investigate phishing attacks, spoofed accounts, and insider leaks by analyzing metadata, headers, and attachment payloads to reveal the true source of email-based threats."
            />
            <ForensicsCard
              icon={Wifi}
              title="IoT Forensics"
              description="Extract and analyze evidence from smart devices, sensors, and connected ecosystems to identify tampering, unauthorized access, and data manipulation attempts."
            />
            <ForensicsCard
              icon={Database}
              title="Database Forensics"
              description="Perform in-depth examination of compromised databases to recover deleted records, uncover unauthorized changes, and ensure data integrity."
            />
          </div>
        </div>
      </section>

      {/* Malware Analysis */}
      <Section
        id="malware-analysis"
        eyebrow="Advanced Analysis"
        title="Malware Analysis"
        description="Deconstruct malicious software through static and dynamic analysis, identifying infection vectors, persistence techniques, and impact scope to build stronger cyber defenses."
        bullets={[
          "Reverse-engineer malicious software to understand behavior patterns",
          "Identify attack vectors and persistence mechanisms",
          "Analyze impact scope and potential data compromise",
          "Develop signatures and indicators of compromise (IOCs)",
          "Provide actionable intelligence to strengthen future defenses",
        ]}
        image="/malware-analysis-laboratory.jpg"
        imageAlt="Malware analysis laboratory"
      />

      {/* Why Choose HacFy */}
      <section id="why-choose" className="py-12 md:py-20 bg-red-50/40">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs md:text-sm font-semibold text-secondary tracking-wide uppercase mb-2">
            Why Choose HacFy
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance">
            Turning Evidence Into Actionable Intelligence
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl">
            Trusted by enterprises, law enforcement, and legal teams for discreet and accurate digital forensics
            investigations.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-8">
            <LeadershipCard
              icon={BadgeCheck}
              title="Court-Admissible Evidence"
              description="Our methodologies align with global forensic standards, ensuring evidence integrity and legal compliance."
              bullets={[
                "Chain of custody documentation and preservation",
                "Forensically sound acquisition and analysis procedures",
                "Detailed reporting for legal proceedings",
                "Expert witness testimony support",
              ]}
            />
            <LeadershipCard
              icon={UserCheck}
              title="Expert Investigators"
              description="Experienced professionals specializing in digital crime investigations and breach response."
              bullets={[
                "Certified forensic analysts and investigators",
                "Deep expertise across multiple digital environments",
                "Proven track record in complex investigations",
                "Continuous training on emerging threats and techniques",
              ]}
            />
            <LeadershipCard
              icon={FileCheck}
              title="End-to-End Support"
              description="From evidence collection to expert witness testimony, we provide complete investigative coverage."
              bullets={[
                "Initial incident response and evidence preservation",
                "Comprehensive forensic analysis and reporting",
                "Legal support and expert witness services",
                "Post-investigation security recommendations",
              ]}
            />
            <LeadershipCard
              icon={ShieldCheck}
              title="Confidential & Reliable"
              description="Trusted by enterprises, law enforcement, and legal teams for discreet and accurate results."
              bullets={[
                "Strict confidentiality and non-disclosure protocols",
                "Secure evidence handling and storage procedures",
                "Reliable and timely investigation delivery",
                "Transparent communication throughout the process",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Need Digital Forensics Support?</h3>
              <p className="mt-2 text-gray-700">
                Contact our expert investigators to uncover digital evidence and strengthen your cyber defense strategy.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-secondary px-5 py-2.5 text-white font-medium hover:opacity-95 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
