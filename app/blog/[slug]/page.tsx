import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Tags } from "@/components/Tags";
import { Markdown } from "@/components/Markdown";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(decodeURIComponent(slug));
  if (!post) return { title: "Not found" };
  return {
    title: `${post.title} — Adam Gonda`,
    description: post.excerpt,
    openGraph: {
      images: [`/assets/images/${post.date}/cover.jpg`],
    },
  };
}

function formatDate(date: string): string {
  const d = new Date(date + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(decodeURIComponent(slug));
  if (!post) notFound();

  return (
    <main className="post" style={{ overflow: "visible" }}>
      <header>
        <section>
          <h1>{post.title}</h1>
          <div>
            {formatDate(post.date)}
            <span> - </span>
            {post.minutes} min read
            <span> - </span>
            <span style={{ display: "inline-block" }}>
              <Tags tags={post.tags} />
            </span>
          </div>
        </section>
        <img
          className="floating-image"
          src={`/assets/images/${post.date}/cover.jpg`}
          alt=""
        />
      </header>
      <main>
        <Markdown source={post.content} titles={post.titles} />
      </main>
    </main>
  );
}
