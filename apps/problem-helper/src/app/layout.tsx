import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata } from "@passive-income/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateSiteMetadata({
  siteName: "Problem Helper - Step-by-Step Solutions",
  siteUrl: "https://problemhelper.ai",
  description:
    "Get instant, step-by-step solutions to everyday micro-problems. From heating costs to router issues, find clear answers fast.",
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
