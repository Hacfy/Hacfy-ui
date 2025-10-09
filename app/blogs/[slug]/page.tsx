"use client"

import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import type React from "react"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  BookOpen,
  Shield,
  ChevronRight,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  Check,
} from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { useState } from "react"



export default function BlogPostPage() {
  const param = useParams()

  const [copied, setCopied] = useState(false)
  const post = blogPosts.find((p) => p.id === param.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag))))
    .slice(0, 3)

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = post.title

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl)
    const encodedTitle = encodeURIComponent(shareTitle)

    let shareLink = ""

    switch (platform) {
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
        break
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        break
      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
        break
      case "copy":
        navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        return
    }

    if (shareLink) {
      window.open(shareLink, "_blank", "width=600,height=400")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image Section */}
      {post.heroImage && (
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <Image src={post.heroImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <Badge className="bg-secondary/90 text-white border-none font-semibold mb-3">{post.category}</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">{post.title}</h1>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="py-8 px-4 bg-muted/30 border-b">
        <div className="max-w-4xl mx-auto">
          <Link href="/blogs">
            <Button variant="outline" className="mb-6 hover:bg-secondary/10 hover:border-secondary bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-6">
            {!post.heroImage && (
              <>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-semibold">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  {/* <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div> */}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text leading-tight mb-4">
                  {post.title}
                </h1>
              </>
            )}

            {post.heroImage && (
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                {/* <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </div> */}
              </div>
            )}

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-secondary/20 text-secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={() => handleShare("twitter")} className="bg-blue-500 hover:bg-blue-600 text-white">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
              <Button onClick={() => handleShare("facebook")} className="bg-blue-600 hover:bg-blue-700 text-white">
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Button>
              <Button onClick={() => handleShare("linkedin")} className="bg-blue-700 hover:bg-blue-800 text-white">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                onClick={() => handleShare("copy")}
                variant="outline"
                className="border-secondary/20 hover:border-secondary hover:bg-secondary/10"
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Copied!" : "Copy Link"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <div className="prose prose-lg max-w-none">{formatContent(post.content, post.contentImages)}</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="py-12 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <BookOpen className="w-8 h-8 text-secondary mr-3" />
              <h2 className="text-3xl sm:text-4xl font-black gradient-text">Related Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blogs/${relatedPost.id}`}>
                  <Card className="h-full glass-effect hover:shadow-2xl transition-all duration-500 hover-lift group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-semibold">
                          {relatedPost.category}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(relatedPost.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-lg font-black leading-tight group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          <span className="mr-3">{relatedPost.author}</span>
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-16 px-4 bg-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl sm:text-4xl font-black gradient-text mb-4">Protect Your Business with Hacfy</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Ready to strengthen your cybersecurity posture? Let our experts help you build a comprehensive security
            strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started
              </Button>
            </Link>
            <Link href="/blogs">
              <Button
                variant="outline"
                className="border-secondary/20 hover:border-secondary hover:bg-secondary/10 px-8 py-4 rounded-xl font-bold text-lg bg-transparent"
              >
                Read More Articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

  function formatContent(content: string, images?: { url: string; alt: string; caption?: string }[]) {
    const lines = content.split("\n")
    const elements: React.ReactNode[] = []
    let currentList: string[] = []
    let imageIndex = 0

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      if (trimmedLine.startsWith("## ")) {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
              {currentList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>,
          )
          currentList = []
        }

        // Add image after every second major heading if available
        if (images && imageIndex < images.length && elements.length > 0) {
          const image = images[imageIndex]
          elements.push(
            <div key={`image-${imageIndex}`} className="my-8">
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image src={image.url || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
              {image.caption && (
                <p className="text-sm text-muted-foreground text-center mt-3 italic">{image.caption}</p>
              )}
            </div>,
          )
          imageIndex++
        }

        elements.push(
          <h2 key={index} className="text-2xl sm:text-3xl font-black gradient-text mb-4 mt-8">
            {trimmedLine.replace("## ", "")}
          </h2>,
        )
      } else if (trimmedLine.startsWith("### ")) {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
              {currentList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>,
          )
          currentList = []
        }
        elements.push(
          <h3 key={index} className="text-xl sm:text-2xl font-bold text-foreground mb-3 mt-6">
            {trimmedLine.replace("### ", "")}
          </h3>,
        )
      } else if (trimmedLine.startsWith("- ")) {
        currentList.push(trimmedLine.replace("- ", ""))
      } else if (trimmedLine.match(/^\d+\./)) {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
              {currentList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>,
          )
          currentList = []
        }
        elements.push(
          <p key={index} className="text-base sm:text-lg leading-relaxed mb-4 text-muted-foreground font-semibold">
            {trimmedLine}
          </p>,
        )
      } else if (trimmedLine && !trimmedLine.startsWith("#")) {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
              {currentList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>,
          )
          currentList = []
        }
        elements.push(
          <p key={index} className="text-base sm:text-lg leading-relaxed mb-4 text-muted-foreground">
            {trimmedLine}
          </p>,
        )
      }
    })

    if (currentList.length > 0) {
      elements.push(
        <ul key="final-list" className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
          {currentList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>,
      )
    }

    return elements
  }
}
