import { useEffect, useState } from "react";
import { User } from "lucide-react";

export const NAV_ITEMS = [
  { id: "mempelai", label: "Mempelai" },
  { id: "kisah", label: "Kisah" },
  { id: "acara", label: "Acara" },
  { id: "galeri", label: "Galeri" },
  { id: "doa-dan-hadiah", label: "Doa & Hadiah" },
  { id: "rsvp", label: "RSVP" },
] as const;

export function Header() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px" }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/85 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-6 lg:px-12">
        {/* Monogram */}
        <a href="#" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-secondary/30 bg-gradient-to-br from-primary to-primary-container shadow-[0_4px_14px_rgba(10,53,38,0.25)]">
            <span className="font-display text-[15px] font-semibold tracking-wide text-secondary-fixed">
              F<span className="text-secondary-fixed-dim">&amp;</span>R
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[17px] font-semibold tracking-wide text-primary">
              F&amp;R Walimatul &rsquo;Ursy
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-secondary">
              The Sacred Union
            </span>
          </div>
        </a>

        {/* Navigasi */}
        <nav className="hidden items-center gap-1 rounded-full bg-surface-container-low p-1.5 md:flex">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "page" : undefined}
              className={
                active === id
                  ? "rounded-full bg-primary px-4 py-2 text-[12px] font-bold tracking-[0.08em] text-on-primary shadow-[0_2px_8px_rgba(10,53,38,0.15)] transition-all"
                  : "rounded-full px-4 py-2 text-[12px] font-semibold tracking-[0.08em] text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-on-surface"
              }
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full bg-surface-container-low px-3.5 py-1.5 sm:flex">
            <span className="font-arabic text-lg leading-none text-primary">بِسْمِ اللَّهِ</span>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
            <User className="h-[18px] w-[18px] text-on-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
