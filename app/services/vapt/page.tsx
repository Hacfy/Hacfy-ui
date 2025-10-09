import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Globe, Smartphone, Cloud, Network, Code, Thermometer } from "lucide-react"
import CTA from "@/components/CTA/cta"
import WhitePaper from "@/components/CTA/white"

export default function VAPTPage() {
  const vaptServices = [
    {
      title: "Web Application Pentesting",
      description:
        "Comprehensive security assessment of web applications to identify vulnerabilities in code, design, and deployment.",
      icon: Globe,
      slug: "web-application-pentesting",
    },
    {
      title: "API Penetration Testing",
      description:
        "Specialized testing for REST, SOAP, GraphQL APIs to uncover authentication flaws and data exposure risks.",
      icon: Code,
      slug: "api-penetration-pentesting",
    },
    {
      title: "Mobile Application Testing",
      description:
        "Security assessment for iOS and Android apps covering client-side security and server-side interactions.",
      icon: Smartphone,
      slug: "mobile-application-pentesting",
    },
    {
      title: "Cloud Security Testing",
      description: "Evaluation of cloud infrastructure security across AWS, Azure, Google Cloud platforms.",
      icon: Cloud,
      slug: "cloud-application-pentesting",
    },
    {
      title: "Network Penetration Testing",
      description:
        "Assessment of network infrastructure to identify vulnerabilities in devices, servers, and security controls.",
      icon: Network,
      slug: "network-penetration-pentesting",
    },
    {
      title: "IOT Penetration Testing",
      description:
        "Assessment of IOT infrastructure to identify vulnerabilities in devices, servers, and security controls.",
      icon: Thermometer,
      slug: "iot-penetration-pentesting",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
           
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">VAPT Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Vulnerability Assessment and Penetration Testing to identify and exploit security weaknesses before
              attackers do. Our comprehensive VAPT services protect your digital assets across all platforms.
            </p>
          </div>
        </div>
      </section>``

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vaptServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-secondary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <Link
                      href={`/services/vapt/${service.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
                    >
                      Learn More
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <WhitePaper />

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Secure Your Applications?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get comprehensive VAPT services tailored to your specific needs. Our experts will help identify
            vulnerabilities before they become threats.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-secondary text-white font-bold text-lg rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
