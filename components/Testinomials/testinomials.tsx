"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"
import { useState } from "react"

interface Testimonial {
  text: string
  name: string
  role: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    text: "HacFy's cybersecurity training has been highly valuable for our students at Sri Medha College. The practical, industry-focused sessions helped them develop essential skills to tackle real-world security challenges. We appreciate HacFy's dedication to quality cybersecurity education.",
    name: "Ram kiran",
    role: "Founder of Shree Medha College",
    image: "./sriram.jpeg",
  },
  {
    text: "Partnering with HacFy for Vulnerability Assessment and Penetration Testing has greatly enhanced our cybersecurity framework. Their thorough and methodical approach uncovered hidden security gaps that could have been exploited. The team demonstrated exceptional technical expertise and provided detailed, easy-to-understand reports along with actionable remediation steps. Their quick support and strategic guidance allowed us to secure our systems efficiently and effectively.",
    name: "Niels Hoekman",
    role: "CEO of CISA",
    image: "./Niels Hoekman.jpeg",
  },
  {
    text: "HacFy's VAPT (Vulnerability Assessment and Penetration Testing) service provided us with a thorough and detailed analysis of our systems. Their team identified critical vulnerabilities and offered clear, actionable recommendations to improve our security posture. We highly appreciate HacFy's professionalism and expertise in helping us enhance our cybersecurity defenses.",
    name: "Kiran kashyap",
    role: "Marketing Head & Company Relationship Manager at Vithsutra Technologies",
    image: "./Kiran kashyap.jpeg",
  },
  {
    text: "HacFy's 5-day cybersecurity bootcamp for Jain College was highly effective and well-organized. The training provided practical, industry-relevant knowledge, giving our students valuable hands-on experience in identifying and mitigating security threats. We appreciate HacFy's professionalism and commitment to quality education.",
    name: "Mallikarjun Kulloli",
    role: "Managing Director of JIEF, Belgavi",
    image: "/images/malli.jpg",
  },
]

export default function TestimonialSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-white">
      {/* Subtle radial background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 to-white"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(218,21,21,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(218,21,21,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6 backdrop-blur-sm border border-secondary/20">
            <span className="text-sm font-medium text-[rgba(218,21,21,0.952)]">Client Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-black to-[rgba(218,21,21,0.952)] bg-clip-text text-transparent mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders and cybersecurity professionals worldwide for our innovative solutions and
            exceptional service
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 animate-scroll"
            style={{
              width: `${duplicatedTestimonials.length * 400}px`,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer flex-shrink-0 w-96"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(218,21,21,0.15)] to-[rgba(218,21,21,0.05)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[1px] bg-white/95 backdrop-blur-xl rounded-lg"></div>

                <CardContent className="relative p-8 z-10">
                  {/* Quote bubble */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-secondary/20 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-[rgba(218,21,21,0.952)]" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-lg text-gray-800 mb-8 leading-relaxed font-medium relative">
                    {testimonial.text}
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-secondary to-red-700 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500 ${
                          hoveredCard === index ? "opacity-60" : ""
                        }`}
                      ></div>
                      <Avatar className="relative w-16 h-16 ring-2 ring-white shadow-lg">
                        <AvatarImage
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-secondary text-white font-bold text-lg">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-secondary/10 rounded-full backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex -space-x-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-red-700 rounded-full blur-sm opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  ></div>
                  <Avatar
                    className="relative w-10 h-10 border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="text-xs bg-secondary text-white font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-bold text-[rgba(218,21,21,0.952)]">Trusted by 500+ professionals</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
