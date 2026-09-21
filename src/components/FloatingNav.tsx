import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  ["Road", "legacy"], ["Missions", "missions"], ["Tracks", "tracks"], ["Prizes", "prizes"], ["FAQ", "faq"],
] as const;

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(([, id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 md:top-5">
      <div className={`float-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="flex items-center gap-2 md:gap-8">
          <a href="#top" className="game-wordmark-small px-1 text-lg md:text-xl" onClick={() => setOpen(false)}>DIVERSiON</a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} className={`float-link ${current === id ? "active" : ""}`}>{label}</a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="city" size="sm"><a href="#register">Register</a></Button>
          <button type="button" className="float-burger md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <nav className="float-sheet md:hidden" aria-label="Mobile navigation">
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} className={current === id ? "active" : ""} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
