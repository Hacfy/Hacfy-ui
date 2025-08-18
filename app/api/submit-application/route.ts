import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const fullName = formData.get("fullName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const experience = formData.get("experience") as string
    const role = formData.get("role") as string
    const resume = formData.get("resume") as File

    // Here you would typically:
    // 1. Save the resume file to cloud storage (AWS S3, Vercel Blob, etc.)
    // 2. Send an email with the application details to info@hacfy.com
    // 3. Save application data to a database

    // For now, we'll just log the data and return success
    console.log("New job application received:", {
      fullName,
      email,
      phone,
      role,
      experience: experience.substring(0, 100) + "...",
      resumeSize: resume?.size,
      resumeName: resume?.name,
    })

    // Simulate email sending (you would integrate with a service like Resend, SendGrid, etc.)
    const emailContent = `
      New Job Application for Hacfy
      
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Role: ${role}
      
      Work Experience:
      ${experience}
      
      Resume: ${resume?.name} (${resume?.size} bytes)
    `

    // TODO: Implement actual email sending to info@hacfy.com
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'careers@hacfy.com',
    //   to: 'info@hacfy.com',
    //   subject: `New Job Application - ${role}`,
    //   text: emailContent,
    //   attachments: resume ? [{ filename: resume.name, content: await resume.arrayBuffer() }] : []
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing application:", error)
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
  }
}
