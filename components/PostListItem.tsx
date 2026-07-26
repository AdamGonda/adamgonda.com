import Link from "next/link";
import { Tags } from "@/components/Tags";
import type { PostMeta } from "@/lib/posts";

type Props = { post: PostMeta; isNew?: boolean };

function formatDate(date: string): string {
  const d = new Date(date + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function PostListItem({ post, isNew }: Props) {
  return (
    <li
      className={`relative mb-m border-y border-black px-0 py-xs font-sans${isNew ? " border-y-2" : ""}`}
    >
      {isNew && (
        <span className="absolute -top-5 left-0 text-s font-bold text-red">
          new
        </span>
      )}
      <Link
        href={`/blog/${encodeURIComponent(post.slug)}`}
        className="relative flex flex-row items-center justify-between"
      >
        <section className="flex flex-col justify-between pr-s">
          <div>
            <h1 className="mb-xs text-l font-bold">{post.title}</h1>
            <p className="text-m text-grey">{post.excerpt}</p>
          </div>
          <div>
            <Tags tags={post.tags} />
            <span className="mt-xxs inline-block text-s">
              {formatDate(post.date)} - {post.minutes} min read
            </span>
          </div>
        </section>
        <img
          className="floating-image hidden size-[150px] max-h-[150px] min-h-[150px] max-w-[150px] min-w-[150px] ss:block"
          src={`/assets/images/${post.date}/thumbnail.jpg`}
          alt=""
        />
      </Link>
    </li>
  );
}
