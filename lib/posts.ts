import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/blog");

export const POSTS_PER_PAGE = 5;

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  minutes: number;
  tags: string[];
  titles: string[];
  author: string;
  excerpt: string;
};

export type Post = PostMeta & {
  content: string;
};

function titleFromSlug(slug: string): string {
  return slug.replace(/-/g, " ");
}

function parseFilename(filename: string): { date: string; slug: string } {
  const base = filename.replace(/\.md$/, "");
  const m = base.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
  if (!m) throw new Error(`Bad post filename: ${filename}`);
  return { date: m[1]!, slug: m[2]! };
}

function excerptFromContent(content: string): string {
  const plain = content
    .replace(/<[^>]+>/g, "")
    .replace(/[#>*`\[\]]/g, "")
    .trim();
  const first = plain.split(/\n+/).find((l) => l.trim().length > 20) ?? plain;
  return first.slice(0, 180).trim() + (first.length > 180 ? "…" : "");
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  const posts = files.map((filename) => {
    const { date, slug } = parseFilename(filename);
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: typeof data.title === "string" ? data.title : titleFromSlug(slug),
      date,
      minutes: Number(data.minutes ?? 0),
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      titles: Array.isArray(data.titles) ? (data.titles as string[]) : [],
      author: typeof data.author === "string" ? data.author : "Adam Gonda",
      excerpt: excerptFromContent(content),
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  const filename = files.find((f) => parseFilename(f).slug === slug);
  if (!filename) return null;
  const { date } = parseFilename(filename);
  const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: typeof data.title === "string" ? data.title : titleFromSlug(slug),
    date,
    minutes: Number(data.minutes ?? 0),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    titles: Array.isArray(data.titles) ? (data.titles as string[]) : [],
    author: typeof data.author === "string" ? data.author : "Adam Gonda",
    excerpt: excerptFromContent(content),
    content,
  };
}

export function getTotalPages(): number {
  return Math.max(1, Math.ceil(getAllPosts().length / POSTS_PER_PAGE));
}

export function getPostsPage(page: number): {
  posts: PostMeta[];
  page: number;
  totalPages: number;
} {
  const all = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * POSTS_PER_PAGE;
  return {
    posts: all.slice(start, start + POSTS_PER_PAGE),
    page: safePage,
    totalPages,
  };
}
