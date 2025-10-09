"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import emailjs from "emailjs-com"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import Turnstile from "react-turnstile" 

export default function ContactPage() {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
  category: "Services", // Training or Services
  option: "",   // Selected dropdown option
})

// Radio + Dropdown Options
const trainingOptions = ["Bootcamps", "Workshops", "Certifications", "Corporate Training"]
const serviceOptions = ["Penetration Testing", "Cloud Security", "Incident Response", "Compliance Audits"]

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
    const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          ...formData,
          date: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        category:"",
        option:""
      })
    } catch (error) {
      console.error("EmailJS error:", error)
      alert("Something went wrong while sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-secondary hover:bg-secondary/90">
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(218,21,21,0.1)_1px,transparent_0)] bg-[length:20px_20px]" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Get in <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about cybersecurity? Need expert consultation? We're here to help protect your digital
            assets.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Reach out to our cybersecurity experts for consultation, support, or partnership opportunities.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-border/50 hover:border-secondary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">info@hacfy.com</p>
                        <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:border-secondary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground">+91 8660767853</p>
                        <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9AM-6PM IST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:border-secondary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Office</h3>
                        <p className="text-muted-foreground">Hacfy Office, 2nd Floor Alva's Technology Centre, Mijar-Moodubidire, DK 574225.</p>
                
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:border-secondary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Category Selection */}
                    <div className="space-y-4">
                      {/* <label className="block text-sm font-medium text-foreground mb-2">
                        What are you interested in? *
                      </label> */}
                      <div className="flex space-x-6">
                        {/* <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="category"
                            value="Training"
                            checked={formData.category === "Training"}
                            onChange={handleInputChange}
                            className="accent-secondary"
                          />
                          <span>Training</span>
                        </label> */}
                        {/* <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="category"
                            value="Services"
                            checked={formData.category === "Services"}
                            onChange={handleInputChange}
                            className="accent-secondary"
                          />
                          <span>Services</span>
                        </label> */}
                      </div>
                      {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                    </div>

                    {/* Dropdown */}
                    {formData.category && (
                      <div className="mt-4">
                        <label htmlFor="option" className="block text-sm font-medium text-foreground mb-2">
                          Select {formData.category} *
                        </label>
                        <select
                          id="option"
                          name="option"
                          value={formData.option}
                          //@ts-ignore
                          onChange={handleInputChange}
                          className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary ${
                            errors.option ? "border-red-500" : "border-border"
                          }`}
                        >
                          <option value="">-- Choose an option --</option>
                          {(formData.category === "Training" ? trainingOptions : serviceOptions).map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.option && <p className="text-red-500 text-sm mt-1">{errors.option}</p>}
                      </div>
                    )}

                    {/* Other Inputs */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`${errors.name ? "border-red-500" : ""}`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`${errors.email ? "border-red-500" : ""}`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`${errors.phone ? "border-red-500" : ""}`}
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company (Optional)
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`${errors.subject ? "border-red-500" : ""}`}
                        placeholder="How can we help you?"
                      />
                      {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`${errors.message ? "border-red-500" : ""}`}
                        placeholder="Tell us about your cybersecurity needs..."
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {/* ✅ Cloudflare Turnstile CAPTCHA */}
                    <Turnstile
                      sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onVerify={(token) => setCaptchaToken(token)}
                      className="flex justify-center my-4"
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
