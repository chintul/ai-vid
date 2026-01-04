import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata } from "@passive-income/seo";
import { GoogleAnalyticsWrapper } from "@passive-income/analytics";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://micro-trends.vercel.app"),
  title: {
    template: "%s | MicroTrends",
    default: "MicroTrends - Emerging Market Insights",
  },
  ...generateSiteMetadata({
    siteName: "MicroTrends - Emerging Market Insights",
    siteUrl: "https://micro-trends.vercel.app",
    description:
      "Discover emerging micro-trends before they go mainstream. Data-driven insights across tech, fashion, lifestyle, and business.",
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
        <GoogleAnalyticsWrapper measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        <header className="sticky top-0 z-50 border-b backdrop-blur-sm" style={{ borderColor: 'var(--border-color)', background: 'rgba(var(--background-rgb, 255, 255, 255), 0.8)' }}>
          <div className="container-custom">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <svg className="w-8 h-8" style={{ color: 'var(--accent)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-xl font-bold">MicroTrends</span>
              </Link>

              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/trends" className="hover:opacity-70 transition-opacity">
                  All Trends
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
                <h3 className="font-bold mb-4">MicroTrends</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Emerging trends before they go mainstream.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:opacity-70">Home</Link></li>
                  <li><Link href="/trends" className="hover:opacity-70">All Trends</Link></li>
                  <li><Link href="/about" className="hover:opacity-70">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/category/technology" className="hover:opacity-70">Technology</Link></li>
                  <li><Link href="/category/fashion" className="hover:opacity-70">Fashion</Link></li>
                  <li><Link href="/category/business" className="hover:opacity-70">Business</Link></li>
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
              <p>&copy; 2024 MicroTrends. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
