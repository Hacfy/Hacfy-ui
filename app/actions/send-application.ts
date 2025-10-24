"use server"

import emailjs from "@emailjs/browser"

interface ApplicationData {
  fullName: string
  email: string
  phone: string
  role: string
  experience: string
  resume: string
}

export async function sendApplication(data: ApplicationData) {
  try {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID1!,
      {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        role: data.role,
        experience: data.experience,
        resume: data.resume,
      },
    )

    return { success: true, messageId: result.text }
  } catch (error) {
    console.error("Error sending application:", error)
    return { success: false, error: "Failed to send application" }
  }
}
