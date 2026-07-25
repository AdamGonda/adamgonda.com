type Props = { tags: string[] };

export function Tags({ tags }: Props) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag} data-content={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
