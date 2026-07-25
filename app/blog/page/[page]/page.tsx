import { notFound } from "next/navigation";
import { getTotalPages } from "@/lib/posts";
import { PostList } from "@/components/PostList";

type Props = { params: Promise<{ page: string }> };

export function generateStaticParams() {
  const total = getTotalPages();
  // page 1 lives at `/`; only emit 2..n
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function BlogPageNum({ params }: Props) {
  const { page: pageStr } = await params;
  const page = Number(pageStr);
  if (!Number.isFinite(page) || page < 2 || page > getTotalPages()) {
    notFound();
  }
  return <PostList page={page} />;
}
