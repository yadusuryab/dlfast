import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data array
const faqItems = [
  {
    question: "What is an Instagram Video Downloader?",
    answer: "It’s an online tool (web application) that lets you download Instagram videos, reels, photos, IGTV, and carousel (album). In case you need to use it later offline. The FastDl Instagram downloader is the best tool for downloading from Instagram.",
  },
  {
    question: "What type of file formats does FastDl support for downloading?",
    answer: "The most convenient these days is the jpg file format for downloading images. As for videos, the .mp4 file format is still considered the most popular worldwide, ensuring high quality and a small video file size.",
  },
  {
    question: "Which devices can I use the FastDl Downloader on?",
    answer: "The FastDl Downloader works seamlessly on any device equipped with a browser. Whether you're using a mobile phone, smartphone, tablet, notebook, laptop, or PC, you can access FastDl. It's compatible with operating systems such as Mac OS, Windows, iOS, and Linux. The tool has been thoroughly tested on multiple browsers including Chrome, Firefox, Opera, Safari, and Chromium, supporting both desktop and mobile versions.",
  },
  {
    question: "Are there any limits on the number of videos I can download?",
    answer: "No! You can download as many videos as you wish.",
  },
  {
    question: "Can I save other than video content on this site?",
    answer: "Sure! Photos, Videos, Reels, and IGTV can be downloaded from Instagram for free. FastDl supports only Instagram, and other sources are not supported.",
  },
  {
    question: "How to Download Instagram Photos and Videos Online?",
    answer: "1. Copy an Instagram video or photo URL 2. Go back to FastDl and paste it into the field, and press Download 3. Shortly, you will see the results, pick the quality you need, and download.",
  },
  {
    question: "Can I Download Photos and Videos from Any User?",
    answer: "Yes! But only from public accounts. We respect the user’s privacy/copyright. Downloading private videos through FastDl is not available and will not be. But we are working on a new browser extension for desktop browsers to help you download private posts directly from Instagram.",
  },
  {
    question: "What is the highest quality of images and videos I can download?",
    answer: "The quality of photos and videos depends on the original uploaded image. Still, usually, the highest image resolution is 1080x1350 pixels, which is the limit of Instagram. As for the video, it is HD (720p) in most cases.",
  },
  {
    question: "Instagram Reels download is allowed?",
    answer: "The short answer is: Yes, from personal posts, it's possible to download Instagram Reels. You can easily download Instagram Reels from your account to your smartphone. You can only download reels for personal use. Downloading Instagram Reels Videos is allowed as long as they are not utilized for commercial purposes.",
  },
];

function Faq() {
  return (
    <div className="my-10">
      {/* FAQ Header */}
      <div className="header">
        <h2 className="text-lg font-semibold">Frequently Asked Questions (FAQ)</h2>
        <p className="text-muted-foreground">
          This FAQ provides information on frequent questions or concerns about the FastDl downloader. If you can't find the answer to your question, feel free to ask through email on our contact page.
        </p>
      </div>

      {/* Accordion Component */}
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;