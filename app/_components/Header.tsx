import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-background/30 backdrop-blur-xl saturate-150 z-10 flex items-center justify-between px-10 md:px-60">
      {/* Logo */}
      <div className="text-xl font-bold italic">
        <Link href="/">Gameskull / FastDl</Link>
      </div>

      {/* Navigation and Mode Toggle */}
      <div className="flex items-center gap-4">
        <Link href="/faq">FAQ</Link>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;