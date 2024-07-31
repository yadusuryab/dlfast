import Image from "next/image";
import Header from "./_components/Header";
import Downloader from "./_components/Downloader";
import About from "./_components/About";

export default function Home() {
  return (
    <div className="pt-12 min-h-screen">
      
    <Downloader/>
    <About/>
    </div>
  );
}
