import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata } from "@passive-income/seo";
import { GoogleAnalytics } from "@passive-income/analytics";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://niche-glossary.vercel.app"),
  title: {
    template: "%s | Niche Glossary",
    default: "Niche Glossary - Industry Terms Explained",
  },
  ...generateSiteMetadata({
    siteName: "Niche Glossary - Industry Terms Explained",
    siteUrl: "https://niche-glossary.vercel.app",
    description:
      "Comprehensive glossary of niche industry terms. From goat farming to metal forging, balloon decorating to industrial cleaning. Clear definitions and practical examples.",
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-xl font-bold">Niche Glossary</span>
              </Link>

              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/terms" className="hover:opacity-70 transition-opacity">
                  Browse Terms
                </Link>
                <Link href="/categories" className="hover:opacity-70 transition-opacity">
                  Categories
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
                <h3 className="font-bold mb-4">Niche Glossary</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Industry terms explained simply.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:opacity-70">Home</Link></li>
                  <li><Link href="/terms" className="hover:opacity-70">All Terms</Link></li>
                  <li><Link href="/about" className="hover:opacity-70">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/category/technology" className="hover:opacity-70">Technology</Link></li>
                  <li><Link href="/category/business" className="hover:opacity-70">Business</Link></li>
                  <li><Link href="/category/finance" className="hover:opacity-70">Finance</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="hover:opacity-70">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="hover:opacity-70">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--muted)' }}>
              <p>&copy; 2024 Niche Glossary. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
