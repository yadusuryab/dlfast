"use client";

import { useEffect } from "react";
declare global {
    interface Window {
      adsbygoogle: { [key: string]: any }[]; // Optional: Replace `any` with more specific types if available
    }
  }
  
export default function AdBlock() {
    useEffect(() => {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.error("AdSense error: ", e);
          }
        }
      }, []);
      

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9427726908265759"
        data-ad-slot="1039493463"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
