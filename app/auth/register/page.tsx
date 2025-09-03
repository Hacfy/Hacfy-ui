"use client"

import type React from "react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react"
import { AuthCard, AuthField, SubmitButton, AuthAlt } from "@/components/auth/auth-card"

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams() // read next param
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function validate(): string | null {
    if (!name.trim()) return "Please enter your full name."
    if (!email.includes("@")) return "Please enter a valid email."
    if (password.length < 8) return "Password must be at least 8 characters."
    if (password !== confirm) return "Passwords do not match."
    return null
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const v = validate()
    if (v) {
      setError(v)
      return
    }
    setLoading(true)
    try {
      // Call your API route as per pasted spec (/api/register)
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.message || "Unable to register.")
      }

      const rawNext = searchParams.get("next")
      let nextDecoded: string | null = null
      try {
        nextDecoded = rawNext ? decodeURIComponent(rawNext) : null
      } catch {
        nextDecoded = rawNext
      }

      try {
        const me = await fetch("/api/me", { credentials: "include" })
        if (me.ok) {
          router.push(nextDecoded || "/")
          return
        }
      } catch {
        // ignore
      }

      const nextLink = (() => {
        const encoded = nextDecoded ? encodeURIComponent(nextDecoded) : ""
        return encoded ? `?next=${encoded}` : ""
      })()
      router.push(`/auth/login${nextLink}`)
    } catch (err: any) {
      setError(err?.message || "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-foreground text-balance">Create your account</h1>
          <p className="mt-2 text-muted-foreground text-pretty">Get started in minutes. We only need a few details.</p>
        </div>

        <AuthCard
          title="Register"
          description="Use your work email for faster verification."
          footer={
            <AuthAlt
              question="Already have an account?"
              actionHref={`/auth/login${(() => {
                const rawNext = searchParams.get("next")
                if (!rawNext) return ""
                let decoded: string | null = null
                try {
                  decoded = decodeURIComponent(rawNext)
                } catch {
                  decoded = rawNext
                }
                const encoded = decoded ? encodeURIComponent(decoded) : ""
                return encoded ? `?next=${encoded}` : ""
              })()}`}
              actionLabel="Sign in"
            />
          }
        >
          <form className="grid gap-6" onSubmit={onSubmit} noValidate>
            {error ? (
              <div
                role="alert"
                className="rounded-md border border-red-600/30 bg-red-50 px-3 py-2 text-sm text-red-800"
              >
                {error}
              </div>
            ) : null}

            <AuthField
              id="name"
              label="Full name"
              placeholder="Jane Doe"
              autoComplete="name"
              value={name}
              onChange={setName}
              rightSlot={<User className="h-4 w-4 text-muted-foreground" aria-hidden="true" />}
            />

            <AuthField
              id="email"
              label="Email"
              placeholder="you@company.com"
              autoComplete="email"
              value={email}
              onChange={setEmail}
              rightSlot={<Mail className="h-4 w-4 text-muted-foreground" aria-hidden="true" />}
            />

            <AuthField
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="At least 8 characters"
              autoComplete="new-password"
              value={password}
              onChange={setPassword}
              rightSlot={
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />

            <AuthField
              id="confirm"
              label="Confirm password"
              type={showPassword ? "text" : "password"}
              placeholder="Repeat your password"
              autoComplete="new-password"
              value={confirm}
              onChange={setConfirm}
              rightSlot={<Lock className="h-4 w-4 text-muted-foreground" aria-hidden="true" />}
            />

            <SubmitButton loading={loading}>Create account</SubmitButton>
          </form>
        </AuthCard>
      </div>
    </main>
  )
}
