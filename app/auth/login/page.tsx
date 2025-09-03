"use client"

import type React from "react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail } from "lucide-react"
import { AuthCard, AuthField, SubmitButton, AuthAlt } from "../../../components/auth/auth-card"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams() // read next param
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    // Basic client validation
    if (!email || !password) {
      setError("Please enter your email and password.")
      return
    }

    setLoading(true)
    try {
      // Call your API route as per pasted spec (/api/login)
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.message || "Unable to login.")
      }

      const rawNext = searchParams.get("next")
      let nextDecoded: string | null = null
      try {
        nextDecoded = rawNext ? decodeURIComponent(rawNext) : null
      } catch {
        nextDecoded = rawNext
      }
      router.push(nextDecoded || "/")
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
          <h1 className="text-3xl font-semibold text-foreground text-balance">Welcome back</h1>
          <p className="mt-2 text-muted-foreground text-pretty">
            Sign in to continue. Your data is protected with enterprise-grade security.
          </p>
        </div>

        <AuthCard
          title="Sign in"
          description="Access your account using your email."
          footer={
            <AuthAlt
              question="New here?"
              actionHref={`/auth/register${(() => {
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
              actionLabel="Create an account"
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
              placeholder="••••••••"
              autoComplete="current-password"
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

            <SubmitButton loading={loading}>Sign in</SubmitButton>
          </form>
        </AuthCard>
      </div>
    </main>
  )
}
