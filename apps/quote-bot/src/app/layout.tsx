import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata } from "@passive-income/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateSiteMetadata({
  siteName: "QuoteBot - Daily Inspiration & Wisdom",
  siteUrl: "https://quotebot.world",
  description:
    "Get inspired with themed quotes daily. Love, discipline, productivity, spiritual wisdom, and more. Share beautiful quote images.",
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
