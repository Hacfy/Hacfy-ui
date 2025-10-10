// // app/layout.tsx
// import type { Metadata } from "next"
// import { Geist, Geist_Mono, Poppins } from "next/font/google"
// import "./globals.css"
// import { Navbarlogo } from "@/components/navbar/navbar.logo"
// import FooterDemo from "@/components/Footer/footer"
// import Script from "next/script"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// })

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// })

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// })

// export const metadata: Metadata = {
//   metadataBase: new URL("https://hacfy.com"),
//   title: "Hacfy — A future secured",
//   description:
//     "Hacfy delivers cybersecurity training, assessments and solutions. A future secured.",
//   alternates: { canonical: "https://hacfy.com/" },
//   openGraph: {
//     title: "Hacfy — A future secured",
//     description: "Cybersecurity training, assessments and solutions",
//     url: "https://hacfy.com",
//     siteName: "Hacfy",
//     images: ["/og.png"],
//     type: "website",
//   },
//   robots: { index: true, follow: true },
//   keywords:[
//     "Cybersecurity Services",
//     "Penetration Testing",
//     "DFIR",
//     "Digital Forensics and Incident Response",
//     "vCISO",
//     "Virtual Chief Information Security Officer",
//     "vDPO",
//     "Virtual Data Protection Officer",
//     "PCI DSS Compliance",
//     "Cybersecurity Compliance",
//     "Security Audits",
//     "Vulnerability Assessment",
//     "Network Security",
//     "Application Security",
//     "Cybersecurity Training",
//     "Ethical Hacking Training",
//     "Penetration Testing Workshops",
//     "DFIR Training",
//     "PCI DSS Compliance Training",
//     "vCISO Training Program",
//     "Cybersecurity Workshops",
//     "Incident Response Training",
//     "Data Protection Officer Training",
//     "Zero Trust Security",
//     "Cloud Security Solutions",
//     "Ransomware Protection",
//     "Security Automation",
//     "SOC-as-a-Service",
//     "Cyber Threat Intelligence",
//     "Endpoint Detection and Response",
//     "EDR",
//     "Managed Security Services",
//     "Remote Work Cybersecurity",
//     "Cybersecurity Risk Management",
//     "Supply Chain Cybersecurity",
//     "AI in Cybersecurity",
//     "Threat Hunting",
//     "Security Awareness Training",
//     "Best penetration testing service for businesses",
//     "How to achieve PCI DSS compliance in 2025",
//     "Importance of vCISO for small businesses",
//     "DFIR solutions for cyber attack recovery",
//     "Virtual Data Protection Officer services India",
//     "Cybersecurity compliance audit services",
//     "Hands-on cybersecurity workshops for professionals",
//     "Affordable ethical hacking training courses",
//     "Cybersecurity services in India",
//     "Penetration testing in India",
//     "PCI DSS compliance consultant India",
//     "vCISO services in Bangalore",
//     "vCISO services in Mumbai",
//     "vCISO services in Delhi"
//   ]
  
// }


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const jsonLdOrg = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "Hacfy",
//     url: "https://hacfy.com",
//      "logo": "https://hacfy.com/logo-hd.png",

//     sameAs: [
//       "https://www.linkedin.com/company/hacfy",
//       "https://x.com/hacfy",
//     ],
//   }

//   const jsonLdWebSite = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     name: "Hacfy",
//     url: "https://hacfy.com",
//     potentialAction: {
//       "@type": "SearchAction",
//       target: "https://hacfy.com/search?q={search_term_string}",
//       "query-input": "required name=search_term_string",
//     },
//   }

//   const jsonLdNav = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     itemListElement: [
//       {
//         "@type": "SiteNavigationElement",
//         position: 1,
//         name: "About",
//         url: "https://hacfy.com/about",
//       },
//       {
//         "@type": "SiteNavigationElement",
//         position: 2,
//         name: "Trainings",
//         url: "https://hacfy.com/trainings",
//       },
//       {
//         "@type": "SiteNavigationElement",
//         position: 3,
//         name: "Join Us",
//         url: "https://hacfy.com/join-us",
//       },
//       {
//         "@type": "SiteNavigationElement",
//         position: 4,
//         name: "Contact",
//         url: "https://hacfy.com/contact",
//       },
//     ],
//   }

//   return (
//     <html lang="en">
//       <head>
//         {/* Google Analytics */}
//         <Script
//           strategy="afterInteractive"
//           src="https://www.googletagmanager.com/gtag/js?id=G-PE1HH1GCZZ"
//         />
//         <Script
//           id="google-analytics"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-PE1HH1GCZZ');
//             `,
//           }}
//         />
//         <link rel="icon" href="/images/hacfy.webp" />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-primary scroll-smooth`}
//       >
//         <div className="flex flex-col min-h-screen">
//           <Navbarlogo />
//           <main className="flex-1 overflow-y-auto">{children}</main>
//           <FooterDemo />
//         </div>

