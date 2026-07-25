import type { Metadata } from "next";
import { PostList } from "@/components/PostList";

export const metadata: Metadata = {
  title: "Adam Gonda",
  description: "Clean code, FP concepts, and teaching.",
};

export default function HomePage() {
  return <PostList page={1} />;
}
