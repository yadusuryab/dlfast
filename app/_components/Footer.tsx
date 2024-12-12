import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Facebook, InstagramIcon, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Lexend_Tera } from "next/font/google";
import { Button } from "@/components/ui/button";

const lt = Lexend_Tera({ subsets: ["latin"] });

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background w-full border-t text-sm">
      {/* Footer Content */}
      <div className="flex flex-wrap justify-between items-center py-4 lg:px-32 md:px-16 px-4 mx-auto">
        <div>
          <h2 className="flex items-center gap-2">
            <span className={`${lt.className} text-lg `}>KSPYN</span>
            <Badge variant="outline">Instagram Downloader</Badge>
          </h2>
        </div>
        <ModeToggle />
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap items-center border-t py-4 lg:px-32 md:px-16 px-4 justify-between gap-4">
        <div>
        <div className="flex gap-4 items-center  w-full">
          <Link href="https://instagram.com/yadusuryab" target="_blank" aria-label="Instagram">
            <InstagramIcon className="w-6 h-6" />
          </Link>
          <Link href="mailto:yadusurya666@gmail.com" target="_blank">
            <Button variant="outline" className="flex items-center  gap-2">
              <Mail className="w-5 h-5" />
              Connect via Mail
            </Button>
          </Link>
        </div>
        </div>
       <div>
       <nav className="flex flex-wrap gap-4   w-full text-center">
        
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/contact">Contact</Link>
        
        &copy; {currentYear}
    
      </nav>
       </div>
       
      </div>
    </footer>
  );
}

export default Footer;
