"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Shield,
  Users,
  CreditCard,
  ExternalLink,
  Scale,
  RefreshCw,
} from "lucide-react"

export default function TermsAndConditions() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const sections = [
    {
      id: "eligibility",
      title: "Eligibility",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">You must be at least 18 years of age to use our Services.</p>
          <p className="text-gray-700 leading-relaxed">
            If you represent a company or organization, you confirm that you are authorized to act on its behalf.
          </p>
        </div>
      ),
    },
    {
      id: "scope",
      title: "Scope of Services",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-4">HacFy provides:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Cybersecurity consulting and advisory services
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Penetration testing and vulnerability assessments
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Security awareness and professional training sessions
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Webinars, events, and knowledge-sharing sessions
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            We may update or modify our Services at any time without prior notice.
          </p>
        </div>
      ),
    },
    {
      id: "responsibilities",
      title: "User Responsibilities",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Misuse or interfere with our website or Services
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Attempt unauthorized access to systems, servers, or networks
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Use the Services for unlawful purposes or in violation of regulations
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Copy, reproduce, or distribute our content or materials without prior written permission
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            All materials, reports, graphics, branding, and content on this website are the property of HacFy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You may not copy, reuse, or distribute any materials without explicit authorization.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We grant you a limited license to access the website for informational and professional use only.
          </p>
        </div>
      ),
    },
    {
      id: "payments",
      title: "Payments and Refund Policy",
      icon: CreditCard,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Fees for Services must be paid in accordance with agreed terms before project commencement or event
            participation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Refunds are considered only under exceptional circumstances, subject to review.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Approved refunds will be processed within ten (10) business days to the original payment method.
          </p>
        </div>
      ),
    },
    {
      id: "third-party",
      title: "Third-Party Links",
      icon: ExternalLink,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites or services. HacFy is not responsible for the
            accuracy, content, or practices of such third parties.
          </p>
        </div>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">HacFy provides Services on a professional best-effort basis.</p>
          <p className="text-gray-700 leading-relaxed">
            We make no guarantee that our findings, reports, or recommendations will prevent all cybersecurity
            incidents.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We shall not be liable for indirect, incidental, or consequential damages resulting from use of our website
            or Services.
          </p>
        </div>
      ),
    },
    {
      id: "indemnification",
      title: "Indemnification",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            You agree to indemnify and hold harmless HacFy, its employees, and partners from any claims or damages
            arising from misuse of our Services or violation of these Terms.
          </p>
        </div>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by the laws of India, with exclusive jurisdiction of the courts of Karnataka,
            India.
          </p>
        </div>
      ),
    },
    {
      id: "amendments",
      title: "Amendments",
      icon: RefreshCw,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We may revise these Terms at any time. Updated Terms will be posted on our website. Continued use of the
            Services constitutes acceptance of the revised Terms.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-white via-red-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our website or services
          </p>
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-700 leading-relaxed">
              Welcome to <span className="font-semibold text-red-600">HacFy</span> ("Company," "we," "our," or "us").
              These Terms & Conditions ("Terms") govern your access to and use of our website{" "}
              <a href="https://www.hacfy.com" className="text-red-600 hover:text-red-700 underline">
                https://www.hacfy.com
              </a>{" "}
              and our cybersecurity services, including but not limited to security consulting, vulnerability
              assessments, penetration testing, awareness programs, events, and other professional services
              (collectively, the "Services").
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>
                By using our website or Services, you agree to comply with these Terms. If you do not agree, you must
                discontinue use immediately.
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* Terms Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            const isExpanded = expandedSection === section.id

            return (
              <div key={section.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                   
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {index + 1}. {section.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">{section.content}</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-white p-8 rounded-lg border border-red-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you have any questions about these Terms & Conditions, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="mailto:info@hacfy.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-medium rounded-lg border border-red-600 hover:bg-red-50 transition-colors duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}
