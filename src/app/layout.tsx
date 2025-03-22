import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FileText } from "lucide-react";
import Link from "next/link";

// Initialize fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sampleroo - Free Sample Files for Developers & Testers",
    template: "%s | Sampleroo",
  },
  description:
    "Download free sample files in 50+ formats for developers and testers. Explore over 1000+ files with 100K+ downloads at Sampleroo.",
  keywords: "sample files, free files, developer tools, tester resources, file formats, Sampleroo",
  openGraph: {
    title: "Sampleroo - Free Sample Files for Developers & Testers",
    description:
      "Access 1000+ free sample files in 50+ formats for development and testing at Sampleroo.",
    url: "https://sampleroo.vercel.app/",
    siteName: "Sampleroo",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://sampleroo.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sampleroo Sample Files",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sampleroo - Free Sample Files",
    description: "1000+ free sample files for developers and testers at Sampleroo.",
    images: [
      {
        url: "https://sampleroo.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sampleroo Sample Files",
      },
    ],
  },
  alternates: {
    canonical: "https://sampleroo.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="container py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2 group">
                <FileText className="h-6 w-6 text-indigo-600 transition-colors group-hover:text-indigo-700" />
                <span className="text-lg font-semibold text-gray-900">Sampleroo</span>
              </Link>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-1">
                  <span className="font-medium text-indigo-600 text-sm">1000+</span>
                  <span className="text-xs text-gray-600">Files</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium text-indigo-600 text-sm">50+</span>
                  <span className="text-xs text-gray-600">Formats</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium text-indigo-600 text-sm">100K+</span>
                  <span className="text-xs text-gray-600">Downloads</span>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <div className="container py-6 sm:py-8">{children}</div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400">
          <div className="container py-8">
            <p className="text-xs text-gray-400 text-center">
              © {new Date().getFullYear()} Sampleroo. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
