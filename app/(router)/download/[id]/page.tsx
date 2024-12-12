import { getMedia } from "@/app/Api/insta-api";
import Downloader from "@/app/_components/Downloader";
import About from "@/app/_components/About";
import ModalContent from "@/app/_components/ModalPage";

// Main Page Component
export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Downloader />
      <ModalContent id={params.id} />
      <About />
    </div>
  );
}
