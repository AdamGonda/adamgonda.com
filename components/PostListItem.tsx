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
    <li className={`post-list-item${isNew ? " new" : ""}`}>
      <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
        <section>
          <div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </div>
          <div className="bottom">
            <Tags tags={post.tags} />
            <span>
              {formatDate(post.date)} - {post.minutes} min read
            </span>
          </div>
        </section>
        <img
          className="floating-image"
          src={`/assets/images/${post.date}/thumbnail.jpg`}
          alt=""
        />
      </Link>
    </li>
  );
}
