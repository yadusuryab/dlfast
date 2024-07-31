import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clapperboard,
  GalleryThumbnailsIcon,
  Tv,
  VideoIcon,
  PlayCircle,
  Eye,
  GalleryHorizontal,
  TvMinimalPlay,
  Images,
  CircleFadingPlus,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getMedia } from "../Api/insta-api";
import DownloadForm from "./DownloadForm";

export const tabitems = [
  { name: "video", icon: TvMinimalPlay },
  { name: "photo", icon: Images },
  { name: "reels", icon: Clapperboard },
  { name: "story", icon: CircleFadingPlus },
  { name: "igtv", icon: Tv },
  { name: "carousel", icon: GalleryHorizontal },
  // { name: "viewer", icon: Eye },
];

function Downloader() {
  return (
    <div className="py-5 px-8 flex flex-wrap  justify-center items-center gradient dark:gradient-dark min-h-[500px] ">
      <div className="flex flex-wrap justify-center w-full">
        <Tabs defaultValue="video" className="">
          <TabsList className="flex justify-evenly mx-2">
            {tabitems.map((tab, index) => (
              <TabsTrigger value={tab.name} key={index} className="gap-1">
                <tab.icon size={15} />
                <span className="hidden md:block">{tab.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="text-center my-10">
            {/* <h1>https://www.instagram.com/p/C89zgECSTZo/?img_index=1</h1> */}
            <h1 className="text-lg font-bold ">Instagram Downloader</h1>
            <h2>Download Instagram Videos, Photos, Reels, IGTV & carousel</h2>
          </div>
          {tabitems.map((tab, index) => (
            <TabsContent value={tab.name} key={index}>
              <DownloadForm />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default Downloader;
