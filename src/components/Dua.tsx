import { HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";

export function Dua() {
  return (
    <section id="doa-dan-hadiah" className="mx-auto w-full max-w-4xl scroll-mt-28 px-6 py-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[36px] bg-primary p-8 text-center text-on-primary shadow-xl sm:p-14">
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-primary-container/60 blur-3xl" />

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container text-secondary-fixed">
            <HeartHandshake className="h-8 w-8" />
          </div>
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.25em] text-secondary-fixed">
            Doa Sunnah Pernikahan
          </span>
          <p dir="rtl" className="mx-auto mb-6 max-w-2xl font-arabic text-[26px] leading-[2.2] text-secondary-fixed-dim sm:text-[34px]">
            بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <div className="mx-auto mb-6 h-px w-24 bg-secondary/40" />
          <p className="mx-auto max-w-xl italic leading-relaxed text-surface-container-low">
            &ldquo;Semoga Allah memberkahimu, melimpahkan keberkahan atasmu, dan menghimpun
            kalian berdua dalam kebaikan.&rdquo;
          </p>
          <span className="mt-3 block text-xs font-semibold tracking-[0.12em] text-secondary-fixed">
            (HR. Abu Dawud, Tirmidzi &amp; Ibnu Majah)
          </span>
        </div>
      </Reveal>
    </section>
  );
}
