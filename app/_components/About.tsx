import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StepCard from "./StepCard";
import { Download, MonitorSmartphone, ShieldCheck, Sparkles } from "lucide-react";
import Faq from "./Faq";
import copy from "../../public/copy-link.png";
import save from "../../public/save.png";
import download from "../../public/download.png";

const steps = [
  {
    title: "Copy the URL",
    description: "Open the Instagram application or website, copy the URL of the photo, video, reels, carousel, IGTV.",
    img: copy,
  },
  {
    title: "Paste the link",
    description: "Return to the FastDl website, paste the link into the input field and click the 'Download' button.",
    img: save,
  },
  {
    title: "Download",
    description: "Quickly you will get the results with several quality options. Download what fits your needs.",
    img: download,
  },
];

const features = [
  {
    icon: <Download size={30} />,
    title: "Fast download",
    description: "Our servers are optimized to provide you with the fastest download speeds.",
  },
  {
    icon: <MonitorSmartphone size={30} />,
    title: "Support for all devices",
    description: "Whether you're on a mobile, tablet, or desktop, FastDl has got you covered.",
  },
  {
    icon: <Sparkles size={30} />,
    title: "High quality",
    description: "Download Instagram content in its original quality without any loss.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Security",
    description: "We prioritize your privacy. No login required and all downloads are processed securely.",
  },
];

const featureDescriptions = [
  {
    title: "Video Downloader",
    description: "FastDl supports Instagram video download for singular videos and multiple videos from carousels. FastDl is created to enable you to download IG videos from your personal page.",
  },
  {
    title: "Photos Downloader",
    description: "Instagram photo download provided by FastDl is a great tool for saving images from Instagram posts. With FastDl, you can download a single post image and multiple Instagram photos (carousel).",
  },
  {
    title: "Reels Downloader",
    description: "Reels is a new video format that clones the principle of TikTok. Instagram Reels download with the help of FastDl. Our Instagram Reels downloader can help you to save your favorite Reels videos.",
  },
  {
    title: "IGTV Downloader",
    description: "IGTV is a long video type. If you can’t watch it now, you can download IGTV videos to your device to be sure that you can return to watching later, without the need to be online or in case the IGTV can be deleted.",
  },
  {
    title: "Carousel / Album Downloader",
    description: "Carousel, also known as Album or Gallery posts type with multiple photos, videos, or mixed content. If you need to download multiple photos from Instagram, the FastDl is the best to download gallery.",
  },
];

function About() {
  return (
    <div className="md:px-64 px-10 block mx-auto my-5">
      <div className="logo text-3xl font-bold italic my-10">
        <h2>DLFast</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Instagram Videos and Photos Download</CardTitle>
          <CardDescription>
            FastDl is an online web tool that helps you download Instagram Videos, Photos, Reels, and IGTV. FastDl is designed to be easy to use on any device, such as a mobile phone, tablet, or computer.
          </CardDescription>
        </CardHeader>
      </Card>
      <section className="how-to my-10">
        <header className="header">
          <h2 className="text-lg font-semibold">How to download from Instagram?</h2>
          <p className="text-muted-foreground">
            You must follow these three easy steps to download video, reels, and photo from Instagram (IG, Insta). Follow the simple steps below.
          </p>
        </header>
        <div className="content grid md:grid-cols-3 gap-4 grid-cols-1">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              stepNumber={index + 1}
              imageUrl={step.img.src}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>
      <section className="features">
        <header className="header">
          <h2 className="text-lg font-semibold">Choose FastDL for download from Instagram</h2>
          <p className="text-muted-foreground">
            Downloading videos from Instagram in just two clicks is possible without compromising on quality. Avoid using unreliable applications and appreciate the videos, even if they are of lower quality.
          </p>
        </header>
        <div className="content grid md:grid-cols-2 gap-5 grid-cols-1 place-items-center">
          {features.map((feature, index) => (
            <StepCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
      <section className="about">
        <header className="header">
          <h2 className="text-lg font-semibold">FastDL features</h2>
          <p className="text-muted-foreground">
            With FastDl you can download any type of content from Instagram. Our service has an IG video downloader, Reels, IGTV, photo or carousel.
          </p>
        </header>
        <div>
          {featureDescriptions.map((feature, index) => (
            <StepCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <Faq />
      </section>
    </div>
  );
}

export default About;
