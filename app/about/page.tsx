"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRightCircle, Shield, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-red-50/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-secondary mb-8 tracking-tight">
            About <span className="text-secondary">HacFy</span>
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <CardDescription className="text-lg md:text-xl font-medium text-muted-foreground text-balance leading-relaxed">
                HacFy is a full-spectrum cybersecurity company dedicated to building safer digital ecosystems through
                innovative technologies, expert consulting, and comprehensive security solutions.
                <br />
                <br />
                From proactive threat detection and penetration testing to advanced vulnerability assessments and
                incident response, we provide end-to-end services tailored to the needs of individuals, institutions,
                and enterprises.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">VISION</h2>
          </div>
          <Card className="relative overflow-hidden bg-secondary/5 border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent"></div>
            <CardContent className="relative p-8 md:p-12">
              <p className="text-lg md:text-2xl font-semibold text-foreground text-balance leading-relaxed flex text-center">
                To become the most trusted whitehat force in cybersecurity, delivering innovative solutions, expert
                consultancy, and impactful services that empower individuals and enterprises to thrive securely in a
                connected world.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">MISSION</h2>
          </div>
          <Card className="relative overflow-hidden bg-secondary/5 border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-l from-secondary/5 to-transparent"></div>
            <CardContent className="relative p-8 md:p-12">
              <p className="text-lg md:text-2xl font-semibold text-foreground text-balance leading-relaxed flex text-center">
                As a trusted partner in cybersecurity, we go beyond protection empowering our clients with strategic
                insights, industry-best practices, and real-time solutions powered by AI, IoT, and automation. At HacFy,
                we're not just solving today's challenges we're building tomorrow's security foundations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CSR Initiative Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-2">HACFY CYBER CHETANA</h2>
            <h3 className="text-xl md:text-2xl font-bold text-secondary">Your Digital Safety, Our Priority</h3>
          </div>

          <Card className="relative overflow-hidden bg-card shadow-2xl border-border/50">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10"></div>
            <CardContent className="relative p-8 md:p-12 text-center">
              <p className="text-xl md:text-3xl font-semibold text-foreground text-balance leading-relaxed mb-8">
                HacFy Cyber Chetana is our flagship Corporate Social Responsibility (CSR) initiative aimed at creating a
                safer digital future for all.
              </p>

              <p className="text-lg md:text-xl text-secondary font-bold mb-8">
                Focused on Karnataka, this mission-driven campaign is designed to:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-background/50 p-6 rounded-lg border border-border/50">
                  <h4 className="font-bold text-foreground mb-3">Youth Empowerment</h4>
                  <p className="text-muted-foreground">
                    Empower young minds with cybersecurity knowledge and career guidance.
                  </p>
                </div>
                <div className="bg-background/50 p-6 rounded-lg border border-border/50">
                  <h4 className="font-bold text-foreground mb-3">Women's Safety</h4>
                  <p className="text-muted-foreground">
                    Educate and protect women from digital abuse and online threats.
                  </p>
                </div>
                <div className="bg-background/50 p-6 rounded-lg border border-border/50">
                  <h4 className="font-bold text-foreground mb-3">Digital Literacy</h4>
                  <p className="text-muted-foreground">
                    Build grassroots digital literacy through workshops and outreach programs.
                  </p>
                </div>
              </div>

              <Link href="https://cyberchetana.hacfy.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Know More <ArrowRightCircle className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">Ready to Secure Your Digital Future?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust HacFy for their cybersecurity needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Get In Touch
              </Button>
            </Link>
            <Link href="/blogs">
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white font-bold text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Read Our Blogs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