//         {/* JSON-LD Schema for SEO */}
//         <Script
//           id="org"
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
//         />
//         <Script
//           id="website"
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
//         />
//         <Script
//           id="sitenav"
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNav) }}
//         />
//       </body>
//     </html>
//   )
// }
// app/layout.tsx
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import "./globals.css"
import { Navbarlogo } from "@/components/navbar/navbar.logo"
import FooterDemo from "@/components/Footer/footer"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://hacfy.com"),
  title: "Hacfy A future secured",
  description:
    "Hacfy delivers cybersecurity training, assessments and solutions. A future secured.",
  alternates: { canonical: "https://hacfy.com/" },
  openGraph: {
    title: "HacfyA future secured",
    description: "Cybersecurity training, assessments and solutions",
    url: "https://hacfy.com",
    siteName: "Hacfy",
    images: ["/og.png"],
    type: "website",
  },
  robots: { index: true, follow: true },
  keywords: [
    "Cybersecurity Services",
    "Penetration Testing",
    "DFIR",
    "Digital Forensics and Incident Response",
    "vCISO",
    "Virtual Chief Information Security Officer",
    "vDPO",
    "Virtual Data Protection Officer",
    "PCI DSS Compliance",
    "Cybersecurity Compliance",
    "Security Audits",
    "Vulnerability Assessment",
    "Network Security",
    "Application Security",
    "Cybersecurity Training",
    "Ethical Hacking Training",
    "Penetration Testing Workshops",
    "DFIR Training",
    "PCI DSS Compliance Training",
    "vCISO Training Program",
    "Cybersecurity Workshops",
    "Incident Response Training",
    "Data Protection Officer Training",
    "Zero Trust Security",
    "Cloud Security Solutions",
    "Ransomware Protection",
    "Security Automation",
    "SOC-as-a-Service",
    "Cyber Threat Intelligence",
    "Endpoint Detection and Response",
    "EDR",
    "Managed Security Services",
    "Remote Work Cybersecurity",
    "Cybersecurity Risk Management",
    "Supply Chain Cybersecurity",
    "AI in Cybersecurity",
    "Threat Hunting",
    "Security Awareness Training",
    "Best penetration testing service for businesses",
    "How to achieve PCI DSS compliance in 2025",
    "Importance of vCISO for small businesses",
    "DFIR solutions for cyber attack recovery",
    "Virtual Data Protection Officer services India",
    "Cybersecurity compliance audit services",
    "Hands-on cybersecurity workshops for professionals",
    "Affordable ethical hacking training courses",
    "Cybersecurity services in India",
    "Penetration testing in India",
    "PCI DSS compliance consultant India",
    "vCISO services in Bangalore",
    "vCISO services in Mumbai",
    "vCISO services in Delhi",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hacfy",
    url: "https://hacfy.com",
    logo: "https://hacfy.com/logo-hd.png",
    sameAs: [
      "https://www.linkedin.com/company/hacfy",
      "https://x.com/hacfy",
    ],
  }

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hacfy",
    url: "https://hacfy.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://hacfy.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const jsonLdNav = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "About",
        url: "https://hacfy.com/about",
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Trainings",
        url: "https://hacfy.com/trainings",
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Services",
        url: "https://hacfy.com/services",
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Join Us",
        url: "https://hacfy.com/join-us",
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Contact",
        url: "https://hacfy.com/contact",
      },
    ],
  }

  const jsonLdServices = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hacfy Cybersecurity Services",
    itemListOrder: "Ascending",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Penetration Testing",
        url: "https://hacfy.com/services/penetration-testing",
      },
      {
        "@type": "Service",
        position: 2,
        name: "DFIR (Digital Forensics & Incident Response)",
        url: "https://hacfy.com/services/dfir",
      },
      {
        "@type": "Service",
        position: 3,
        name: "vCISO (Virtual Chief Information Security Officer)",
        url: "https://hacfy.com/services/vciso",
      },
      {
        "@type": "Service",
        position: 4,
        name: "vDPO (Virtual Data Protection Officer)",
        url: "https://hacfy.com/services/vdpo",
      },
      {
        "@type": "Service",
        position: 5,
        name: "PCI DSS Compliance",
        url: "https://hacfy.com/services/pci-dss",
      },
      {
        "@type": "Service",
        position: 6,
        name: "View All Services",
        url: "https://hacfy.com/services",
      },
    ],
  }

  return (
    <html lang="en">
      <head>

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PE1HH1GCZZ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PE1HH1GCZZ');
            `,
          }}
        />
        <link rel="icon" href="/images/hacfy.webp" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-primary scroll-smooth`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbarlogo />
          <main className="flex-1 overflow-y-auto">{children}</main>
          <FooterDemo />
        </div>

        <Script id="org" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />
        <Script id="website" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }} />
        <Script id="sitenav" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNav) }} />
        <Script id="services" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServices) }} />
      </body>
    </html>
  )
}
