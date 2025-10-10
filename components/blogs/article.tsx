"use client"

import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.text())

type Block =
  | { type: "title"; content: string }
  | { type: "subtitle"; content: string }
  | { type: "h2"; content: string }
  | { type: "h3"; content: string }
  | { type: "p"; content: string }
  | { type: "ul"; items: string[] }
  | { type: "image"; alt: string; query: string }

const KNOWN_H2 = new Set([
  "Executive Summary",
  "Introduction",
  "Key Question",
  "Background and Current Landscape",
  "In-Depth Technical Overview",
  "Mitigation and Prevention Strategies",
  "HacFy Insights / Expert Commentary",
  "Conclusion",
  "Call to Action (CTA)",
  "Keywords and Metadata",
  "Author Section",
  "References",
])

const IMAGE_QUERIES = [
  "phishing%20email%20example%20ui%20mock",
  "ai%20powered%20phishing%20concept",
  "mfa%20bypass%20diagram%20security",
  "employee%20security%20training%20session",
]

function parseTextToBlocks(text: string): Block[] {
  const lines = text.split("\n")
  const blocks: Block[] = []

  let titleSet = false
  let subtitleCapture = false
  let currentList: string[] | null = null
  let imageIdx = 0

  const flushList = () => {
    if (currentList && currentList.length) {
      blocks.push({ type: "ul", items: currentList })
    }
    currentList = null
  }

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]
    const line = raw.trim()
    if (!line) {
      flushList()
      continue
    }

    // Title: first non-empty line
    if (!titleSet) {
      blocks.push({ type: "title", content: line })
      titleSet = true
      continue
    }

    // Subtitle line follows the "Subtitle / Meta Description" marker
    if (line.toLowerCase().includes("subtitle / meta description")) {
      subtitleCapture = true
      continue
    } else if (subtitleCapture) {
      blocks.push({ type: "subtitle", content: line })
      subtitleCapture = false
      continue
    }

    // Known H2 section headings
    if (KNOWN_H2.has(line)) {
      flushList()
      blocks.push({ type: "h2", content: line })

      // Insert up to 4 images after some section starts
      if (imageIdx < IMAGE_QUERIES.length) {
        blocks.push({
          type: "image",
          alt: `${line} illustration`,
          query: IMAGE_QUERIES[imageIdx++],
        })
      }
      continue
    }

    // a./b./c. subheads → h3
    if (/^[a-d]\.\s/i.test(line)) {
      flushList()
      blocks.push({ type: "h3", content: line.replace(/^[a-d]\.\s/i, "").trim() })
      continue
    }

    // Bullets
    if (line.startsWith("- ") || line.startsWith("• ")) {
      if (!currentList) currentList = []
      currentList.push(line.replace(/^[-•]\s/, ""))
      continue
    }

    // Fallback paragraph
    blocks.push({ type: "p", content: line })
  }

  flushList()
  return blocks
}

export function ArticleContent() {
  const { data, error, isLoading } = useSWR("/content/pasted-text.txt", fetcher, {
    revalidateOnFocus: false,
  })

  if (isLoading) {
    return (
      <div className="space-y-3">
        <div className="h-8 w-3/5 animate-pulse rounded bg-muted" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
      </div>
    )
  }

  if (error || !data) {
    return <p className="text-muted-foreground">Failed to load content.</p>
  }

  const blocks = parseTextToBlocks(data)

  return (
    <article className="prose prose-neutral max-w-none dark:prose-invert">
      {/* Title + Subtitle */}
      {blocks
        .filter((b) => b.type === "title" || b.type === "subtitle")
        .map((b, idx) =>
          b.type === "title" ? (
            <h1 key={`t-${idx}`} className="mb-2 text-balance text-3xl font-bold leading-tight md:text-4xl">
              {b.content}
            </h1>
          ) : (
            <p key={`s-${idx}`} className="text-pretty text-muted-foreground md:text-lg">
              {b.content}
            </p>
          ),
        )}

      {/* Body */}
      <div className="mt-6 space-y-4">
        {blocks
          .filter((b) => b.type !== "title" && b.type !== "subtitle")
          .map((b, idx) => {
            if (b.type === "h2") {
              return (
                <h2
                  key={`h2-${idx}`}
                  className="mt-10 text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
                >
                  {b.content}
                </h2>
              )
            }
            if (b.type === "h3") {
              return (
                <h3 key={`h3-${idx}`} className="mt-6 text-xl font-semibold text-foreground">
                  {b.content}
                </h3>
              )
            }
            if (b.type === "p") {
              return (
                <p key={`p-${idx}`} className="text-pretty leading-relaxed text-foreground/90">
                  {b.content}
                </p>
              )
            }
            if (b.type === "ul") {
              return (
                <ul key={`ul-${idx}`} className="list-disc space-y-2 pl-6 text-foreground/90">
                  {b.items.map((item, i) => (
                    <li key={`li-${idx}-${i}`}>{item}</li>
                  ))}
                </ul>
              )
            }
            if (b.type === "image") {
              return (
                <figure key={`img-${idx}`} className="my-8">
                  {/* 3–4 inline image slots using placeholder */}
                  <img
                    src={`/.jpg?height=360&width=1200&query=${b.query}`}
                    alt={b.alt}
                    className="h-[220px] w-full rounded-lg object-cover md:h-[300px]"
                    crossOrigin="anonymous"
                  />
                  <figcaption className="mt-2 text-center text-sm text-muted-foreground">{b.alt}</figcaption>
                </figure>
              )
            }
            return null
          })}
      </div>

      {/* Author and References anchors (rendered if present in text) */}
      <div className="mt-12 rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
        <p>
          Note: Author details and references sections are rendered from your pasted content. Update the text file to
          change what appears here.
        </p>
      </div>
    </article>
  )
}
