"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, X } from "lucide-react"

export function Navbarlogo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [clickedOpen, setClickedOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("DB Services")

  const serviceData: Record<string, string[]> = {
    VAPT: ["Web Application", "API", "Mobile", "Cloud", "Network","Iot"],
    "Cyber Resillience": [
      "Cyber Advisory & Consultancy",
      "vCISO",
      "vDPO",
      "Regulatory Compliance",
      "Cyber Risk Assessment",
    ],
    // "More Services": [
    //   "Cloud Services",
    //   "IT Services",
    //   "Technology Solutions",
    //   "Tech Support Services",
    // ],
  }

  // useEffect(() => {
  //   if (pathname !== "/") {
  //     setScrolled(true);
  //     return;
  //   }

  //   // const handleScroll = () => {
  //   //   const heroHeight = document.getElementById("hero")?.offsetHeight || 400;
  //   //   setScrolled(window.scrollY > heroHeight - 50);
  //   // };

  //   // window.addEventListener("scroll", handleScroll);
  //   // return () => window.removeEventListener("scroll", handleScroll);
  // }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setClickedOpen(false)
        setServicesOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleClick = () => {
    setClickedOpen(true)
    setServicesOpen(true)
  }

  const handleDoubleClick = () => {
    setClickedOpen(false)
    setServicesOpen(false)
  }

  const handleOutsideClick = () => {
    setClickedOpen(false)
    setServicesOpen(false)
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
          <a href="/" className="text-lg font-medium text-gray-700 hover:text-red-600">
            Home
          </a>
          <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-red-600">
            About
          </Link>
           <div className="relative">
            <button
              className="flex items-center gap-1 text-lg font-medium text-gray-700 hover:text-red-600"
              onClick={handleClick}
              onDoubleClick={handleDoubleClick}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 translate-y-4 bg-white border rounded-2xl w-[750px] p-10 z-50 shadow-xl">
                {clickedOpen && (
                  <div className="text-right mb-4">
                    <button onClick={handleOutsideClick}>
                      <X className="text-gray-500 hover:text-red-500 w-5 h-5" />
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-4 gap-8">
                  {/* Left: Category Buttons */}
                  <div className="col-span-1 space-y-2">
                    {Object.keys(serviceData).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`flex items-center justify-between w-full px-4 py-2 text-left rounded-md border hover:bg-secondary/20 transition ${
                          selectedCategory === category ? "bg-secondary text-white" : "bg-white"
                        }`}
                      >
                        {category}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ))}
                  </div>

                  {/* Right: Corresponding Services */}
                  <div className="col-span-3 grid grid-cols-2 gap-4">
                    {serviceData[selectedCategory]?.map((service, idx) => {
                      const getServiceLink = (category: string, service: string) => {
                        if (category === "VAPT") {
                          const slugMap: Record<string, string> = {
                            "Web Application": "/services/vapt/web-application-pentesting",
                            API: "/services/vapt/api-penetration-pentesting",
                            Mobile: "/services/vapt/mobile-application-pentesting",
                            Cloud: "/services/vapt/cloud-application-pentesting",
                            Network: "/services/vapt/network-penetration-pentesting",
                              Iot: "/services/vapt/iot-penetration-pentesting",
                          }
                          return slugMap[service] || "/services/vapt"
                        } else if (category === "Cyber Resillience") {
                          const slugMap: Record<string, string> = {
                            "Cyber Advisory & Consultancy": "/services/cyber-resilience/cyber-advisory-consultancy",
                            vCISO: "/services/cyber-resilience/virtual-ciso",
                            vDPO: "/services/cyber-resilience/virtual-dpo",
                            "Regulatory Compliance": "/services/cyber-resilience/regulatory-compliance",
                            "Cyber Risk Assessment": "/services/cyber-resilience/cyber-risk-assessment",
                          }
                          return slugMap[service] || "/services/cyber-resilience"
                        }
                        return "#"
                      }

                      return (
                        <Link
                          key={idx}
                          href={getServiceLink(selectedCategory, service)}
                          className="text-sm hover:underline cursor-pointer hover:text-red-600 transition-colors"
                          onClick={()=>setServicesOpen(false)}
                        >
                          {service}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/blogs" className="text-lg font-medium text-gray-700 hover:text-red-600">
            Blogs
          </Link>
          <Link href="/careers" className="text-lg font-medium text-gray-700 hover:text-red-600">
            Careers
          </Link>
          <a href="/contact" className="text-lg font-medium text-gray-700 hover:text-red-600">
            Contact
          </a>

          {/* Services */}
         
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
