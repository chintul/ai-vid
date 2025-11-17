import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata } from "@passive-income/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateSiteMetadata({
  siteName: "MicroTrends - Discover Emerging Topics",
  siteUrl: "https://microtrends.watch",
  description:
    "Track emerging microtrends across rare hobbies, niche sports, small tools, and minor subcultures. Discover what's next before it's mainstream.",
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
