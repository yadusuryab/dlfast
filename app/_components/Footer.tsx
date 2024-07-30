import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Instagram, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Footer() {
  return (
    <div className="bg-background w-full border-t md:px-64 py-5 text-sm px-5">
      <div className="flex flex-wrap justify-between  w-full items-center my-5">
        <div>
          <h2><span className="font-bold">KSPYN</span> &copy; {new Date().getFullYear()} <Badge variant={'outline'}>• Insta Downloader</Badge></h2>
        </div>

        <ModeToggle />
      </div>
      <div className="flex flex-wrap justify-between ">
        <div className="flex gap-3">
          <Link href={"mailto:yadusurya666@gmail.com"} target="_blank">
            <Mail />
          </Link>
        </div>
        <Link href={"/"} className=" ">
          Home
        </Link>
        <Link href={"/terms"} className=" ">
          Terms
        </Link>
        <Link href={"/privacy"} className=" ">
          Privacy
        </Link>
        <Link href={"/contact"} className=" ">
          Contact
        </Link>
        <Link href={"/faq"} className=" ">
          FAQ
        </Link>
      </div>
    </div>
  );
}

export default Footer;
