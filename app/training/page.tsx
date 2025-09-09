"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Target, Users, Award, BookOpen, Zap, Star,Quote,Briefcase } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

export default function TrainingsPage() {
    const testimonials = [
   {
    text: "The cybersecurity training gave me real-world skills that I use in my current job every day.",
    name: "Anjali",
    role: "Shree Medha College",
    image: "./sriram.jpeg",
  },
  {
    text: "I cracked my first cybersecurity job interview thanks to HacFy’s career-focused curriculum.",
    name: "Rahul",
    role: "Vtu Belgavi",
    image: "./Niels Hoekman.jpeg",
  },
  {
    text: "The mentors were amazing and always available to guide me through tough concepts.",
    name: "Sneha",
    role: "Shree Medha College",
    image: "./Kiran kashyap.jpeg",
  },
  ]

    const [hoveredCard, setHoveredCard] = useState<number | null>(null)
    const router = useRouter()
    const [selectedTab, setSelectedTab] = useState("workshops")
    

 const programsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        setSelectedTab(hash)

        // scroll to Programs section smoothly
        if (programsRef.current) {
          programsRef.current.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    handleHashChange() // run on initial load
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])
  const handleTabChange = (value: string) => {
    setSelectedTab(value)
    window.location.hash = value
    
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-100 to-white">
        <div className="absolute inset-0 bg-[url('/cyber-security-network-pattern.jpg')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Master <span className="text-[rgba(218,21,21,0.952)]">Cybersecurity</span> with HacFy Trainings
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 text-pretty">From Fundamentals to Advanced Hacking</p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-pretty">
              Practical, industry-aligned programs designed to transform you into a skilled cyber defender.
            </p>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
              {[
                { icon: <Target className="w-6 h-6 text-white" />, text: "Hands-on Workshops" },
                { icon: <Zap className="w-6 h-6 text-white" />, text: "Real-time Internships" },
                { icon: <Users className="w-6 h-6 text-white" />, text: "Corporate Training" },
                { icon: <BookOpen className="w-6 h-6 text-white" />, text: "Expert Mentorship" },
                { icon: <Award className="w-6 h-6 text-white" />, text: "Industry Certifications" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-[rgba(218,21,21,0.952)] rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-sm text-center">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => router.push("/contact")}
                className="bg-[rgba(218,21,21,0.952)] hover:bg-[rgba(218,21,21,0.8)] text-white px-8 py-3"
              >
                Enroll Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-3 bg-transparent"
              >
                Explore Trainings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why HacFy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-[rgba(218,21,21,0.952)]">HacFy</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-pretty">
              Cybersecurity cannot be learned from theory alone. At HacFy, we go beyond classrooms and presentations by
              offering immersive, hands-on experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-12 h-12 text-[rgba(218,21,21,0.952)] mb-4" />, title: "Industry-Aligned Curriculum", desc: "Updated with latest threats and industry best practices" },
              { icon: <Target className="w-12 h-12 text-[rgba(218,21,21,0.952)] mb-4" />, title: "Scenario-Based Labs", desc: "Simulating real cyberattacks for practical experience" },
              { icon: <Users className="w-12 h-12 text-[rgba(218,21,21,0.952)] mb-4" />, title: "Expert Mentorship", desc: "Learn from ethical hackers and security analysts" },
              { icon: <Award className="w-12 h-12 text-[rgba(218,21,21,0.952)] mb-4" />, title: "Career-Focused Approach", desc: "Placement opportunities and career guidance" },
              { icon: <Zap className="w-12 h-12 text-[rgba(218,21,21,0.952)] mb-4" />, title: "Flexible Formats", desc: "Workshops, Bootcamps, Internships, Corporate modules" },
            ].map((item, idx) => (
              <Card key={idx} className="bg-white border-gray-200 hover:border-[rgba(218,21,21,0.952)] transition-colors">
                <CardHeader>
                  {item.icon}
                  <CardTitle className="text-black">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={programsRef} className="py-20 bg-white" >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-[rgba(218,21,21,0.952)]">Programs</span>
          </h2>
           <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-100 rounded-xl">
        <TabsTrigger value="workshops">Workshops</TabsTrigger>
        <TabsTrigger value="bootcamps">Bootcamps</TabsTrigger>
        <TabsTrigger value="internships">Internships</TabsTrigger>
        <TabsTrigger value="corporate">Corporate</TabsTrigger>
      </TabsList>

      <TabsContent value="workshops" className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Hands-On Workshops</CardTitle>
            <CardDescription>
              Short, intensive sessions on specific cybersecurity topics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Web Application Security</li>
              <li>Network Security Fundamentals</li>
              <li>Social Engineering Tactics</li>
              <li>Malware Analysis Basics</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="bootcamps" className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Bootcamps</CardTitle>
            <CardDescription>
              Immersive, multi-week programs for deep skill-building
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Certified Ethical Hacking Bootcamp</li>
              <li>Red Team vs Blue Team Scenarios</li>
              <li>Advanced Penetration Testing</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="internships" className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Real-time Internships</CardTitle>
            <CardDescription>
              Work on real security projects with industry guidance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Vulnerability Assessment</li>
              <li>Security Operations Center (SOC)</li>
              <li>Incident Response Drills</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="corporate" className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Corporate Training</CardTitle>
            <CardDescription>
              Tailored programs for enterprise security teams
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Phishing Awareness</li>
              <li>Compliance and Governance</li>
              <li>Incident Handling Protocols</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

        </div>
      </section>

      {/* Curriculum Section */}
     <section className="py-20 bg-white border-t border-[rgba(218,21,21,0.2)]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
        Curriculum{" "}
        <span className=" text-[rgba(218,21,21,0.952)] px-2 py-1 rounded">
          Highlights
        </span>
      </h2>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-[rgba(218,21,21,0.952)]">
            <th className="px-6 py-4 text-left text-white font-semibold">
              Program
            </th>
            <th className="px-6 py-4 text-left text-white font-semibold">
              Duration
            </th>
            <th className="px-6 py-4 text-left text-white font-semibold">
              Key Learning Areas
            </th>
            <th className="px-6 py-4 text-left text-white font-semibold">
              Outcome
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              program: "Workshops",
              duration: "2–5 Days",
              learning: "Ethical hacking, OWASP Top 10, exploitation basics, CTF",
              outcome: "Foundational knowledge & practical skills",
            },
            {
              program: "Bootcamp",
              duration: "1 Week",
              learning:
                "Cybersecurity essentials, labs, live hacking simulations",
              outcome: "Strong core foundation",
            },
            {
              program: "CyberSprint",
              duration: "45 Days",
              learning:
                "Networking, Recon, Web & System Pentesting, Privilege Escalation",
              outcome: "End-to-end pentesting expertise",
            },
            {
              program: "Internship",
              duration: "6 Months",
              learning:
                "Real-time projects, assessments, CTFs, reporting tasks",
              outcome: "Job-ready experience + certification",
            },
            {
              program: "Corporate",
              duration: "Custom",
              learning: "Awareness, SOC, incident response, insider threats",
              outcome: "Resilient workforce against modern threats",
            },
          ].map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-200 hover:bg-gray-50 transition"
            >
              <td className="px-6 py-4 text-[rgba(218,21,21,0.952)] font-medium">
                {row.program}
              </td>
              <td className="px-6 py-4 text-gray-700">{row.duration}</td>
              <td className="px-6 py-4 text-gray-700">{row.learning}</td>
              <td className="px-6 py-4 text-gray-700">{row.outcome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>



      {/* Career Outcomes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Career <span className="text-[rgba(218,21,21,0.952)]">Outcomes</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-pretty">
              Our alumni have secured positions in top organizations as cybersecurity analysts, penetration testers, and
              SOC experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: "Cybersecurity Analyst", companies: "Infosys, Wipro, Accenture" },
              { role: "Penetration Tester", companies: "EY, KPMG, Deloitte" },
              { role: "SOC Analyst", companies: "IBM, TCS, Capgemini" },
            ].map((item, idx) => (
 <Card
  key={idx}
  className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
>
  <CardHeader className="flex flex-col items-center text-center space-y-3">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50">
      <Briefcase className="w-6 h-6 text-[rgba(218,21,21,0.9)]" />
    </div>
    <CardTitle className="text-lg font-semibold text-gray-900">
      {item.role}
    </CardTitle>
  </CardHeader>

  <CardContent className="flex flex-col items-center text-center space-y-2 pb-6">
    <p className="text-sm text-gray-500">Placed at</p>
    <span className="px-4 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
      {item.companies}
    </span>
  </CardContent>
</Card>

            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
    <section className="py-20 px-4 relative overflow-hidden bg-white">
         {/* Subtle radial background */}
         <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 to-white"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(218,21,21,0.05),transparent_50%)]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(218,21,21,0.05),transparent_50%)]"></div>
   
         <div className="max-w-7xl mx-auto relative z-10">
           {/* Header */}
           <div className="text-center mb-20">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6 backdrop-blur-sm border border-secondary/20">
               <span className="text-sm font-medium text-[rgba(218,21,21,0.952)]">Student Success Stories</span>
             </div>
             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-black to-[rgba(218,21,21,0.952)] bg-clip-text text-transparent mb-6 leading-tight">
               What Our Students Say
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
             Empowering the next generation of cybersecurity experts through hands-on training and real-world learning.
             </p>
           </div>
   
           {/* Testimonial Cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {testimonials.map((testimonial, index) => (
               <Card
                 key={index}
                 className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer"
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
                     <span className="text-4xl text-secondary/30 absolute -top-2 -left-1 font-serif"></span>
                     {testimonial.text}
                     {/* <span className="text-4xl text-secondary/30 font-serif"></span> */}
                   </blockquote>
   
                   {/* Author */}
                   <div className="flex items-center gap-4">
                     <div className="relative">
                       <div
                         className={`absolute inset-0 bg-gradient-to-r from-secondary to-red-700 rounded-full blur-sm transition-opacity duration-300 ${
                           hoveredCard === index ? "opacity-60" : "opacity-0"
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
                 <span className="text-lg font-bold text-[rgba(218,21,21,0.952)]">
                   Trusted by 1000+ students
                 </span>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                ["Do I need prior experience?", "No, we offer beginner-friendly modules that start from basics."],
                ["Are the programs online or offline?", "We offer both formats depending on the program."],
                ["Will I get a certificate?", "Yes, industry-recognized certifications are provided."],
              ].map(([q, a], idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-black">{q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Cybersecurity Journey?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of learners who have transformed their careers with HacFy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[rgba(218,21,21,0.952)] hover:bg-[rgba(218,21,21,0.8)] text-white px-8 py-3"
            >
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
