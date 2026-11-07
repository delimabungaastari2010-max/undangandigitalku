import { useMemo } from "react";
import { ArrowDown, MailOpen } from "lucide-react";
import { WEDDING_DATE_LABEL } from "../lib/constants";

function StarOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2L14.39 8.26L21 9.27L16.5 14.14L17.77 21L12 17.77L6.23 21L7.5 14.14L3 9.27L9.61 8.26L12 2Z" />
    </svg>
  );
}

export function Cover() {
  const guestName = useMemo(() => {
    const param = new URLSearchParams(window.location.search).get("to");
    return param && param.trim() ? param.trim() : "Tamu Undangan Yang Terhormat";
  }, []);

  const openInvitation = () => {
    document.getElementById("mukadimah")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-svh w-full items-center justify-center overflow-hidden px-6 pb-16 pt-28 lg:px-12">
      {/* Lapisan atmosfer */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-container-low to-surface" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#745a27 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      <StarOrnament className="absolute left-[8%] top-[16%] h-10 w-10 animate-float-slow text-secondary/20" />
      <StarOrnament
        className="absolute bottom-[14%] right-[9%] h-14 w-14 animate-float-slow text-primary/15"
      />
      <StarOrnament className="absolute right-[16%] top-[24%] h-6 w-6 animate-float-slow text-secondary/30" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary-fixed/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-secondary-container/40 blur-3xl" />

      {/* Kartu portal lengkung */}
      <div className="relative flex w-full max-w-2xl animate-fade-up flex-col items-center rounded-[40px] bg-surface-container-lowest/90 p-8 text-center shadow-[0_20px_60px_-15px_rgba(10,53,38,0.12)] backdrop-blur-xl sm:p-12">
        <div className="pointer-events-none absolute inset-3 rounded-[32px] border border-secondary/20" />

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5">
          <StarOrnament className="h-8 w-8 text-secondary" />
        </div>

        <p className="mb-4 font-arabic text-[30px] leading-[1.9] tracking-wide text-secondary sm:text-[36px]">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <span className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-on-surface-variant">
          Walimatul &rsquo;Ursy &bull; The Wedding Celebration of
        </span>

        <h1 className="mb-2 font-display text-[38px] font-medium leading-[1.15] tracking-[0.02em] text-primary sm:text-[56px]">
          Fadhil <span className="mx-1 font-arabic font-light text-secondary">&amp;</span> Rania
        </h1>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px w-12 bg-secondary/40" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondary sm:text-xs">
            {WEDDING_DATE_LABEL}
          </span>
          <div className="h-px w-12 bg-secondary/40" />
        </div>

        {/* Amplop personalisasi tamu */}
        <div className="my-6 w-full max-w-md rounded-2xl bg-surface-container-low p-5 text-center">
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-on-surface-variant">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </span>
          <h2 className="font-display text-lg font-semibold tracking-[0.04em] text-primary">
            {guestName}
          </h2>
          <span className="mt-1 block text-sm text-on-surface-variant/80">
            Di Tempat &bull; Kami Mengundang Anda Merayakan Kebahagiaan Kami
          </span>
        </div>

        <button
          type="button"
          onClick={openInvitation}
          className="group relative flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-on-primary shadow-[0_8px_24px_rgba(10,53,38,0.25)] transition-all duration-300 hover:bg-primary-container active:scale-95"
        >
          <MailOpen className="h-5 w-5 text-secondary-fixed transition-transform group-hover:rotate-12" />
          <span className="text-xs font-bold uppercase tracking-[0.14em]">Buka Lembar Undangan</span>
          <ArrowDown className="h-[18px] w-[18px] text-on-primary-container transition-transform group-hover:translate-y-0.5" />
        </button>

        <p className="mt-6 text-[10px] italic tracking-[0.14em] text-outline">
          *Mohon nyalakan audio untuk mengiringi alunan instrumen syahdu
        </p>
      </div>
    </section>
  );
}
