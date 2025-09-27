"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // A slight delay to ensure the iframe is ready
    const timer = setTimeout(() => {
      if (iframeRef.current) {
        // Reloading the src can help trigger autoplay in some browsers
        iframeRef.current.src = iframeRef.current.src;
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <iframe
        ref={iframeRef}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </main>
  );
}
