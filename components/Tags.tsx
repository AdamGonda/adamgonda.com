type Props = { tags: string[] };

export function Tags({ tags }: Props) {
  return (
    <ul className="mt-xs">
      {tags.map((tag) => (
        <li
          key={tag}
          data-content={tag}
          className={`mb-xxs mr-xxs inline-block border-2 border-black px-xxs py-[2px] text-s font-bold${
            tag === "Series" ? " border-dashed" : ""
          }`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
