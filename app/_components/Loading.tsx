import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/40 backdrop-blur-md saturate-150 z-50">
      <div className="text-lg">Loading...</div>
    </div>
  );
}

export default Loading;
