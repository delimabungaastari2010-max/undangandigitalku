import { CalendarPlus } from "lucide-react";
import { Reveal } from "./Reveal";
import { useCountdown } from "../hooks/useCountdown";
import { GOOGLE_CALENDAR_URL, WEDDING_DATE_ISO } from "../lib/constants";

function Digit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-surface-container-lowest/10 p-3 backdrop-blur-md sm:p-4">
      <span className="tnum font-display text-3xl font-semibold text-secondary-fixed sm:text-4xl">
        {value}
      </span>
      <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-surface-dim">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const { d, h, m, s, done } = useCountdown(WEDDING_DATE_ISO);
  const pad = (n: number) => String(n).padStart(2, "0");
  const days = done ? String(d) : pad(d);

  return (
    <section id="acara" className="mx-auto w-full max-w-5xl scroll-mt-28 px-6 py-14">
      <Reveal>
        <div className="relative mb-16 overflow-hidden rounded-[36px] bg-primary p-8 text-center text-on-primary shadow-xl sm:p-12">
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary-container/60 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.25em] text-secondary-fixed">
            {done ? "Barakallahu Lakuma" : "Menghitung Hari Bahagia"}
          </span>
          <h2 className="mb-2 font-display text-[26px] font-semibold text-surface sm:text-4xl">
            {done ? "Alhamdulillah, Ijab Qabul Telah Terlaksana" : "Menuju Hari Ijab Qabul"}
          </h2>
          {done && (
            <p className="mx-auto mb-2 max-w-md text-sm text-primary-fixed">
              Kini menapaki hari-hari penuh berkah bersama — terhitung sejak detik akad diucapkan.
            </p>
          )}
          {!done && <div className="mb-2" />}

          <div className="mx-auto mb-8 mt-6 grid max-w-xl grid-cols-4 gap-3 sm:gap-6">
            <Digit value={days} label="Hari" />
            <Digit value={pad(h)} label="Jam" />
            <Digit value={pad(m)} label="Menit" />
            <Digit value={pad(s)} label="Detik" />
          </div>

          <a
            href={GOOGLE_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-on-secondary-container transition-all hover:bg-secondary-fixed"
          >
            <CalendarPlus className="h-[18px] w-[18px]" />
            <span>Simpan Tanggal ke Google Calendar</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
