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
  BookOpen,
  Menu,
} from "lucide-react"

export function Navbarlogo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileSelectedCategory, setMobileSelectedCategory] = useState("VAPT")
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
        { name: "Forensic Investigation", icon: Eye, description: "Digital evidence collection & analysis" },
        { name: "Malware Analysis", icon: Lock, description: "Malware analysis and reverse engineering" },
      ],
    },
    Trainings: {
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
        setMobileServicesOpen(false)
        setIsSidebarOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const closeMobileMenu = () => {
    setIsSidebarOpen(false)
    setMobileServicesOpen(false)
  }

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
    if (category === "Digital Forensics") {
      const slugMap: Record<string, string> = {
        "Malware Analysis": "/services/digital-forensics#malware-analysis",
        "Forensic Investigation": "/services/digital-forensics#forensic-investigation",
      }
      return slugMap[serviceName] || "/services/digital-forensics"
    }
    if (category === "Trainings") {
      const slugMap: Record<string, string> = {
        Workshops: "/training#workshops",
        Bootcamps: "/training#bootcamps",
        Internships: "/training#internships",
        Corporate: "/training#corporate",
      }
      return slugMap[serviceName] || "/services/trainings"
    }
    return "#"
  }

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

        <button
          className="md:hidden text-gray-700 hover:text-red-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="relative bg-white w-80 h-full shadow-2xl overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Image src="/images/hacfy.webp" alt="Logo" width={80} height={80} />
              <button
                className="text-gray-400 hover:text-red-600 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="p-6 space-y-2">
              <Link
                href="/"
                className="flex items-center px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              <Link
                href="/about"
                className="flex items-center px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium"
                onClick={closeMobileMenu}
              >
                About
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="space-y-2">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="ml-4 space-y-2 border-l-2 border-red-100 pl-4">
                    {Object.keys(serviceData).map((category) => (
                      <div key={category} className="space-y-2">
                        <button
                          className={`flex items-center justify-between w-full px-3 py-2 text-left rounded-lg transition-all duration-200 ${
                            mobileSelectedCategory === category
                              ? "bg-red-600 text-white"
                              : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                          }`}
                          onClick={() => setMobileSelectedCategory(mobileSelectedCategory === category ? "" : category)}
                        >
                          <span className="font-medium text-sm">{category}</span>
                          <ChevronRight
                            className={`w-3 h-3 transition-transform duration-300 ${
                              mobileSelectedCategory === category ? "rotate-90" : ""
                            }`}
                          />
                        </button>

                        {mobileSelectedCategory === category && (
                          <div className="ml-4 space-y-1 border-l border-red-200 pl-3">
                            {serviceData[category].services.map((service, idx) => {
                              const IconComponent = service.icon
                              return (
                                <Link
                                  key={idx}
                                  href={getServiceLink(category, service.name)}
                                  className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                                  onClick={closeMobileMenu}
                                >
                                  <div className="flex-shrink-0 p-1 rounded bg-red-100 group-hover:bg-red-200 transition-colors duration-200">
                                    <IconComponent className="w-3 h-3 text-red-600" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium">{service.name}</div>
                                    <div className="text-xs text-gray-500 truncate">{service.description}</div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blogs"
                className="flex items-center px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium"
                onClick={closeMobileMenu}
              >
                Blogs
              </Link>

              <Link
                href="/contact"
                className="flex items-center px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>

              <Link
                href="/careers"
                className="flex items-center px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium"
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
            </div>

            {/* Mobile Footer Logo */}
            <div className="p-6 border-t border-gray-200 mt-auto">
              <Link href="https://cyberchetana.hacfy.com/" onClick={closeMobileMenu}>
                <Image src="/images/logo.webp" alt="Right Logo" width={120} height={80} className="mx-auto" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
