import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import Brand from "./Brand";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "lucide-react";

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 h-20 mx-auto w-full z-10 flex items-center justify-between px-4 md:px-32">
      {/* Logo */}
      <Brand />

      {/* Navigation and Mode Toggle */}
      <div className="flex items-center gap-4">
        {/* Mode Toggle */}
        <ModeToggle />

        {/* Instagram Link */}
        <Link href="https://instagram.com/yadusuryab" target="_blank" aria-label="Instagram">
          <Button
            size="icon"
            className="rounded-full bg-background/30 hover:bg-background/20 p-2 transition duration-300"
          >
            <InstagramIcon className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
