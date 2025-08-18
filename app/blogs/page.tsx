"use client"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Lock,
  Zap,
} from "lucide-react"

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

export default function BlogsPage() {
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="w-4 h-4 mr-1" />
                          <span className="mr-4">{post.author}</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform duration-300" />
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
                        {post.featured && (
                          <div className="flex items-center">
                            <Zap className="w-4 h-4 text-yellow-500 mr-1" />
                            <span className="text-xs font-bold text-yellow-600">Featured</span>
                          </div>
                        )}
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
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
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
                      </div>
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
          <div className="p-4 bg-secondary/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Lock className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black gradient-text mb-4">Stay Protected with Hacfy</h2>
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
