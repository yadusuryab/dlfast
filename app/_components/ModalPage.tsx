"use client";

import { useEffect, useState } from "react";
import { getMedia } from "@/app/Api/insta-api";
import DownloadButton from "@/app/_components/DownloadButton";
import Image from "next/image";
import Loading from "@/app/_components/Loading";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface Media {
  media_type: number;
  carousel_media?: Array<{
    is_video: boolean;
    video_url?: string;
    image_versions?: {
      items: Array<{ url: string }>;
    };
    thumbnail_url?: string;
  }>;
  video_url?: string;
  image_versions?: {
    items: Array<{ url: string }>;
  };
}

interface ModalContentProps {
  id: string;
 
}

export default function ModalContent({ id }: ModalContentProps) {
  const [media, setMedia] = useState<Media | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    async function fetchMediaData() {
      try {
        const data = await getMedia(id);
        setMedia(data);
      } catch (error) {
        console.error("Failed to fetch media:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMediaData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!media) {
    return (
      <DialogContent>
        <div className="text-center text-gray-500">Failed to load media</div>
      </DialogContent>
    );
  }

  return (
    <Dialog open >
      <DialogContent className="max-w-lg max-h-[700px] h-full ">
        <DialogHeader>
          <DialogTitle>Media Viewer</DialogTitle>
       
        </DialogHeader>
        <div className="flex flex-col max-h-[700px] overflow-y-scroll items-center gap-4">
        <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4"
            onClick={() =>  {router.replace("/",{})}} // Navigate to the previous page
          >
            <X />
          </Button>
          {media.media_type === 8 &&
            media.carousel_media?.map((album, index) => (
              <div key={index}>
                {album.is_video ? (
                  <div className="relative">
                  <video
                    src={media.video_url}
                    controls
                    className="rounded-xl w-full"
                  ></video>
                  <div className="absolute top-2 right-2">
                    <DownloadButton url={media.video_url} media={id} />
                  </div>
                </div>
                ) : (
                  <div >
                    <div className="relative">
                    <Image
                      src={album?.image_versions?.items[0]?.url || ""}
                      alt={`Image ${index}`}
                      width={500}
                      height={500}
                      className="rounded-xl"
                    />
                     <div className="absolute top-2 right-2">
                    <DownloadButton url={media.video_url} media={id} />
                  </div>
                    </div>
                    
                  </div>
                )}
              </div>
            ))}
          {media.media_type === 2 && (
              <div className="relative">
              <video
                src={media.video_url}
                controls
                className="rounded-xl w-full"
              ></video>
              <div className="absolute top-2 right-2">
                <DownloadButton url={media.video_url} media={id} />
              </div>
            </div>
          )}
          {media.media_type === 1 && (
            <div>
              <Image
                src={media.image_versions?.items[0]?.url || ""}
                alt={id}
                width={500}
                height={500}
                className="rounded-xl"
              />
              <DownloadButton
                url={media.image_versions?.items[0]?.url || ""}
                media={id}
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
