import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata } from "@passive-income/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateSiteMetadata({
  siteName: "Niche Glossary - Industry Terms Explained",
  siteUrl: "https://nicheglossary.com",
  description:
    "Comprehensive glossary of niche industry terms. From goat farming to metal forging, balloon decorating to industrial cleaning. Clear definitions and practical examples.",
  defaultImage: "/og-image.png",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
