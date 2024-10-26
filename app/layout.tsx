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
  metadataBase: new URL("https://www.gameskull.xyz"),
  title:
    "Instagram Downloader - Download Instagram Video, Photos, IGTV & Reels",
  description:
    "Gameskull FastDl is a tool to help you with downloading Instagram Videos, Reels, Photos, IGTV & Albums. It's easy to use on any device, mobile, tablet, or computer.",
  openGraph: {
    title:
      "Instagram Downloader - Download Instagram Video, Photos, IGTV & Reels",
    description:
      "Gameskull FastDl is a tool to help you with downloading Instagram Videos, Reels, Photos, IGTV & Albums. It's easy to use on any device, mobile, tablet, or computer.",
    url: "https://www.gameskull.xyz",
    siteName: "Gameskull FastDl",
    locale: "en",
    type: "website",
    images: [
      {
        url: open.src,
        width: open.width,
        height: open.height,
        alt: "Gameskull FastDl - Instagram Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Instagram Downloader - Download Instagram Video, Photos, IGTV & Reels",
    description:
      "Gameskull FastDl is a tool to help you with downloading Instagram Videos, Reels, Photos, IGTV & Albums. It's easy to use on any device, mobile, tablet, or computer.",
    images: [
      {
        url: open.src,
        width: open.width,
        height: open.height,
        alt: "Gameskull FastDl - Instagram Downloader",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Gameskull FastDl",
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
                  name: "Gameskull FastDl",
                  alternateName: [
                    "Instagram downloader",
                    "Gameskull FastDl",
                    "Gameskull FastDl APP",
                    "igram",
                    "igram.io",
                  ],
                  url: "https://www.gameskull.xyz",
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
                    "Gameskull FastDl is an tool to help you with Download Instagram Videos, Reels, Photos, IGTV & Albums. It&#039;s easy to use on any device, mobile, tablet, or computer.",
                  url: "https://www.gameskull.xyz",
                },
                {
                  "@type": "Organization",
                  name: "Gameskull FastDl",
                  alternateName: "Instagram downloader",
                  url: "https://www.gameskull.xyz",
                  email: "yadusurya666@gmail.com",
                  logo: logo.src,
                },
                {
                  "@type": "WebApplication",
                  name: "Gameskull FastDl",
                  alternateName: [
                    "Instagram downloader",
                    "Gameskull FastDl",
                    "Gameskull FastDl APP",
                    "igram",
                    "igram.io",
                    "snapinsta",
                    "instasanp",
                    "FastDl",
                    "FastDl APP",
                  ],
                  url: "https://www.gameskull.xyz",
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
        <link rel="canonical" href="https://www.gameskull.xyz"></link>
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.gameskull.xyz"
        />
        <meta name="google-site-verification" content="jVW2L3Lpp6z747dZtOCYX4iAX7UE0gCp8xWmrVNZihc" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9427726908265759"
     crossOrigin="anonymous"></script>
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
