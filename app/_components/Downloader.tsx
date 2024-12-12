import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clapperboard,
  Tv,
  GalleryHorizontal,
  TvMinimalPlay,
  Images,
  CircleFadingPlus,
} from "lucide-react";
import DownloadForm from "./DownloadForm";

// Define tab items with their names and icons
const tabItems = [
  { name: "video", icon: TvMinimalPlay },
  { name: "photo", icon: Images },
  { name: "reels", icon: Clapperboard },
  { name: "story", icon: CircleFadingPlus },
  { name: "igtv", icon: Tv },
  { name: "carousel", icon: GalleryHorizontal },
];

function Downloader() {
  return (
    <div className="px-8 flex flex-wrap justify-center min-h-screen items-center gradient dark:gradient-dark ">
      <div className="max-w-[500px] w-full">
        <Tabs defaultValue="video">
          {/* Tabs List */}
          <TabsList className="flex justify-evenly mx-2">
            {tabItems.map((tab) => (
              <TabsTrigger value={tab.name} key={tab.name} className="gap-1">
                <tab.icon size={15} />
                <span className="hidden md:block">{tab.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Heading Section */}
          <div className="text-center my-10">
            <h1 className="text-lg font-bold">Instagram Downloader</h1>
            <h2>Download Instagram Videos, Photos, Reels, IGTV & Carousel</h2>
          </div>

          {/* Tabs Content */}
          {tabItems.map((tab) => (
            <TabsContent value={tab.name} key={tab.name}>
              <DownloadForm />
            </TabsContent>
          ))}
          <div>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9427726908265759"
            data-ad-slot="4803667946"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Downloader;
