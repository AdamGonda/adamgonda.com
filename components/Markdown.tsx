import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";

type Props = {
  source: string;
  titles: string[];
};

export function Markdown({ source, titles }: Props) {
  let body = source.replace(/<br>/g, "<br />");

  if (titles.length > 0) {
    const toc = [
      "",
      '<div class="post-content-list">',
      "<h1>Content:</h1>",
      '<ul class="post-content-list">',
      ...titles.map((t) => {
        const id = t.toLowerCase().replace(/ /g, "-");
        return `<li><a href="#${id}">${t}</a></li>`;
      }),
      "</ul>",
      "</div>",
      "",
    ].join("\n");
    const parts = body.split(/\n\n/);
    if (parts.length > 1) {
      body = [parts[0], toc, ...parts.slice(1)].join("\n\n");
    } else {
      body = toc + "\n\n" + body;
    }
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSlug, rehypeHighlight]}
    >
      {body}
    </ReactMarkdown>
  );
}
