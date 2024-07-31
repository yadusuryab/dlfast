import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./_components/Footer";
import open from "../public/opengraph-image.png";
import logo from "../public/apple-touch-icon.png";
import android from "../public/android-chrome-192x192.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dlfast.vercel.app"),
  title:
    "Instagram Downloader - Download Instagram Video, Photos, IGTV & Reels",
  description:
    "DLFast is a tool to help you with downloading Instagram Videos, Reels, Photos, IGTV & Albums. It's easy to use on any device, mobile, tablet, or computer.",
  openGraph: {
    title:
      "Instagram Downloader - Download Instagram Video, Photos, IGTV & Reels",
    description:
      "DLFast is a tool to help you with downloading Instagram Videos, Reels, Photos, IGTV & Albums. It's easy to use on any device, mobile, tablet, or computer.",
    url: "https://dlfast.vercel.app",
    siteName: "DLFast",
    locale: "en",
    type: "website",
    images: [
      {
        url: open.src,
        width: open.width,
        height: open.height,
        alt: "DLFast - Instagram Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Instagram Downloader - Download Instagram Video, Photos, IGTV & Reels",
    description:
      "DLFast is a tool to help you with downloading Instagram Videos, Reels, Photos, IGTV & Albums. It's easy to use on any device, mobile, tablet, or computer.",
    images: [
      {
        url: open.src,
        width: open.width,
        height: open.height,
        alt: "DLFast - Instagram Downloader",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DLFast",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "DLFast",
                  alternateName: [
                    "Instagram downloader",
                    "DLFast",
                    "DLFast APP",
                    "igram",
                    "igram.io",
                  ],
                  url: "https://dlfast.vercel.app",
                },
                {
                  "@type": "WebPage",
                  name: "Instagram Downloader - Download Instagram Video, Photos, IGTV & Reels",
                  speakable: {
                    "@type": "SpeakableSpecification",
                    xpath: [
                      "/html/head/title",
                      "/html/head/meta[@name='description']/@content",
                      "/html/body/main/section[1]/div/div[2]/h2",
                      "/html/body/main/section[1]/div/div[2]/p",
                      "/html/body/main/section[2]",
                    ],
                  },
                  inLanguage: "th",
                  description:
                    "DLFast is an tool to help you with Download Instagram Videos, Reels, Photos, IGTV & Albums. It&#039;s easy to use on any device, mobile, tablet, or computer.",
                  url: "https://dlfast.vercel.app",
                },
                {
                  "@type": "Organization",
                  name: "DLFast",
                  alternateName: "Instagram downloader",
                  url: "https://dlfast.vercel.app",
                  email: "yadusurya666@gmail.com",
                  logo: logo.src,
                },
                {
                  "@type": "WebApplication",
                  name: "DLFast",
                  alternateName: [
                    "Instagram downloader",
                    "DLFast",
                    "DLFast APP",
                    "igram",
                    "igram.io",
                    "snapinsta",
                    "instasanp",
                    "FastDl",
                    "FastDl APP",
                  ],
                  url: "https://dlfast.vercel.app",
                  image: android.src,
                  operatingSystem: "Windows, Linux, iOS, Android, OSX, macOS",
                  applicationCategory: "UtilitiesApplication",
                  featureList: [
                    "Photo downloader",
                    "Video Downloader",
                    "Reel Downloader",
                    "IGTV Downloader",
                    "Gallery Downloader",
                    "Story Downloader",
                    "Highlights Downloader",
                  ],
                  contentRating: "Everyone",
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.91",
                    reviewCount: "15483",
                  },
                  offers: {
                    "@type": "Offer",
                    price: "0",
                  },
                },
              ],
            }),
          }}
        />
        <link rel="canonical" href="https://dlfast.vercel.app"></link>
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://dlfast.vercel.app"
        />
        <meta name="google-site-verification" content="jVW2L3Lpp6z747dZtOCYX4iAX7UE0gCp8xWmrVNZihc" />
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <div className="min-h-screen">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
