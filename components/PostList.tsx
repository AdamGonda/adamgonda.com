import { getPostsPage } from "@/lib/posts";
import { PostListItem } from "@/components/PostListItem";
import { Pagination } from "@/components/Pagination";

type Props = { page?: number };

export function PostList({ page = 1 }: Props) {
  const { posts, page: current, totalPages } = getPostsPage(page);

  return (
    <main style={{ overflow: "visible" }}>
      <ul>
        {posts.map((post, idx) => (
          <PostListItem
            key={post.slug}
            post={post}
            isNew={current === 1 && idx === 0}
          />
        ))}
      </ul>
      <Pagination page={current} totalPages={totalPages} />
    </main>
  );
}
