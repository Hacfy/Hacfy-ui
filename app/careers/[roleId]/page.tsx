"use client"

import { CheckCircle, ArrowLeft, Sparkles } from "lucide-react"
import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter, useParams } from "next/navigation"
import Turnstile from "react-turnstile"
import Link from "next/link"
import { sendApplication } from "@/app/actions/send-application"

const ROLE_DETAILS: Record<string, { title: string; description: string; fullDescription: string }> = {
  "web-developer": {
    title: "Web Developer",
    description: "Build responsive and scalable web applications using modern technologies.",
    fullDescription: `As a Web Developer at Hacfy, you'll be responsible for creating and maintaining high-quality web applications. You'll work with modern technologies like React, Next.js, and TypeScript to build responsive, user-friendly interfaces. You'll collaborate with designers and backend engineers to deliver exceptional digital experiences.

Key Responsibilities:
• Develop and maintain web applications using modern frameworks
• Write clean, maintainable, and well-documented code
• Collaborate with cross-functional teams to deliver projects
• Participate in code reviews and continuous improvement
• Optimize applications for performance and user experience`,
  },
  "vapt-analyst": {
    title: "VAPT Analyst",
    description: "Conduct vulnerability assessments and penetration testing to secure systems.",
    fullDescription: `As a VAPT Analyst, you'll help protect our clients' systems by identifying and addressing security vulnerabilities. You'll conduct comprehensive vulnerability assessments and penetration tests, document findings, and provide recommendations for remediation.

Key Responsibilities:
• Conduct vulnerability assessments and penetration tests
• Identify and document security vulnerabilities
• Provide detailed reports and remediation recommendations
• Stay updated with latest security threats and tools
• Collaborate with clients to improve their security posture`,
  },
  "cybersecurity-trainer": {
    title: "Cybersecurity Trainer",
    description: "Educate and train professionals on cybersecurity best practices and techniques.",
    fullDescription: `As a Cybersecurity Trainer, you'll develop and deliver training programs to help professionals enhance their cybersecurity skills. You'll create engaging content, conduct workshops, and mentor individuals in security best practices.

Key Responsibilities:
• Develop comprehensive training curriculum
• Conduct workshops and training sessions
• Create engaging educational content
• Mentor and guide professionals in cybersecurity
• Stay current with industry trends and best practices`,
  },
  "project-manager": {
    title: "Project Manager",
    description: "Lead and manage projects from conception to successful delivery.",
    fullDescription: `As a Project Manager, you'll oversee projects from planning through completion, ensuring they're delivered on time and within budget. You'll coordinate teams, manage stakeholders, and drive projects to success.

Key Responsibilities:
• Plan and manage project timelines and budgets
• Coordinate cross-functional teams
• Manage stakeholder communications
• Identify and mitigate project risks
• Ensure project deliverables meet quality standards`,
  },
  "product-manager": {
    title: "Product Manager",
    description: "Drive product strategy and vision to create impactful solutions.",
    fullDescription: `As a Product Manager, you'll define product strategy, prioritize features, and work with engineering and design teams to bring products to market. You'll be responsible for the overall success and direction of our products.

Key Responsibilities:
• Define product vision and strategy
• Prioritize features and roadmap
• Conduct market research and competitive analysis
• Work with engineering and design teams
• Measure and analyze product metrics`,
  },
  "data-scientist": {
    title: "Data Scientist",
    description: "Analyze complex data to drive insights and inform business decisions.",
    fullDescription: `As a Data Scientist, you'll analyze complex datasets to uncover insights and build predictive models. You'll work with various tools and technologies to transform data into actionable intelligence.

Key Responsibilities:
• Analyze large datasets to identify patterns and insights
• Build and deploy machine learning models
• Create data visualizations and reports
• Collaborate with stakeholders to understand data needs
• Optimize data processes and pipelines`,
  },
  "devops-engineer": {
    title: "DevOps Engineer",
    description: "Build and maintain infrastructure for reliable and scalable systems.",
    fullDescription: `As a DevOps Engineer, you'll design, build, and maintain infrastructure that supports our applications. You'll work with cloud platforms, containerization, and automation to ensure reliable and scalable systems.

Key Responsibilities:
• Design and maintain cloud infrastructure
• Implement CI/CD pipelines
• Manage containerization and orchestration
• Monitor system performance and reliability
• Implement security best practices`,
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Create and execute marketing strategies to grow our brand presence.",
    fullDescription: `As a Digital Marketing professional, you'll develop and execute marketing campaigns across multiple channels. You'll work to increase brand awareness, drive engagement, and support business growth.

Key Responsibilities:
• Develop digital marketing strategies
• Create and manage marketing campaigns
• Analyze marketing metrics and ROI
• Manage social media and content
• Collaborate with sales and product teams`,
  },
}

