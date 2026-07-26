"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

export function SnakeGame() {
  const pathname = usePathname();
  // remount scripts when navigating to this page
  const key = pathname;

  return (
    <div id="easter-egg" className="flex flex-col items-center">
      <div id="container" className="[&_canvas]:border-[5px] [&_canvas]:border-black" />
      <div
        id="tips-and-control"
        className="flex flex-col items-center pt-s font-bold"
      >
        <h3>Use the arrows</h3>
        <span>
          <span className="text-xs">Powered by </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.retrogameapi.com/"
          >
            🤖
          </a>
        </span>
      </div>
      <Script
        key={`p5-${key}`}
        src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js"
        strategy="afterInteractive"
        onLoad={() => {
          const existing = document.getElementById("snake-game-script");
          if (existing) existing.remove();
          const s = document.createElement("script");
          s.id = "snake-game-script";
          s.src = `/assets/js/snake.js?t=${Date.now()}`;
          document.body.appendChild(s);
        }}
      />
    </div>
  );
}
