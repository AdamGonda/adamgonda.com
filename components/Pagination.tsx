import Link from "next/link";

type Props = {
  page: number;
  totalPages: number;
};

export function Pagination({ page, totalPages }: Props) {
  if (totalPages <= 1) return null;

  const hrefFor = (n: number) => (n === 1 ? "/" : `/blog/page/${n}`);

  return (
    <div className="pagination">
      <div>
        {page > 1 && (
          <Link id="prev-btn" href={hrefFor(page - 1)}>
            Prev
          </Link>
        )}
        {Array.from({ length: totalPages }, (_, i) => {
          const n = i + 1;
          if (n === page) {
            return (
              <span key={n} className="current page">
                {n}
              </span>
            );
          }
          return (
            <Link key={n} className="page" href={hrefFor(n)}>
              {n}
            </Link>
          );
        })}
        {page < totalPages && (
          <Link id="next-btn" href={hrefFor(page + 1)}>
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
