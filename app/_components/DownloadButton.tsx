"use client";
import React from "react";
import { handleDownload } from "../Api/insta-api";
import { Button } from "@/components/ui/button";

function DownloadButton(url: any) {
  return (
    <Button
      className="w-full my-4"
      onClick={() => handleDownload(url, `${url.media} - dlfast`)}
    >
      Download
    </Button>
  );
}

export default DownloadButton;
