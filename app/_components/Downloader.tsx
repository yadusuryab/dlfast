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
import AdBlock from "./AdBlock";

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
    
        </Tabs>
      </div>
    </div>
  );
}

export default Downloader;
