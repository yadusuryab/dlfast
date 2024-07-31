import { getMedia } from "@/app/Api/insta-api";
import DownloadButton from "@/app/_components/DownloadButton";
import Image from "next/image";
import Downloader from "@/app/_components/Downloader";
import Loading from "@/app/_components/Loading";
import About from "@/app/_components/About";

// Define the media interface
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

// Fetch media data
async function fetchMedia(id: string): Promise<Media | null> {
  try {
    return await getMedia(id);
  } catch (error) {
    console.error('Failed to fetch media:', error);
    return null;
  }
}

// Main Page Component
export default async function Page({ params }: { params: { id: string } }) {
  const media = await fetchMedia(params.id);

  if (!media) {
    return <Loading />;
  }

  return (
    <div>
      <Downloader />
      <div className="py-14 px-10 flex justify-center">
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {media.media_type === 8 && media.carousel_media?.map((album, index) => (
              <div key={index}>
                {album.is_video ? (
                  <div>
                    <video
                      src={album.video_url}
                      controls
                      width={500}
                      className="rounded-xl"
                      poster={album.thumbnail_url}
                    ></video>
                    <DownloadButton url={album.video_url} media={params.id} />
                  </div>
                ) : (
                  <div>
                    <Image
                      src={album?.image_versions?.items[0]?.url || ""}
                      alt={`Image ${index}`}
                      width={500}
                      height={500}
                      loading="lazy"
                      className="rounded-xl"
                    />
                    <DownloadButton
                      url={album.image_versions?.items[0]?.url || ""}
                      media={params.id}
                    />
                  </div>
                )}
              </div>
            ))}
            {media.media_type === 2 && (
              <div className="mx-auto">
                <video
                  src={media.video_url}
                  className="rounded-xl"
                  controls
                  width={500}
                ></video>
                <DownloadButton url={media.video_url} media={params.id} />
              </div>
            )}
            {media.media_type === 1 && (
              <div className="mx-auto">
                <Image
                  src={media.image_versions?.items[0]?.url || ""}
                  alt={params.id}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="rounded-xl"
                />
                <DownloadButton
                  url={media.image_versions?.items[0]?.url || ""}
                  media={params.id}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <About/>
    </div>
  );
}
