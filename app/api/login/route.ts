import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"
import { verifyPassword, signToken, setAuthCookie } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required." }, { status: 400 })
    }

    const db = await getDb()
    const users = db.collection("users")
    const user = await users.findOne<{ _id: any; name: string; email: string; passwordHash: string }>({ email })

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials." }, { status: 401 })
    }

    const ok = await verifyPassword(password, user.passwordHash)
    if (!ok) {
      return NextResponse.json({ message: "Invalid credentials." }, { status: 401 })
    }

    const token = await signToken({ sub: String(user._id), email: user.email, name: user.name })
    await setAuthCookie(token)

    return NextResponse.json({ ok: true, user: { id: String(user._id), name: user.name, email: user.email } })
  } catch {
    return NextResponse.json({ message: "Login failed." }, { status: 500 })
  }
}
