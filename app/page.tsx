import Downloader from "./_components/Downloader";
import About from "./_components/About";
import AdBlock from "./_components/AdBlock";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Downloader />
      <AdBlock/>
      <About />
    </div>
  );
}
