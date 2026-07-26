export function SiteFooter() {
  return (
    <footer className="flex h-footer flex-row items-center justify-center bg-black text-s text-white">
      <a
        href="https://github.com/AdamGonda"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        <span className="mx-xs">Github</span>
      </a>
      <a
        href="https://www.linkedin.com/in/adam-gonda/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        <span className="mx-xs">LinkedIn</span>
      </a>
    </footer>
  );
}
