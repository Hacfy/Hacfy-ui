"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Database,
  Users,
  Lock,
  Clock,
  UserCheck,
  Cookie,
  Globe,
  Baby,
  FileText,
} from "lucide-react"

export default function PrivacyPolicy() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const privacySections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">We may collect:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>
                <strong>Personal Information:</strong> Name, email, phone number, and business details provided
                voluntarily.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>
                <strong>Technical Data:</strong> IP address, browser type, device information, and usage statistics.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>
                <strong>Communication Data:</strong> Records of inquiries, support requests, or interactions with our
                team.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>
                <strong>Payment Data:</strong> When applicable, processed securely by third-party payment providers.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "information-usage",
      title: "How We Use Information",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">We use collected data to:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Deliver and manage cybersecurity Services.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Respond to inquiries, support requests, or business communications.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Improve our website, security, and client engagement.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Comply with legal and regulatory obligations.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "information-sharing",
      title: "Sharing of Information",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We do not sell personal data. Information may be shared only with:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>
                <strong>Service Providers:</strong> Hosting, IT support, analytics, or payment processors.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>
                <strong>Regulatory Authorities:</strong> If required by law or legal proceedings.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>
                <strong>Business Transactions:</strong> In case of merger, acquisition, or restructuring.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We implement strong safeguards to protect information, including encryption, access controls, and
            monitoring. However, no system is entirely secure, and information is shared at your own risk.
          </p>
        </div>
      ),
    },
    {
      id: "data-retention",
      title: "Data Retention",
      icon: Clock,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We retain personal data only as long as necessary for business purposes, compliance, or legal obligations.
            Data is deleted or anonymized when no longer required.
          </p>
        </div>
      ),
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: UserCheck,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">Depending on jurisdiction, you may have the right to:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Access and review the personal data we hold.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Request correction or deletion.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Restrict processing or withdraw consent.</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Requests can be submitted to{" "}
            <a href="mailto:privacy@hacfy.com" className="text-red-600 hover:text-red-700 font-medium">
              privacy@hacfy.com
            </a>{" "}
            or via the contact details below.
          </p>
        </div>
      ),
    },
    {
      id: "cookies-tracking",
      title: "Cookies and Tracking",
      icon: Cookie,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We use cookies and analytics tools to monitor website performance and enhance user experience. You may
            disable cookies in your browser, though some features may be limited.
          </p>
        </div>
      ),
    },
    {
      id: "international-transfers",
      title: "International Data Transfers",
      icon: Globe,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            If you access our Services from outside India, your data may be transferred and processed under
            jurisdictions with different data protection laws.
          </p>
        </div>
      ),
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      icon: Baby,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Our Services are not intended for individuals under the age of 13. We do not knowingly collect personal data
            from minors. If such data is inadvertently collected, we will delete it upon request.
          </p>
        </div>
      ),
    },
    {
      id: "policy-updates",
      title: "Policy Updates",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy periodically. Updates will be published on this page with a revised "Last
            Updated" date.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At HacFy, we value your trust and are committed to safeguarding your personal information. This Privacy
            Policy explains how we collect, use, store, and protect information when you use our website or Services.
          </p>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {privacySections.map((section, index) => {
              const isOpen = openSections[section.id]

              return (
                <div
                  key={section.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 rounded-xl transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {index + 1}. {section.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-4">{section.content}</div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-r from-red-50 to-white p-8 rounded-xl border border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About This Policy?</h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              
              <p>
                <strong>General Contact:</strong>{" "}
                <a href="mailto:info@hacfy.com" className="text-red-600 hover:text-red-700">
                  info@hacfy.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
