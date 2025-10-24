"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  Search,
  Calendar,
} from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export default function BlogsPage() {

  useEffect(()=>{
    window.location.href = "/"
  },[])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All",
    "Phishing",
    "Financial Fraud",
    "Social Engineering",
    "Ransomware",
    "Identity Theft",
    "Trends",
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-br from-secondary via-secondary to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              Hacfy Blog
            </h1>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-4 sm:mb-6 font-bold">
            Cybersecurity Insights & Fraud Prevention
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed px-4">
            Stay informed about the latest cybersecurity threats, fraud prevention techniques, and security best
            practices.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg border-2 focus:border-secondary transition-all duration-300 rounded-xl"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-secondary hover:bg-secondary/90 text-white"
                      : "border-secondary/20 hover:border-secondary hover:bg-secondary/10"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && selectedCategory === "All" && !searchTerm && (
        <div className="py-12 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-black gradient-text">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blogs/${post.id}`}>
                  <Card className="h-full glass-effect hover:shadow-2xl transition-all duration-500 hover-lift group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-semibold">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-xl sm:text-2xl font-black leading-tight group-hover:text-secondary transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed mb-4">{post.excerpt}</CardDescription>
                      <div className="flex fle items-center justify-between">
                        {/* <div className="flex items-center text-sm text-muted-foreground">
                          <User className="w-4 h-4 mr-1" />
                          <span className="mr-4">{post.author}</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div> */}
                        {/* <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform duration-300" /> */}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Posts Section */}
      <div className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-black gradient-text">
              {searchTerm || selectedCategory !== "All" ? "Search Results" : "All Articles"}
            </h2>
            <span className="ml-4 text-lg text-muted-foreground">({filteredPosts.length})</span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <AlertTriangle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-muted-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link key={post.id} href={`/blogs/${post.id}`}>
                  <Card
                    className="h-full glass-effect hover:shadow-2xl transition-all duration-500 hover-lift group cursor-pointer animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-semibold">
                          {post.category}
                        </Badge>
                        
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-black leading-tight group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-secondary/20 text-secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      {/* <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          <span className="mr-3">{post.author}</span>
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div> */}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-secondary/5">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-black gradient-text mb-4 leading-normal">Stay Protected with Hacfy</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Get the latest cybersecurity insights delivered to your inbox. Join thousands of security professionals who
            trust Hacfy for their security intelligence.
          </p>
          <Link href="/">
            <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Learn More About Hacfy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}