import Link from "next/link";

type Props = {
  page: number;
  totalPages: number;
};

export function Pagination({ page, totalPages }: Props) {
  if (totalPages <= 1) return null;

  const hrefFor = (n: number) => (n === 1 ? "/" : `/blog/page/${n}`);

  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-xs">
        {page > 1 && (
          <Link id="prev-btn" href={hrefFor(page - 1)} className="text-s">
            Prev
          </Link>
        )}
        {Array.from({ length: totalPages }, (_, i) => {
          const n = i + 1;
          if (n === page) {
            return (
              <span
                key={n}
                className="bg-black px-[3px] py-px text-white"
              >
                {n}
              </span>
            );
          }
          return (
            <Link key={n} href={hrefFor(n)}>
              {n}
            </Link>
          );
        })}
        {page < totalPages && (
          <Link id="next-btn" href={hrefFor(page + 1)} className="text-s">
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
