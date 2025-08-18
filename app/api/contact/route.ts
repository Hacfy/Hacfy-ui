import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // In a real application, you would send this data to your email service
    // For now, we'll just log it and return success
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Here you would typically:
    // 1. Send an email to info@hacfy.com with the form data
    // 2. Send a confirmation email to the user
    // 3. Store the submission in a database

    // Example email content that would be sent to info@hacfy.com:
    const emailContent = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company || "Not provided"}
      Subject: ${subject}
      
      Message:
      ${message}
      
      Submitted at: ${new Date().toLocaleString()}
    `

    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
        data: { name, email, subject },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
