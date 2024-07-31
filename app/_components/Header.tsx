import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

function Header() {
  return (
    <div className="fixed backdrop-blur-xl saturate-150 bg-background/30 h-14 z-10 flex items-center md:px-60 px-10 justify-between w-full">
  
      <div className="logo text-xl font-bold italic my-10">
         <Link href={"/"}>DLFast</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href={"/faq"}>FAQ</Link> <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
