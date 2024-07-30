import React from "react";

function VideoPlayer(url: any) {
  return (
    <div className="fixed inset-0 bg-background/40 backdrop-blur-md saturate-150 flex items-center justify-center z-50">
      <video src={url}></video>
    </div>
  );
}

export default VideoPlayer;
