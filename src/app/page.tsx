"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isCrawler, setIsCrawler] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const crawlerKeywords = [
      "bot",
      "crawler",
      "spider",
      "crawling",
      "page2images",
    ];
    const isCrawlerRequest = crawlerKeywords.some((keyword) =>
      userAgent.includes(keyword)
    );

    if (isCrawlerRequest) {
      setIsCrawler(true);
    } else {
      // A slight delay to ensure the iframe is ready
      const timer = setTimeout(() => {
        if (iframeRef.current) {
          // Reloading the src can help trigger autoplay in some browsers
          iframeRef.current.src = iframeRef.current.src;
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  if (isCrawler) {
    return (
      <main>
        <div style={{ padding: "2rem", color: "white" }}>
          <h1>Welcome to Message Block Pro</h1>
          <p>The ultimate solution to block spam SMS messages.</p>
          <p>Loading your dashboard...</p>
        </div>
      </main>
    );
  }

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
