import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata } from "@passive-income/seo";
import { GoogleAnalytics } from "@passive-income/analytics";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://quotezzz.vercel.app"),
  title: {
    template: "%s | QuoteBot",
    default: "QuoteBot - Daily Inspiration & Wisdom",
  },
  ...generateSiteMetadata({
    siteName: "QuoteBot - Daily Inspiration & Wisdom",
    siteUrl: "https://quotezzz.vercel.app",
    description:
      "Get inspired with themed quotes daily. Love, discipline, productivity, spiritual wisdom, and more. Share beautiful quote images.",
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span className="text-xl font-bold">QuoteBot</span>
              </Link>

              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/collections" className="hover:opacity-70 transition-opacity">
                  Collections
                </Link>
                <Link href="/daily" className="hover:opacity-70 transition-opacity">
                  Daily Quote
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
                <h3 className="font-bold mb-4">QuoteBot</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Daily inspiration and wisdom.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:opacity-70">Home</Link></li>
                  <li><Link href="/collections" className="hover:opacity-70">Collections</Link></li>
                  <li><Link href="/about" className="hover:opacity-70">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Popular</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/collection/motivation" className="hover:opacity-70">Motivation</Link></li>
                  <li><Link href="/collection/wisdom" className="hover:opacity-70">Wisdom</Link></li>
                  <li><Link href="/collection/success" className="hover:opacity-70">Success</Link></li>
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
              <p>&copy; 2024 QuoteBot. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
