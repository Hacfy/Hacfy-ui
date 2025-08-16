
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, message, services } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json({ message: "Please fill all required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD, // App password
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Request from ${fullName}`,
      text: `
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Services: ${services.join(", ")}
Message: ${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return NextResponse.json({ message: "Email sent successfully!" });

  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email.", error: error.message || error.toString() },
      { status: 500 }
    );
  }
}
