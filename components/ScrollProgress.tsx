"use client";

import { useEffect } from "react";

/** Sticky post reading progress bar (matches 5b6bb88 manageScrollProgress.js). */
export function ScrollProgress() {
  useEffect(() => {
    const progressBar = document.getElementsByClassName(
      "scroll-progressbar",
    )[0] as HTMLElement | undefined;
    const navigation = document.getElementsByTagName("nav")[0];
    if (!progressBar || !navigation) return;

    const getScrollProgress = () => {
      const pageHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
      return (
        (pageHeight / (document.body.scrollHeight - window.innerHeight)) * 100
      );
    };

    const updateProgress = () => {
      progressBar.style.width = getScrollProgress() + "%";
    };

    const toggleProgressBarVisibility = () => {
      const post = document.getElementsByClassName("post")[0];
      const show =
        navigation.offsetHeight - document.documentElement.scrollTop <= 0;
      const isMobile = window.innerWidth < 1000;
      progressBar.style.display = show && post && !isMobile ? "block" : "none";
    };

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("scroll", toggleProgressBarVisibility);
    toggleProgressBarVisibility();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", toggleProgressBarVisibility);
    };
  }, []);

  return (
    <div className="scroll-progressbar sticky top-0 z-10 hidden h-[4px] bg-blue" />
  );
}
