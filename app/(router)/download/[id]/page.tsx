import Loading from "@/app/_components/Loading";
import { getMedia } from "@/app/Api/insta-api";
import DownloadButton from "@/app/_components/DownloadButton";
import Image from "next/image";
import Downloader from "@/app/_components/Downloader";

async function page({ params }: { params: { id: string } }) {
  const media = await getMedia(params.id);

  return (
    <div>
      <Downloader/>
    
    <div className="py-14 px-10 flex justify-center">
     
      <div className="text-center">
        <div>
     
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {media?.media_type === 8 &&
            media.carousel_media.map((album: any,index:any) => (
              <div key={index}>
                {album.is_video ? (
                  <div>
                    {" "}
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
                      src={album?.image_versions?.items[0]?.url}
                      alt={params.id}
                      width={500}
                      height={500}
                      loading="lazy"
                      className="rounded-xl"
                    />
                    <DownloadButton
                      url={album.image_versions.items[0].url}
                      media={params.id}
                    />
                  </div>
                )}
              </div>
            ))}
          {media?.media_type === 2 && (
            <div className="mx-auto">
              <video src={media.video_url}    className="rounded-xl" controls width={500}></video>
              <DownloadButton url={media.video_url} media={params.id} />
            </div>
          )}
          {media?.media_type === 1 && (
            <div className="mx-auto">
              <Image
                src={media.image_versions.items[0].url}
                alt={params.id}
                width={500}
                height={500}
                loading="lazy"
                className="rounded-xl"
              />
              <DownloadButton
                url={media.image_versions.items[0].url}
                media={params.id}
              />
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default page;
