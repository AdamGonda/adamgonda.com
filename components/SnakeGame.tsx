"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

export function SnakeGame() {
  const pathname = usePathname();
  // remount scripts when navigating to this page
  const key = pathname;

  return (
    <div id="easter-egg">
      <div id="container" />
      <div id="tips-and-control">
        <h3>Use the arrows</h3>
        <span>
          <span className="power-by">Powered by </span>
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
