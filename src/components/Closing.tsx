import { Reveal } from "./Reveal";
import { BRIDE, GROOM } from "../lib/constants";

export function Closing() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 pb-16 pt-10 text-center">
      <Reveal className="flex flex-col items-center">
        <p dir="rtl" className="mb-3 font-arabic text-[28px] leading-[1.9] text-secondary sm:text-[36px]">
          جَزَاكُمُ اللَّهُ خَيْرًا كَثِيرًا
        </p>
        <h3 className="mb-3 font-display text-2xl font-medium text-primary sm:text-3xl">
          Terima Kasih Atas Doa &amp; Restu Anda
        </h3>
        <p className="mb-6 max-w-xl text-sm leading-relaxed text-on-surface-variant">
          Kehadiran dan doa yang tulus dari Bapak/Ibu/Saudara/i sekalian adalah kado yang
          teramat bermakna dalam mengawali lembaran suci perjalanan pernikahan kami.
        </p>
        <div className="mb-6 h-px w-16 bg-secondary/40" />
        <p className="text-sm font-semibold text-on-surface">Kami yang berbahagia,</p>
        <p className="mt-1 font-display text-4xl font-semibold text-primary sm:text-5xl">
          {GROOM.short} &amp; {BRIDE.short}
        </p>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
          Beserta Keluarga Besar Kedua Mempelai
        </p>
      </Reveal>
    </section>
  );
}
