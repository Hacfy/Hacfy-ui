"use client"

import { CardTitle } from "@/components/ui/card"

import { CardHeader } from "@/components/ui/card"

import type React from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Shield, ChevronRight } from "lucide-react"

// Same blog data as in the main blogs page
const blogPosts = [
  {
    id: "phishing-attacks-2024",
    title: "The Evolution of Phishing Attacks in 2024: What You Need to Know",
    excerpt:
      "Discover the latest phishing techniques cybercriminals are using and learn how to protect yourself and your organization from these sophisticated attacks.",
    content: `Phishing attacks have evolved significantly in 2024, becoming more sophisticated and harder to detect. Cybercriminals are now using AI-powered tools to create more convincing fake emails, websites, and messages.

## Key Trends in 2024 Phishing Attacks

### 1. AI-Generated Content
Attackers are leveraging artificial intelligence to create highly personalized and convincing phishing emails. These messages often include:
- Personalized greetings using publicly available information
- Company-specific terminology and branding
- Realistic writing styles that mimic legitimate communications

### 2. Multi-Channel Attacks
Modern phishing campaigns don't rely on email alone. They combine:
- SMS phishing (smishing)
- Voice phishing (vishing)
- Social media manipulation
- Fake mobile apps

### 3. Business Email Compromise (BEC) 2.0
BEC attacks have become more sophisticated, targeting:
- Remote work vulnerabilities
- Cloud-based email systems
- Supply chain communications
- Executive impersonation with deepfake technology

## Protection Strategies

### For Individuals:
- Enable two-factor authentication on all accounts
- Verify suspicious requests through alternative communication channels
- Keep software and security systems updated
- Be cautious of urgent or threatening messages

### For Organizations:
- Implement comprehensive security awareness training
- Deploy advanced email filtering solutions
- Establish clear verification procedures for financial transactions
- Regular security audits and penetration testing

## The Role of AI in Defense

While attackers use AI for malicious purposes, organizations can leverage AI for defense:
- Behavioral analysis to detect unusual patterns
- Real-time threat intelligence
- Automated incident response
- Predictive security modeling

Stay vigilant and remember: when in doubt, verify through official channels before taking any action.`,
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Phishing",
    tags: ["cybersecurity", "phishing", "AI", "email security"],
    featured: true,
  },
  {
    id: "financial-fraud-prevention",
    title: "Financial Fraud Prevention: Advanced Techniques for 2024",
    excerpt:
      "Explore cutting-edge methods to detect and prevent financial fraud, including machine learning algorithms and behavioral analysis.",
    content: `Financial fraud continues to be a major concern for businesses and individuals alike. In 2024, we're seeing new types of fraud emerge while traditional methods become more sophisticated.

## Types of Financial Fraud in 2024

### 1. Synthetic Identity Fraud
This involves creating fake identities using:
- Real Social Security numbers combined with fake names
- Fabricated credit histories
- AI-generated profile photos and documents

### 2. Account Takeover Attacks
Criminals gain access to legitimate accounts through:
- Credential stuffing attacks
- SIM swapping
- Social engineering
- Malware and keyloggers

### 3. Payment Fraud
Modern payment fraud includes:
- Contactless payment skimming
- Mobile wallet exploitation
- Cryptocurrency fraud
- Buy-now-pay-later abuse

## Advanced Detection Techniques

### Machine Learning Models
- Anomaly detection algorithms
- Pattern recognition systems
- Risk scoring models
- Real-time transaction monitoring

### Behavioral Analysis
- User behavior profiling
- Device fingerprinting
- Geolocation analysis
- Transaction timing patterns

### Multi-Factor Authentication
- Biometric verification
- Hardware security keys
- Risk-based authentication
- Adaptive authentication systems

## Implementation Best Practices

Organizations should focus on:
1. **Layered Security Approach**: Multiple detection methods working together
2. **Real-Time Monitoring**: Immediate alerts for suspicious activities
3. **User Education**: Training programs for employees and customers
4. **Regular Updates**: Keeping fraud detection systems current
5. **Collaboration**: Sharing threat intelligence with industry partners

The key to effective fraud prevention is staying ahead of evolving threats through continuous monitoring, advanced technology, and comprehensive security strategies.`,
    author: "Michael Rodriguez",
    date: "2024-01-12",
    readTime: "10 min read",
    category: "Financial Fraud",
    tags: ["fraud prevention", "machine learning", "fintech", "security"],
    featured: true,
  },
  {
    id: "social-engineering-tactics",
    title: "Social Engineering Tactics: How Criminals Manipulate Human Psychology",
    excerpt:
      "Understand the psychological techniques used by cybercriminals to manipulate victims and learn how to build resilience against these attacks.",
    content: `Social engineering remains one of the most effective attack vectors for cybercriminals. By exploiting human psychology rather than technical vulnerabilities, attackers can bypass even the most sophisticated security systems.

## Common Social Engineering Techniques

### 1. Pretexting
Creating fabricated scenarios to gain trust:
- Impersonating authority figures
- Creating fake emergencies
- Building false relationships over time
- Using insider information to appear legitimate

### 2. Baiting
Offering something enticing to trigger curiosity:
- Free software downloads with malware
- USB drives left in public places
- Fake job offers or prizes
- Exclusive access to content or services

### 3. Quid Pro Quo
Offering services in exchange for information:
- Fake IT support calls
- Survey scams requesting personal data
- Technical assistance with hidden motives
- Free consultations with data collection

## Psychological Principles Exploited

### Authority
People tend to comply with requests from perceived authority figures:
- Impersonating executives or IT staff
- Using official-looking communications
- Creating fake credentials and titles
- Leveraging organizational hierarchies

### Urgency and Fear
Creating time pressure to bypass rational thinking:
- Account suspension threats
- Security breach notifications
- Limited-time offers
- Deadline-driven requests

### Social Proof
Using others' behavior to influence decisions:
- Fake testimonials and reviews
- Claiming widespread adoption
- Creating artificial popularity
- Leveraging peer pressure

## Building Organizational Resilience

### Security Awareness Training
- Regular phishing simulations
- Psychology-based education programs
- Real-world scenario training
- Continuous reinforcement campaigns

### Policy and Procedures
- Clear verification protocols
- Escalation procedures for suspicious requests
- Regular security briefings
- Incident reporting mechanisms

### Technical Controls
- Multi-factor authentication requirements
- Access controls and permissions
- Monitoring and logging systems
- Automated threat detection

### Cultural Change
- Promoting security-conscious behavior
- Rewarding good security practices
- Creating open communication channels
- Learning from security incidents

Remember: the human element is both the weakest link and the strongest defense in cybersecurity. Proper training and awareness can turn employees into your first line of defense against social engineering attacks.`,
    author: "Dr. Emily Watson",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Social Engineering",
    tags: ["social engineering", "psychology", "security awareness", "training"],
    featured: false,
  },
  {
    id: "ransomware-recovery-guide",
    title: "Ransomware Recovery: A Complete Guide for Businesses",
    excerpt:
      "Learn essential steps for ransomware recovery, prevention strategies, and how to build resilient backup systems to protect your business.",
    content: `Ransomware attacks continue to plague businesses of all sizes. Having a comprehensive recovery plan is crucial for minimizing damage and ensuring business continuity.

## Immediate Response Steps

### 1. Isolation and Assessment
- Disconnect affected systems from the network
- Identify the scope of the infection
- Preserve evidence for forensic analysis
- Document all affected systems and data

### 2. Communication Protocol
- Notify key stakeholders immediately
- Contact law enforcement if required
- Engage cybersecurity experts
- Prepare customer and public communications

### 3. Recovery Decision Matrix
Evaluate options based on:
- Backup availability and integrity
- Cost of downtime vs. ransom payment
- Legal and regulatory requirements
- Reputational impact considerations

## Recovery Strategies

### Backup Restoration
- Verify backup integrity before restoration
- Use air-gapped or immutable backups
- Test restored systems thoroughly
- Implement additional security measures

### System Rebuilding
- Clean installation of operating systems
- Restoration from known-good configurations
- Application reinstallation and patching
- Data recovery from verified clean sources

### Hybrid Approach
- Combine backup restoration with system rebuilding
- Prioritize critical systems first
- Gradual restoration of less critical components
- Continuous monitoring during recovery

## Prevention Best Practices

### Backup Strategy
- 3-2-1 backup rule implementation
- Regular backup testing and validation
- Air-gapped and immutable storage options
- Automated backup monitoring and alerting

### Security Measures
- Regular security updates and patching
- Endpoint detection and response (EDR) solutions
- Network segmentation and access controls
- Employee security awareness training

### Incident Response Planning
- Documented response procedures
- Regular tabletop exercises
- Clear roles and responsibilities
- External partner relationships

## Building Resilience

### Technology Solutions
- Zero-trust architecture implementation
- Advanced threat detection systems
- Automated incident response capabilities
- Cloud-based security services

### Organizational Preparedness
- Regular risk assessments
- Business continuity planning
- Cyber insurance evaluation
- Vendor security assessments

### Continuous Improvement
- Post-incident reviews and lessons learned
- Regular plan updates and testing
- Industry threat intelligence sharing
- Security metrics and reporting

The key to ransomware resilience is preparation. Organizations that invest in comprehensive backup strategies, security measures, and incident response planning are better positioned to recover quickly and minimize impact.`,
    author: "James Thompson",
    date: "2024-01-08",
    readTime: "15 min read",
    category: "Ransomware",
    tags: ["ransomware", "backup", "recovery", "business continuity"],
    featured: false,
  },
  {
    id: "identity-theft-protection",
    title: "Identity Theft Protection in the Digital Age",
    excerpt:
      "Comprehensive strategies to protect your personal information and recover from identity theft in an increasingly connected world.",
    content: `Identity theft has evolved dramatically in the digital age. With more personal information online than ever before, protecting your identity requires a multi-layered approach.

## Modern Identity Theft Methods

### 1. Data Breaches
Large-scale breaches expose millions of records:
- Healthcare organizations
- Financial institutions
- Retail companies
- Government agencies

### 2. Social Media Mining
Criminals harvest information from:
- Public social media profiles
- Location check-ins and photos
- Personal relationships and connections
- Professional networking sites

### 3. Dark Web Marketplaces
Stolen identities are bought and sold:
- Complete identity packages
- Credit card information
- Social Security numbers
- Medical records and insurance data

## Protection Strategies

### Personal Information Management
- Limit information sharing on social media
- Use privacy settings effectively
- Be cautious with public Wi-Fi
- Regularly review online accounts and profiles

### Financial Monitoring
- Check credit reports regularly
- Set up fraud alerts with credit bureaus
- Monitor bank and credit card statements
- Use credit monitoring services

### Digital Security Practices
- Strong, unique passwords for all accounts
- Two-factor authentication everywhere possible
- Regular software updates and security patches
- Secure email and messaging practices

## Recovery Process

### Immediate Actions
1. Contact financial institutions immediately
2. Place fraud alerts on credit reports
3. File reports with law enforcement
4. Document all fraudulent activities

### Long-term Recovery
- Work with creditors to resolve fraudulent accounts
- Monitor credit reports for new fraudulent activity
- Consider identity theft insurance
- Maintain detailed records of all recovery efforts

## Advanced Protection Measures

### Identity Monitoring Services
- Real-time alerts for suspicious activity
- Dark web monitoring
- Credit report monitoring
- Identity restoration services

### Legal Protections
- Understand your rights under federal law
- Know state-specific identity theft protections
- Consider legal assistance for complex cases
- Maintain documentation for legal proceedings

### Technology Solutions
- Identity protection software
- Secure password managers
- VPN services for online privacy
- Encrypted communication tools

## Prevention for Families

### Children's Identity Protection
- Monitor children's credit reports
- Limit sharing of children's information
- Educate children about online safety
- Secure important documents

### Elder Protection
- Assist elderly family members with security
- Monitor for signs of identity theft
- Educate about common scams targeting seniors
- Implement additional security measures

The digital age has made identity theft easier for criminals but has also provided us with better tools for protection and monitoring. The key is to be proactive, vigilant, and prepared to act quickly if your identity is compromised.`,
    author: "Lisa Park",
    date: "2024-01-05",
    readTime: "11 min read",
    category: "Identity Theft",
    tags: ["identity theft", "privacy", "personal security", "digital protection"],
    featured: false,
  },
  {
    id: "cybersecurity-trends-2024",
    title: "Top Cybersecurity Trends to Watch in 2024",
    excerpt:
      "Stay ahead of emerging cybersecurity threats and technologies that will shape the security landscape in 2024 and beyond.",
    content: `The cybersecurity landscape continues to evolve rapidly. Understanding emerging trends is crucial for organizations and individuals looking to stay protected in 2024.

## Emerging Threat Vectors

### 1. AI-Powered Attacks
Artificial intelligence is being weaponized:
- Automated vulnerability discovery
- Sophisticated social engineering
- Deepfake technology for impersonation
- AI-generated malware that evades detection

### 2. Supply Chain Attacks
Targeting third-party vendors and suppliers:
- Software supply chain compromises
- Hardware implants and backdoors
- Cloud service provider attacks
- Open source software vulnerabilities

### 3. IoT and Edge Computing Threats
As connected devices proliferate:
- Unsecured IoT device exploitation
- Edge computing vulnerabilities
- 5G network security challenges
- Smart city infrastructure attacks

## Defensive Technologies

### Zero Trust Architecture
Moving beyond perimeter-based security:
- Continuous verification of users and devices
- Micro-segmentation of network resources
- Least privilege access principles
- Real-time risk assessment

### Extended Detection and Response (XDR)
Comprehensive threat detection:
- Integration across multiple security tools
- Automated threat hunting and response
- Advanced analytics and machine learning
- Centralized security operations

### Quantum-Safe Cryptography
Preparing for quantum computing threats:
- Post-quantum cryptographic algorithms
- Crypto-agility implementation
- Quantum key distribution
- Hybrid classical-quantum security

## Regulatory and Compliance Evolution

### Privacy Regulations
Expanding global privacy requirements:
- GDPR enforcement and expansion
- State-level privacy laws in the US
- Cross-border data transfer restrictions
- Consumer privacy rights expansion

### Cybersecurity Frameworks
Enhanced security standards:
- NIST Cybersecurity Framework updates
- Industry-specific security requirements
- Supply chain security standards
- Incident reporting mandates

## Workforce and Skills

### Cybersecurity Skills Gap
Addressing the talent shortage:
- Automated security tools and processes
- Cybersecurity training and certification
- Diversity and inclusion initiatives
- Alternative career pathways

### Security Awareness Evolution
Beyond traditional training:
- Behavioral-based security programs
- Gamification of security education
- Personalized training approaches
- Continuous reinforcement strategies

## Cloud Security Maturation

### Multi-Cloud Security
Managing complex cloud environments:
- Unified security policies across clouds
- Cloud security posture management
- Container and serverless security
- DevSecOps integration

### Cloud-Native Security
Built-in security for cloud applications:
- Infrastructure as code security
- API security and governance
- Microservices security patterns
- Cloud workload protection

## Future Outlook

### Predictions for 2024 and Beyond
- Increased automation in both attacks and defense
- Greater focus on supply chain security
- Evolution of privacy-preserving technologies
- Integration of security into business processes

### Preparing for the Future
Organizations should:
1. Invest in adaptive security architectures
2. Develop incident response capabilities
3. Foster a security-conscious culture
4. Stay informed about emerging threats
5. Collaborate with industry partners

The cybersecurity landscape will continue to evolve rapidly. Success requires a combination of advanced technology, skilled personnel, and adaptive strategies that can respond to emerging threats while supporting business objectives.`,
    author: "Alex Kumar",
    date: "2024-01-03",
    readTime: "13 min read",
    category: "Trends",
    tags: ["cybersecurity trends", "AI security", "zero trust", "future threats"],
    featured: true,
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag))))
    .slice(0, 3)

  // Convert markdown-style content to JSX
  const formatContent = (content: string) => {
    const lines = content.split("\n")
    const elements: React.ReactNode[] = []
    let currentList: string[] = []

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

  return (
    <div className="min-h-screen bg-background">
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
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-secondary/20 text-secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button className="bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/20">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <div className="prose prose-lg max-w-none">{formatContent(post.content)}</div>
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
          <div className="p-4 bg-secondary/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Shield className="w-10 h-10 text-secondary" />
          </div>
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
}
