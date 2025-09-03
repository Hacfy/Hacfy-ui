"use client"

import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type AuthCardProps = {
  title: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export function AuthCard({ title, description, children, footer }: AuthCardProps) {
  return (
    <Card className="border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold text-foreground text-balance">{title}</CardTitle>
        {description ? <CardDescription className="text-pretty">{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer ? <CardFooter className="flex items-center justify-between">{footer}</CardFooter> : null}
    </Card>
  )
}

export function AuthField({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  value,
  onChange,
  error,
  rightSlot,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
  autoComplete?: string
  value: string
  onChange: (v: string) => void
  error?: string
  rightSlot?: React.ReactNode
}) {
  const hasError = Boolean(error)
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="text-foreground">
          {label}
        </Label>
        {hasError ? <span className="text-sm text-red-600">{error}</span> : null}
      </div>
      <div className="relative">
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={hasError || undefined}
          className={cn("pr-10", hasError && "border-red-600 focus-visible:ring-red-600")}
        />
        {rightSlot ? <div className="absolute inset-y-0 right-0 flex items-center pr-2">{rightSlot}</div> : null}
      </div>
    </div>
  )
}

export function SubmitButton({
  loading,
  children,
}: {
  loading: boolean
  children: React.ReactNode
}) {
  return (
    <Button
      type="submit"
      disabled={loading}
      className="w-full text-white bg-[var(--secondary)] hover:opacity-90 disabled:opacity-60"
    >
      {loading ? "Please wait..." : children}
    </Button>
  )
}

export function AuthAlt({
  question,
  actionHref,
  actionLabel,
}: {
  question: string
  actionHref: string
  actionLabel: string
}) {
  return (
    <p className="text-sm text-muted-foreground">
      {question}{" "}
      <Link href={actionHref} className="font-medium text-[var(--secondary)] hover:underline underline-offset-4">
        {actionLabel}
      </Link>
    </p>
  )
}
