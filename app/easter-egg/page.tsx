import type { Metadata } from "next";
import { SnakeGame } from "@/components/SnakeGame";

export const metadata: Metadata = {
  title: "Easter egg — Adam Gonda",
  robots: { index: false },
};

export default function EasterEggPage() {
  return <SnakeGame />;
}
