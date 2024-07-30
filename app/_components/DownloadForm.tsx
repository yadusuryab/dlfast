"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import React, { useState } from "react";
import { getMedia, getShortCode } from "../Api/insta-api";
import Loading from "./Loading";
import { url } from "inspector";
import { metadata } from "../layout";
import Link from "next/link";
// useRouter
import { useRouter } from "next/navigation";

function DownloadForm() {
  const [instaurl, setInstaurl] = useState("");

  const router = useRouter();
  function handleKeyDown(event: { keyCode: number }) {
    if (event.keyCode === 13) {
      ChangePage();
    }
  }
  const ChangePage = () => {
    const shortcode = getShortCode(instaurl);
    router.push(`/download/${shortcode}`, { scroll: false });
  };

  return (
    <div>
      <div className="flex bg-background/40 px-2 py-2 rounded-full backdrop-blur-md saturate-150">
        <Input
          placeholder={`Paste Instagram Link here.`}
          onChange={(e) => {
            setInstaurl(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          className="border-none "
        />

        <Button className="rounded-full" onClick={ChangePage}>
          Download
        </Button>
      </div>
    </div>
  );
}

export default DownloadForm;
