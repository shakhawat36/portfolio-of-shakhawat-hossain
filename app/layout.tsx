import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { siteContent } from "@/content/site-content";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "block",
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: `${siteContent.name} | SEO Portfolio`,
  description: siteContent.description,
  keywords: [
    "Md. Shakhawat Hossain",
    "SEO Portfolio",
    "SEO Specialist Bangladesh",
    "Digital Marketing Portfolio",
    "Technical SEO",
    "Content Strategy"
  ],
  openGraph: {
    title: `${siteContent.name} | SEO Portfolio`,
    description: siteContent.description,
    type: "website"
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteContent.name,
  jobTitle: siteContent.headline,
  email: `mailto:${siteContent.email}`,
  telephone: siteContent.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
    streetAddress: siteContent.address
  },
  alumniOf: siteContent.education.degree,
  knowsAbout: siteContent.skillGroups.flatMap((group) => group.skills),
  sameAs: []
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
     <Analytics />
      </body>
    </html>
  );
}
