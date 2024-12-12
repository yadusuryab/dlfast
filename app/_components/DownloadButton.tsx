"use client";
import React from "react";
import { handleDownload } from "../Api/insta-api";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

function DownloadButton(url: any) {
  return (
    <Button
      className="mx-auto w-full my-4 bcent text-lg font-semibold"
      variant={'secondary'}
      onClick={() => handleDownload(url, `${url.media} - Gameskull FastDl`)}
    >
      <ArrowDown className="mr-2"/> Download
    </Button>
  );
}

export default DownloadButton;
