"use client"

import { Building2, Users, Target, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const AVAILABLE_ROLES = [
  {
    id: "web-developer",
    title: "Web Developer",
    description: "Build responsive and scalable web applications using modern technologies.",
    icon: "code",
  },
  {
    id: "vapt-analyst",
    title: "VAPT Analyst",
    description: "Conduct vulnerability assessments and penetration testing to secure systems.",
    icon: "shield",
  },
  {
    id: "cybersecurity-trainer",
    title: "Cybersecurity Trainer",
    description: "Educate and train professionals on cybersecurity best practices and techniques.",
    icon: "book",
  },
  {
    id: "project-manager",
    title: "Project Manager",
    description: "Lead and manage projects from conception to successful delivery.",
    icon: "briefcase",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Drive product strategy and vision to create impactful solutions.",
    icon: "target",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze complex data to drive insights and inform business decisions.",
    icon: "chart",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    description: "Build and maintain infrastructure for reliable and scalable systems.",
    icon: "server",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Create and execute marketing strategies to grow our brand presence.",
    icon: "megaphone",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-secondary via-secondary to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px sm:30px sm:30px",
            }}
          ></div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight tracking-tight">
            Join Hacfy
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 mb-4 sm:mb-6 font-bold px-2">
            Build Your Career With Us
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4">
            Be part of an innovative team that's shaping the future of technology. Where passion meets purpose, and
            dreams become reality.
          </p>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-12 sm:py-16 md:py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-4 sm:mb-6 px-2 leading-[1.4]">
              Why Choose Hacfy?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Join a company that values innovation, growth, and most importantly, you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Building2,
                title: "Innovation First",
                description: "Work with cutting-edge technologies and innovative solutions that shape the future",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Users,
                title: "Great Team",
                description:
                  "Collaborate with talented professionals from around the world in a supportive environment",
                color: "bg-green-50 text-green-600",
              },
              {
                icon: Target,
                title: "Growth Focus",
                description: "Continuous learning and career development opportunities with mentorship programs",
                color: "bg-purple-50 text-purple-600",
              },
              {
                icon: Award,
                title: "Recognition",
                description: "Your contributions are valued and rewarded with competitive compensation and benefits",
                color: "bg-orange-50 text-orange-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center glass-effect hover:shadow-2xl transition-all duration-500 hover-lift animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 sm:pt-10 pb-6 sm:pb-8 px-4 sm:px-6">
                  <div className="relative mb-6 sm:mb-8">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto ${item.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Available Roles Section */}
      <div className="py-12 sm:py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-4 sm:mb-6 px-2 leading-[1.4]">
              Available Positions
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Explore our open positions and find the perfect role for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {AVAILABLE_ROLES.map((role, index) => (
              <Card
                key={role.id}
                className="glass-effect hover:shadow-2xl transition-all duration-500 hover-lift animate-slide-up group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 sm:pt-10 pb-8 sm:pb-10 px-6 sm:px-8 h-full flex flex-col">
                  <div className="mb-6 sm:mb-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-secondary rounded-lg"></div>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-foreground group-hover:text-secondary transition-colors duration-300">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6 sm:mb-8 flex-grow">
                    {role.description}
                  </p>
                  <Link href={`/careers/${role.id}`} className="w-full">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-xl h-11 sm:h-12 font-bold flex items-center justify-center gap-2 group/btn">
                      View More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
