import Head from "next/head";

interface SeoProps {
    stepNumber?: number;
    pageTitle: string;
    pageDescription: string;
    imageUrl?: string; // Update type to string
    className?: string;
}

const SEO: React.FC<SeoProps> = ({ pageTitle, pageDescription, imageUrl }) => (
    <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, shrink-to-fit=no" />

        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://dlfast.vercel.app" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DLFast" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dlfast.vercel.app" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />


        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="DLFast" />
        <meta name="application-name" content="DLFast" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        <script type="application/ld+json">
        {`
            {
                "@context": "http://schema.org",
                "@graph": [
                    {
                        "@type": "WebSite",
                        "name": "DLFast",
                        "alternateName": [
                            "Instagram downloader",
                            "DLFast",
                            "DLFast APP",
                            "igram",
                            "igram.io"
                        ],
                        "url": "https://dlfast.vercel.app"
                    },
                    {
                        "@type": "WebPage",
                        "name": "Instagram Downloader - Download Instagram Video, Photos, IGTV & Reels",
                        "speakable": {
                            "@type": "SpeakableSpecification",
                            "xpath": [
                                "/html/head/title",
                                "/html/head/meta[@name='description']/@content",
                                "/html/body/main/section[1]/div/div[2]/h2",
                                "/html/body/main/section[1]/div/div[2]/p",
                                "/html/body/main/section[2]"
                            ]
                        },
                        "inLanguage": "th",
                        "description": "DLFast is an tool to help you with Download Instagram Videos, Reels, Photos, IGTV & Albums. It&#039;s easy to use on any device, mobile, tablet, or computer.",
                        "url": "https://dlfast.vercel.app"
                    },
                    {
                        "@type": "Organization",
                        "name": "DLFast",
                        "alternateName": "Instagram downloader",
                        "url": "https://dlfast.vercel.app",
                        "email": "support@dlfast.vercel.app",
                        "logo": "https://dlfast.vercel.app/images/logo.png"
                    },
                    {
                        "@type": "WebApplication",
                        "name": "DLFast",
                        "alternateName": [
                            "Instagram downloader",
                            "DLFast",
                            "DLFast APP",
                            "igram",
                            "igram.io"
                        ],
                        "url": "https://dlfast.vercel.app",
                        "image": "https://dlfast.vercel.app/icon-192.png",
                        "operatingSystem": "Windows, Linux, iOS, Android, OSX, macOS",
                        "applicationCategory": "UtilitiesApplication",
                        "featureList": [
                            "Photo downloader",
                            "Video Downloader",
                            "Reel Downloader",
                            "IGTV Downloader",
                            "Gallery Downloader",
                            "Story Downloader",
                            "Highlights Downloader"
                        ],
                        "contentRating": "Everyone",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.91",
                            "reviewCount": "15483"
                        },
                        "offers": {
                            "@type": "Offer",
                            "price": "0"
                        }
                    }
                ]
            }
        `}
        </script>

        <link rel="canonical" href="https://dlfast.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://dlfast.vercel.app" />
    </Head>
);

export default SEO;
