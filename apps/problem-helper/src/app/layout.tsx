import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata } from "@passive-income/seo";
import { GoogleAnalytics } from "@passive-income/analytics";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://problem-helper.vercel.app"),
  title: {
    template: "%s | Problem Helper",
    default: "Problem Helper - Step-by-Step Solutions",
  },
  ...generateSiteMetadata({
    siteName: "Problem Helper - Step-by-Step Solutions",
    siteUrl: "https://problem-helper.vercel.app",
    description:
      "Get instant, step-by-step solutions to everyday micro-problems. From heating costs to router issues, find clear answers fast.",
    defaultImage: "/og-image.png",
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        <header className="sticky top-0 z-50 border-b backdrop-blur-sm" style={{ borderColor: 'var(--border-color)', background: 'rgba(var(--background-rgb, 255, 255, 255), 0.8)' }}>
          <div className="container-custom">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <svg className="w-8 h-8" style={{ color: 'var(--accent)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xl font-bold">Problem Helper</span>
              </Link>

              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/problems" className="hover:opacity-70 transition-opacity">
                  Browse Problems
                </Link>
                <Link href="/about" className="hover:opacity-70 transition-opacity">
                  About
                </Link>
              </nav>

              <div className="flex items-center space-x-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="border-t mt-16" style={{ borderColor: 'var(--border-color)' }}>
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">Problem Helper</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Step-by-step solutions to everyday problems.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:opacity-70">Home</Link></li>
                  <li><Link href="/problems" className="hover:opacity-70">All Problems</Link></li>
                  <li><Link href="/about" className="hover:opacity-70">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/category/tech" className="hover:opacity-70">Tech & Productivity</Link></li>
                  <li><Link href="/category/home" className="hover:opacity-70">Home & Appliances</Link></li>
                  <li><Link href="/category/auto" className="hover:opacity-70">Automotive</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="hover:opacity-70">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:opacity-70">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--muted)' }}>
              <p>&copy; 2024 Problem Helper. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
