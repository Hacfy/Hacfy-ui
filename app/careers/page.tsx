"use client"

import { CheckCircle, Building2, Users, Target, Award, Sparkles } from "lucide-react"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import emailjs from "@emailjs/browser"
import { useRouter, useSearchParams } from "next/navigation"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    role: "",
    resume: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const router = useRouter()
  const searchParams = useSearchParams()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.experience.trim()) newErrors.experience = "Work experience is required"
    if (!formData.role.trim()) newErrors.role = "Role is required"
    if (!formData.resume) newErrors.resume = "Resume is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Helper: check if user is logged in via /api/me
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

  // Helper: persist form data to sessionStorage (including resume as base64)
  async function persistPendingApplication() {
    let resumeBase64 = ""
    if (formData.resume) {
      try {
        resumeBase64 = await toBase64(formData.resume)
      } catch (e) {
        console.error("[v0] Failed to encode resume to base64", e)
      }
    }
    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      experience: formData.experience,
      role: formData.role,
      resumeBase64,
      ts: Date.now(),
    }
    try {
      sessionStorage.setItem("pendingApplication", JSON.stringify(payload))
    } catch (e) {
      console.error("[v0] Failed to store pendingApplication", e)
    }
  }

  // Helper: load pending application
  function loadPendingApplication(): {
    fullName: string
    email: string
    phone: string
    experience: string
    role: string
    resumeBase64?: string
  } | null {
    try {
      const raw = sessionStorage.getItem("pendingApplication")
      if (!raw) return null
      const obj = JSON.parse(raw)
      return obj
    } catch {
      return null
    }
  }

  // Helper: clear pending application
  function clearPendingApplication() {
    try {
      sessionStorage.removeItem("pendingApplication")
    } catch {}
  }

  // On mount, if coming back from login/register with autoSubmit=1 and we are logged in, auto-submit
  useEffect(() => {
    const auto = searchParams.get("autoSubmit")
    if (auto !== "1") return
    ;(async () => {
      const isAuthed = await checkAuth()
      if (!isAuthed) return

      const saved = loadPendingApplication()
      if (!saved) return

      try {
        setIsSubmitting(true)
        // Use saved payload; we can call emailjs directly with base64 resume
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID1!,
          {
            fullName: saved.fullName,
            email: saved.email,
            phone: saved.phone,
            role: saved.role,
            experience: saved.experience,
            resume: saved.resumeBase64 || "",
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        )
        clearPendingApplication()
        setShowSuccess(true)
      } catch (error) {
        console.error("❌ Auto-submit failed:", error)
        alert("We could not submit your application automatically. Please try again.")
      } finally {
        setIsSubmitting(false)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      // Persist the filled data first so we can resume after auth if needed
      await persistPendingApplication()

      const isAuthed = await checkAuth()
      if (!isAuthed) {
        // Redirect to login with next back to /careers and autoSubmit=1
        const nextUrl = encodeURIComponent("/careers?autoSubmit=1")
        router.push(`/auth/login?next=${nextUrl}`)
        return
      }

      // If already authenticated, submit normally (using currently entered values)
      let resumeBase64 = ""
      if (formData.resume) {
        resumeBase64 = await toBase64(formData.resume)
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID1!,
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          experience: formData.experience,
          resume: resumeBase64,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      clearPendingApplication()
      setShowSuccess(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        role: "",
        resume: null,
      })
    } catch (error) {
      console.error("❌ Error sending application:", error)
      alert("Failed to send application. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type === "application/msword" ||
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setFormData((prev) => ({ ...prev, resume: file }))
      setErrors((prev) => ({ ...prev, resume: "" }))
    } else {
      setErrors((prev) => ({ ...prev, resume: "Only PDF/DOC/DOCX files are allowed" }))
    }
  }

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })

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
            <Button onClick={() => setShowSuccess(false)} className="bg-secondary hover:bg-secondary/90 text-white">
              Submit Another Application
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-background">
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
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight tracking-tight">
              Join Hacfy
            </h1>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 mb-4 sm:mb-6 font-bold px-2">
            Build Your Career With Us
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4">
            Be part of an innovative team that's shaping the future of technology. Where passion meets purpose, and
            dreams become reality.
          </p>
        </div>
      </div>

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

      <div className="py-12 sm:py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 space-x-0 sm:space-x-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text leading-[1.2]">Apply Now</h2>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
              Ready to start your journey? Fill out the form below and let's build something amazing together.
            </p>
          </div>

          <Card className="glass-effect shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-secondary/10">
            <CardHeader className="text-center pb-8 sm:pb-10 pt-8 sm:pt-10 px-4 sm:px-6">
              <CardTitle className="text-2xl sm:text-3xl font-black gradient-text">Join Our Team</CardTitle>
              <CardDescription className="text-lg sm:text-xl text-muted-foreground">
                Tell us about yourself and let's see if we're a perfect match
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 md:px-10 pb-8 sm:pb-10">
              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-3 sm:space-y-4">
                    <Label htmlFor="fullName" className="text-base sm:text-lg font-bold text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                      className={`h-12 sm:h-14 text-base sm:text-lg border-2 focus:border-secondary transition-all duration-300 rounded-xl ${errors.fullName ? "border-destructive" : "border-border"}`}
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
                      className={`h-12 sm:h-14 text-base sm:text-lg border-2 focus:border-secondary transition-all duration-300 rounded-xl ${errors.email ? "border-destructive" : "border-border"}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-destructive text-sm font-semibold">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-3 sm:space-y-4">
                    <Label htmlFor="phone" className="text-base sm:text-lg font-bold text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className={`h-12 sm:h-14 text-base sm:text-lg border-2 focus:border-secondary transition-all duration-300 rounded-xl ${errors.phone ? "border-destructive" : "border-border"}`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-destructive text-sm font-semibold">{errors.phone}</p>}
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <Label htmlFor="role" className="text-base sm:text-lg font-bold text-foreground">
                      Role Applying For *
                    </Label>
                    <Select
                      value={formData.role}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, role: value }))}
                    >
                      <SelectTrigger
                        className={`h-12 sm:h-14 text-base sm:text-lg border-2 focus:border-secondary transition-all duration-300 rounded-xl ${errors.role ? "border-destructive" : "border-border"}`}
                      >
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="frontend-developer">VAPT Analyst</SelectItem>
                        <SelectItem value="backend-developer">Cybersecurity Trainer</SelectItem>
                        <SelectItem value="fullstack-developer">Project Manager</SelectItem>
                        <SelectItem value="ui-ux-designer">Digital Marketing</SelectItem>
                        <SelectItem value="product-manager">Product Manager</SelectItem>
                        <SelectItem value="data-scientist">Data Scientist</SelectItem>
                        <SelectItem value="devops-engineer">DevOps Engineer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.role && <p className="text-destructive text-sm font-semibold">{errors.role}</p>}
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <Label htmlFor="resume" className="text-base sm:text-lg font-bold text-foreground">
                    Resume Upload (PDF/DOC) *
                  </Label>

                  <div
                    className={`flex items-center justify-between h-12 sm:h-14 w-full border-2 rounded-xl overflow-hidden cursor-pointer
      ${errors.resume ? "border-destructive" : "border-border"}`}
                  >
                    {/* Hidden real input */}
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {/* Fake input UI */}
                    <label
                      htmlFor="resume"
                      className="bg-secondary text-white px-4 py-2 h-full flex items-center font-semibold text-sm sm:text-base cursor-pointer hover:bg-secondary/90"
                    >
                      Choose File
                    </label>
                    <span className="px-3 text-sm sm:text-base text-muted-foreground truncate">
                      {formData.resume ? formData.resume.name : "No file chosen"}
                    </span>
                  </div>

                  {/* Error message */}
                  {errors.resume && <p className="text-destructive text-sm font-semibold">{errors.resume}</p>}
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <Label htmlFor="experience" className="text-base sm:text-lg font-bold text-foreground">
                    Work Experience *
                  </Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                    className={`min-h-32 sm:min-h-40 text-base sm:text-lg border-2 focus:border-secondary transition-all duration-300 resize-none rounded-xl ${errors.experience ? "border-destructive" : "border-border"}`}
                    placeholder="Tell us about your work experience, skills, achievements, and what makes you passionate about this role..."
                  />
                  {errors.experience && <p className="text-destructive text-sm font-semibold">{errors.experience}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 sm:h-16 text-lg sm:text-xl font-bold bg-secondary hover:bg-secondary/90 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="text-base sm:text-xl">Submitting Application...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-base sm:text-xl">Submit Application</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
