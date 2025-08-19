export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
  heroImage?: string
  contentImages?: {
    url: string
    alt: string
    caption?: string
  }[]
}

// Enhanced blog data with images and new phishing content
export const blogPosts: BlogPost[] = [
  {
    id: "phishing-evolution-2024",
    title: "The Evolution of Phishing Attacks: Why We Still Fall for It (and How to Stay Safe)",
    excerpt:
      "Phishing has been around for decades, yet it's still one of the most successful tricks in a hacker's playbook. Discover why phishing still works and how to protect yourself in today's digital world.",
    content: `Phishing has been around for decades, yet it's still one of the most successful tricks in a hacker's playbook. You'd think by now people would stop clicking those suspicious links — but attackers are getting smarter, faster, and sneakier.

So, why does phishing still work? And more importantly, how can we protect ourselves in today's digital world? Let's break it down.

## Why Do We Still Get Hooked by Phishing?

### 1. It plays with our emotions
Hackers know how to push the right buttons — urgency, fear, or even curiosity. That "your account will be locked in 24 hours" message? It's designed to make you panic and click.

### 2. It feels personal
Phishing emails aren't always generic anymore. Attackers dig up info from LinkedIn, data leaks, or social media to make their messages feel real. Suddenly, that email from "HR" about your leave balance doesn't look so suspicious.

### 3. It hides in plain sight
Instead of shady email addresses, many scams now come from compromised real accounts. When it looks like your colleague or a trusted brand sent it, you're far more likely to trust it.

### 4. It's not just email anymore
Phishing has spread to SMS (smishing), phone calls (vishing), WhatsApp, and even QR codes (quishing). Attackers will use whatever channel gets your attention.

## New Phishing Tricks You Should Know About

- **Business Email Compromise (BEC)**: A fake email from your "CEO" asking you to transfer money urgently.
- **Fake Login Pages**: Those near-perfect copies of Microsoft, Google, or banking login screens made just to steal your password.
- **AI-Powered Phishing**: Hackers are now using AI to write flawless, convincing emails. No more broken English to give them away.
- **MFA Bypass Attacks**: Some phishing kits can even steal your one-time codes or push approvals in real time.

## How to Protect Yourself and Your Team

### 1. Learn the red flags
Slow down before clicking. Check the sender's address, hover over links, and if something feels "off," trust your gut.

### 2. Train regularly
Companies should run awareness sessions and phishing simulations — practice really does help.

### 3. Use smarter security tools
Spam filters, anti-phishing AI, and email authentication (SPF, DKIM, DMARC) make a big difference.

### 4. Stronger authentication
MFA is great, but go for phishing-resistant options like security keys or push approvals instead of just SMS codes.

### 5. Have a plan
If someone clicks — make sure there's a quick response process in place — from reporting the incident to locking accounts.

## Wrapping Up

Phishing works because it's constantly evolving and because at the end of the day, hackers aren't really hacking computers, they're hacking people.

The good news? With the right mix of awareness, technology, and quick responses, we can turn phishing from a major threat into just another spammy annoyance.`,
    author: "Sarah Chen",
    date: "2024-01-20",
    readTime: "8 min read",
    category: "Phishing",
    tags: ["cybersecurity", "phishing", "social engineering", "email security", "awareness"],
    featured: true,
    heroImage: "/phishing-evolution-hero.jpg",
    contentImages: [
      {
        url: "/phishing-tactics-diagram.jpg",
        alt: "Modern phishing tactics and attack vectors",
        caption: "Common phishing attack methods used by cybercriminals in 2024",
      },
      {
        url: "/phishing-protection-steps.jpg",
        alt: "Steps to protect against phishing attacks",
        caption: "Essential protection strategies for individuals and organizations",
      },
    ],
  },
]
