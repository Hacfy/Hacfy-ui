"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronDown,
  ChevronRight,
  X,
  Shield,
  Cloud,
  Smartphone,
  Globe,
  Network,
  Cpu,
  Users,
  UserCheck,
  FileCheck,
  AlertTriangle,
  Search,
  Zap,
  Lock,
  Eye,
  Target,
  BookOpen
} from "lucide-react"

export function   Navbarlogo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("VAPT")

  const serviceData: Record<string, { services: Array<{ name: string; icon: any; description: string }> }> = {
    VAPT: {
      services: [
        { name: "Web Application", icon: Globe, description: "Comprehensive web app security testing" },
        { name: "API", icon: Network, description: "REST & GraphQL API vulnerability assessment" },
        { name: "Mobile", icon: Smartphone, description: "iOS & Android app penetration testing" },
        { name: "Cloud", icon: Cloud, description: "AWS, Azure, GCP security evaluation" },
        { name: "Network", icon: Shield, description: "Infrastructure & network security testing" },
        { name: "IoT", icon: Cpu, description: "Internet of Things device security audit" },
      ],
    },
    "Cyber Resilience": {
      services: [
        { name: "Cyber Advisory & Consultancy", icon: Users, description: "Strategic cybersecurity guidance" },
        { name: "vDPO & vCISO", icon: FileCheck, description: "Virtual DPO and Virtual CISO leadership" },
        { name: "Regulatory Compliance", icon: AlertTriangle, description: "GDPR, DPDP, HIPAA, SOC2, ISO readiness" },
        { name: "Cyber Risk Assessment", icon: Search, description: "Comprehensive risk evaluation" },
        { name: "ISO 27001 Certification", icon: UserCheck, description: "ISMS design, implementation, audit support" },
        { name: "PCI DSS Compliance", icon: Shield, description: "Payment data protection and validation" },
      ],
    },
    "Digital Forensics": {
      services: [
        { name: "Incident Response", icon: Zap, description: "24/7 cyber incident response team" },
        { name: "Forensic Investigation", icon: Eye, description: "Digital evidence collection & analysis" },
      ],
    },
    "Trainings": {
      services: [
        { name: "Workshops", icon: Target, description: "Short, intensive sessions on specific cybersecurity topics" },
        { name: "Bootcamps", icon: Zap, description: "Immersive, multi-week programs for deep skill-building" },
        { name: "Internships", icon: Users, description: "Work on real security projects with industry guidance" },
        { name: "Corporate", icon: BookOpen, description: "Tailored programs for enterprise security teams" },
      ],
    },
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <nav className={`bg-white shadow-md sticky top-0 z-50 py-2 transition-all duration-300 `}>
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        {/* Left Logo */}
        <a href="#">
          <Image src="/images/hacfy.webp" alt="Left Logo" width={100} height={100} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center relative">
          <Link href="/" className="text-lg font-medium text-gray-700 hover:text-red-600">
            Home
          </Link>
          <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-red-600">
            About
          </Link>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)}>
            <button
              className="flex items-center gap-1 text-lg font-medium text-gray-700 hover:text-red-600"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 mt-4
                  bg-white border rounded-2xl
                  w-[1000px] max-h-[500px] overflow-y-auto
                  p-8 z-50 shadow-2xl transition-all duration-300 ease-out
                  backdrop-blur-sm border-gray-200"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                }}
              >
                <button
                  className="absolute top-6 right-6 text-gray-400 hover:text-red-600 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
                  onClick={() => setServicesOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-5 gap-8">
                  <div className="col-span-2 space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                      Service Categories
                    </h3>
                    {Object.keys(serviceData).map((category) => (
                      <button
                        key={category}
                        onMouseEnter={() => setSelectedCategory(category)}
                        className={`flex items-center justify-between w-full px-5 py-4 text-left rounded-xl border-2 transition-all duration-300 group ${
                          selectedCategory === category
                            ? "bg-gradient-to-r from-red-600 to-red-700 text-white border-red-600 shadow-lg transform scale-105"
                            : "bg-white hover:bg-gray-50 border-gray-200 hover:border-red-300 hover:shadow-md"
                        }`}
                      >
                        <span className="font-medium">{category}</span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            selectedCategory === category
                              ? "transform rotate-90"
                              : "group-hover:transform group-hover:translate-x-1"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <div className="col-span-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                      {selectedCategory} Services
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {serviceData[selectedCategory]?.services.map((service, idx) => {
                        const getServiceLink = (category: string, serviceName: string) => {
                          if (category === "VAPT") {
                            const slugMap: Record<string, string> = {
                              "Web Application": "/services/vapt/web-application-pentesting",
                              API: "/services/vapt/api-penetration-pentesting",
                              Mobile: "/services/vapt/mobile-application-pentesting",
                              Cloud: "/services/vapt/cloud-application-pentesting",
                              Network: "/services/vapt/network-penetration-pentesting",
                              IoT: "/services/vapt/iot-penetration-pentesting",
                            }
                            return slugMap[serviceName] || "/services/vapt"
                          }
                          if (category === "Cyber Resilience") {
                            const slugMap: Record<string, string> = {
                              "Cyber Advisory & Consultancy": "/services/cyber-resilience#advisory",
                              "vDPO & vCISO": "/services/cyber-resilience#leadership",
                              "Regulatory Compliance": "/services/cyber-resilience#regulatory-compliance",
                              "Cyber Risk Assessment": "/services/cyber-resilience#risk-assessment",
                              "ISO 27001 Certification": "/services/cyber-resilience#iso-27001",
                              "PCI DSS Compliance": "/services/cyber-resilience#pci-dss",
                            }
                            return slugMap[serviceName] || "/services/cyber-resilience"
                          }

// Corrected Digital Forensics slug mapping
                        if (category === "Digital Forensics") {
                              const slugMap: Record<string, string> = {
                                "Cloud Forensics": "/services/digital-forensics/cloud-forensics",
                                "Drone Forensics": "/services/digital-forensics/drone-forensics",
                                "Memory Forensics": "/services/digital-forensics/memory-forensics",
                                "Email Forensics": "/services/digital-forensics/email-forensics",
                                "IoT Forensics": "/services/digital-forensics/iot-forensics",
                                "Database Forensics": "/services/digital-forensics/database-forensics",
                                "Malware Analysis": "/services/digital-forensics/malware-analysis",
                              }

                              return slugMap[serviceName] || "/services/digital-forensics"
                        }

                         if (category === "Trainings") {
                              const slugMap: Record<string, string> = {
                                "Workshops": "/training#workshops",
                                "Bootcamps": "/training#bootcamps",
                                "Internships": "/training#internships",
                                "Corporate": "/training#corporate",
                              }

                              return slugMap[serviceName] || "/services/trainings"
                        }
                          return "#"
                        }

                        const IconComponent = service.icon

                        return (
                          <Link
                            key={idx}
                            href={getServiceLink(selectedCategory, service.name)}
                            className="group p-4 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-red-50 hover:to-white"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 p-2 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors duration-300">
                                <IconComponent className="w-5 h-5 text-red-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-gray-900 group-hover:text-red-700 transition-colors duration-300 mb-1">
                                  {service.name}
                                </h4>
                                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/blogs" className="text-lg font-medium text-gray-700 hover:text-red-600">
            Blogs
          </Link>
          <Link href="/contact" className="text-lg font-medium text-gray-700 hover:text-red-600">
            Contact
          </Link>
          <Link href="/careers" className="text-lg font-medium text-gray-700 hover:text-red-600">
            Careers
          </Link>
        </div>

        {/* Right Logo */}
        <Link href="https://cyberchetana.hacfy.com/" className="hidden md:block">
          <Image src="/images/logo.webp" alt="Right Logo" width={150} height={100} />
        </Link>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsSidebarOpen(true)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setIsSidebarOpen(false)} />
          <div className="relative bg-white w-64 h-full shadow-lg p-6">
            <button className="absolute top-4 right-4 text-gray-700" onClick={() => setIsSidebarOpen(false)}>
              <X className="w-6 h-6" />
            </button>
            {/* Optional mobile links */}
          </div>
        </div>
      )}
    </nav>
  )
}
