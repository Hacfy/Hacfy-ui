import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"
import { hashPassword, signToken, setAuthCookie } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Name, email, and password are required." }, { status: 400 })
    }

    const db = await getDb()
    const users = db.collection("users")

    const existing = await users.findOne({ email })
    if (existing) {
      return NextResponse.json({ message: "Email already in use." }, { status: 409 })
    }

    const passwordHash = await hashPassword(password)
    const user = {
      name,
      email,
      passwordHash,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const { insertedId } = await users.insertOne(user)

    // auto-login after register
    const token = await signToken({ sub: String(insertedId), email, name })
    await setAuthCookie(token)

    return NextResponse.json({ ok: true, user: { id: String(insertedId), name, email } }, { status: 201 })
  } catch (e) {
    return NextResponse.json({ message: "Registration failed." }, { status: 500 })
  }
}
