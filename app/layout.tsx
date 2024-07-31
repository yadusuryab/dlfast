import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Downloader from "./_components/Downloader";
import Footer from "./_components/Footer";
import Head from "next/head";
import { SpeakableSpecification, WithContext } from "schema-dts";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
        url: "https://dlfast.vercel.app/opengraph-image.png",
        width: 800,
        height: 600,
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
    images: ["https://dlfast.vercel.app/twitter-image.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DLFast",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Instagram Downloader - Download Instagram Video, Photos, IGTV & Reels</title>
        <meta
          name="description"
          content="DLFast is a tool to help you with Download Instagram Videos, Reels, Photos, IGTV & Albums. It’s easy to use on any device, mobile, tablet, or computer."
        />

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
                  url: "https://DLFast.app/en",
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
                  url: "https://DLFast.app/en",
                },
                {
                  "@type": "Organization",
                  name: "DLFast",
                  alternateName: "Instagram downloader",
                  url: "https://DLFast.app",
                  email: "support@DLFast.app",
                  logo: "https://DLFast.app/images/logo.png",
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
                  ],
                  url: "https://DLFast.app/en",
                  image: "https://DLFast.app/icon-192.png",
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
        <link rel="canonical" href="https://dlfast.vercel.app/en"></link>
        <link rel="alternate" hrefLang="x-default" href="https://dlfast.vercel.app"/>

      </Head>

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
