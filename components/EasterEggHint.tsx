"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Randomly turns the nav logo into an easter-egg link (matches 5b6bb88). */
export function EasterEggHint() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/easter-egg") return;
    if (window.innerWidth < 1000) return;
    if (Math.random() * 100 >= 10) return;
    const nameLogo = document.querySelector("nav a");
    if (!nameLogo) return;
    nameLogo.innerHTML = "[ Easter 🐣 ]";
    nameLogo.setAttribute("href", "/easter-egg");
  }, [pathname]);

  return null;
}
