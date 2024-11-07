import { Analytics } from "@iamsiam/analytics";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "./components/providers/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siam | Full Stack Developer",
  description:
    "Experienced full stack developer specializing in React, Next.js, Node.js and modern web technologies. Building scalable and performant web applications with 4+ years of experience.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Web Development",
  ],
  authors: [{ name: "Siam" }],
  creator: "Siam",
  openGraph: {
    title: "Siam | Full Stack Developer",
    description:
      "Experienced full stack developer specializing in React, Next.js, Node.js and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siam | Full Stack Developer",
    description:
      "Experienced full stack developer specializing in React, Next.js, Node.js and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics
          apiKey="wa_5TDkrjFK5WQPeBPd3NYVtOmy8ZPN45Qu"
          apiUrl="https://iamsiamanylatics.vercel.app"
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
