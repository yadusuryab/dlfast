import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-background w-full border-t py-5 px-5 md:px-64 text-sm">
      {/* Footer Content */}
      <div className="flex flex-wrap justify-between items-center mb-5">
        <div>
          <h2>
            <span className="font-bold">KSPYN</span> &copy; {currentYear}{" "}
            <Badge variant="outline">• Insta Downloader</Badge>
          </h2>
        </div>
        <ModeToggle />
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap justify-between">
        <div className="flex gap-3">
          <Link href="mailto:yadusurya666@gmail.com" target="_blank">
            <Mail />
          </Link>
        </div>
        <nav className="flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
      </div>
    </div>
  );
}

export default Footer;