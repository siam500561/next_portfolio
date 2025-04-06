import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "./components/providers/SmoothScroll";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://iamsiam.vercel.app";
const fullName = "Ohiduzzaman Siam";
const jobTitle = "Full Stack Developer";
const siteTitle = `${fullName} | ${jobTitle}`;
const siteDescription = `Experienced ${jobTitle} (Ohiduzzaman Siam) specializing in React, Next.js, Node.js and modern web technologies. Building scalable and performant web applications with 4+ years of experience.`;
const ogImageUrl = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Ohiduzzaman Siam",
    "Siam",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: fullName, url: siteUrl }],
  creator: fullName,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${fullName}'s Portfolio Preview Image`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", sizes: "any" },
      {
        url: "/favicon_io/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png", type: "image/png" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  url: siteUrl,
  image: `${siteUrl}/favicon_io/apple-touch-icon.png`,
  jobTitle: jobTitle,
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  knowsAbout: ["Web Development", "React", "Next.js", "Node.js", "TypeScript"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="person-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