export default function RoleDetailPage() {
  const params = useParams()
  const roleId = params.roleId as string
  const role = ROLE_DETAILS[roleId]

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    role: roleId,
    resume: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)

  const router = useRouter()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.resume.trim()) newErrors.resume = "Resume (Google Drive link) is required"
    if (!formData.experience.trim()) newErrors.experience = "Work experience is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function checkAuth(): Promise<boolean> {
    try {
      const res = await fetch("/api/me", { credentials: "include" })
      if (!res.ok) return false
      const data = await res.json().catch(() => null)
      return Boolean(data && data.user)
    } catch {
      return false
    }
  }

  async function persistPendingApplication() {
    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      experience: formData.experience,
      role: formData.role,
      resume: formData.resume,
      ts: Date.now(),
    }
    try {
      sessionStorage.setItem("pendingApplication", JSON.stringify(payload))
    } catch (e) {
      console.error("Failed to store pendingApplication", e)
    }
  }

  function loadPendingApplication() {
    try {
      const raw = sessionStorage.getItem("pendingApplication")
      if (!raw) return null
      return JSON.parse(raw)
    } catch {
      return null
    }
  }

  function clearPendingApplication() {
    try {
      sessionStorage.removeItem("pendingApplication")
    } catch {}
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const auto = searchParams.get("autoSubmit")
    if (auto !== "1") return
    ;(async () => {
      const isAuthed = await checkAuth()
      if (!isAuthed) return

      const saved = loadPendingApplication()
      if (!saved) return

      try {
        setIsSubmitting(true)
        const result = await sendApplication({
          fullName: saved.fullName,
          email: saved.email,
          phone: saved.phone,
          role: saved.role,
          experience: saved.experience,
          resume: saved.resume,
        })

        if (result.success) {
          clearPendingApplication()
          setShowSuccess(true)
        } else {
          alert("We could not submit your application automatically. Please try again.")
        }
      } catch (error) {
        console.error("Auto-submit failed:", error)
        alert("We could not submit your application automatically. Please try again.")
      } finally {
        setIsSubmitting(false)
      }
    })()
  }, [])

  const handleApplyNow = async () => {
    const isAuthed = await checkAuth()
    if (!isAuthed) {
      const nextUrl = encodeURIComponent(`/careers/${roleId}?autoSubmit=1`)
      router.push(`/auth/login?next=${nextUrl}`)
      return
    }
    setShowForm(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const result = await sendApplication({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        experience: formData.experience,
        resume: formData.resume,
      })

      if (result.success) {
        clearPendingApplication()
        setShowSuccess(true)
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          role: roleId,
          resume: "",
        })
        setCaptchaToken(null)
      } else {
        alert("Failed to send application. Please try again later.")
      }
    } catch (error) {
      console.error("Error sending application:", error)
      alert("Failed to send application. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!role) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-12 pb-12">
            <h2 className="text-2xl font-bold mb-4">Role Not Found</h2>
            <p className="text-muted-foreground mb-6">The role you're looking for doesn't exist.</p>
            <Link href="/careers">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">Back to Careers</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center shadow-2xl">
          <CardContent className="pt-12 pb-12">
            <div className="relative mb-8">
              <CheckCircle className="w-24 h-24 mx-auto text-secondary animate-bounce" />
              <Sparkles className="w-8 h-8 absolute -top-2 -right-2 text-secondary animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for applying to Hacfy. Our team will review your application and get back to you within 48
              hours.
            </p>
            <Link href="/careers">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">Back to Careers</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="py-6 px-4 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Careers</span>
          </Link>
        </div>
      </div>

      {/* Role Header */}
      <div className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-secondary via-secondary to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6">{role.title}</h1>
          <p className="text-lg sm:text-xl text-white/90">{role.description}</p>
        </div>
      </div>

      {/* Role Details */}
      <div className="py-12 sm:py-16 md:py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect shadow-2xl mb-8 sm:mb-10">
            <CardContent className="pt-8 sm:pt-10 pb-8 sm:pb-10 px-6 sm:px-8">
              <h2 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 text-foreground">About This Role</h2>
              <div className="prose prose-sm sm:prose max-w-none">
                {role.fullDescription.split("\n").map((line, index) => (
                  <p key={index} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {!showForm ? (
            <div className="text-center">
              <Button
                onClick={handleApplyNow}
                className="bg-secondary hover:bg-secondary/90 text-white h-12 sm:h-14 px-8 sm:px-12 text-base sm:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply Now
              </Button>
            </div>
          ) : (
            <Card className="glass-effect shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-secondary/10">
              <CardHeader className="text-center pb-8 sm:pb-10 pt-8 sm:pt-10 px-4 sm:px-6">
                <CardTitle className="text-2xl sm:text-3xl font-black gradient-text">Apply for {role.title}</CardTitle>
                <CardDescription className="text-lg sm:text-xl text-muted-foreground">
                  Tell us about yourself and let's see if we're a perfect match
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 md:px-10 pb-8 sm:pb-10">
                <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                  {/* Full Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-3 sm:space-y-4">
                      <Label htmlFor="fullName" className="text-base sm:text-lg font-bold text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                        className={`h-12 sm:h-14 text-base sm:text-lg border-2 focus:border-secondary transition-all duration-300 rounded-xl ${
                          errors.fullName ? "border-destructive" : "border-border"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <p className="text-destructive text-sm font-semibold">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <Label htmlFor="email" className="text-base sm:text-lg font-bold text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className={`h-12 sm:h-14 text-base sm:text-lg border-2 focus:border-secondary transition-all duration-300 rounded-xl ${
                          errors.email ? "border-destructive" : "border-border"
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && <p className="text-destructive text-sm font-semibold">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-3 sm:space-y-4">
                    <Label htmlFor="phone" className="text-base sm:text-lg font-bold text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className={`h-12 sm:h-14 text-base sm:text-lg border-2 focus:border-secondary transition-all duration-300 rounded-xl ${
                        errors.phone ? "border-destructive" : "border-border"
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-destructive text-sm font-semibold">{errors.phone}</p>}
                  </div>

                  {/* Resume Link */}
                  <div className="space-y-3 sm:space-y-4">
                    <Label htmlFor="resume" className="text-base sm:text-lg font-bold text-foreground">
                      Resume (Google Drive Link) *
                    </Label>
                    <Input
                      id="resume"
                      value={formData.resume}
                      onChange={(e) => setFormData((prev) => ({ ...prev, resume: e.target.value }))}
                      className={`h-12 sm:h-14 text-base sm:text-lg border-2 focus:border-secondary transition-all duration-300 rounded-xl ${
                        errors.resume ? "border-destructive" : "border-border"
                      }`}
                      placeholder="Paste your Google Drive link"
                    />
                    {errors.resume && <p className="text-destructive text-sm font-semibold">{errors.resume}</p>}
                  </div>

                  {/* Experience */}
                  <div className="space-y-3 sm:space-y-4">
                    <Label htmlFor="experience" className="text-base sm:text-lg font-bold text-foreground">
                      Work Experience *
                    </Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                      className={`min-h-[120px] sm:min-h-[160px] text-base sm:text-lg border-2 focus:border-secondary transition-all duration-300 rounded-xl ${
                        errors.experience ? "border-destructive" : "border-border"
                      }`}
                      placeholder="Tell us about your relevant work experience"
                    />
                    {errors.experience && <p className="text-destructive text-sm font-semibold">{errors.experience}</p>}
                  </div>

                  <div className="flex justify-center">
                    <Turnstile
                      sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onVerify={(token) => setCaptchaToken(token)}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4 sm:pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold bg-secondary hover:bg-secondary/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
