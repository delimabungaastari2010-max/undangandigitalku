import { AtSign } from "lucide-react";
import { Reveal } from "./Reveal";
import { BRIDE, GROOM } from "../lib/constants";

interface PersonCardProps {
  accent: "primary" | "secondary";
  label: string;
  full: string;
  order: string;
  father: string;
  mother: string;
  ig: string;
  photo: string;
  photoAlt: string;
}

function PersonCard({ accent, label, full, order, father, mother, ig, photo, photoAlt }: PersonCardProps) {
  return (
    <div className="group relative flex flex-col items-center overflow-hidden rounded-[32px] bg-surface-container-lowest p-8 text-center shadow-md transition-all hover:shadow-xl sm:p-10">
      <div className={`absolute inset-x-0 top-0 h-2 ${accent === "primary" ? "bg-primary" : "bg-secondary"}`} />

      {/* Bingkai potret lengkung */}
      <div className="relative mb-6 h-64 w-48 overflow-hidden rounded-b-2xl rounded-t-[999px] bg-surface-container shadow-inner ring-1 ring-secondary/20">
        <img
          src={photo}
          alt={photoAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <span className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-secondary">{label}</span>
      <h3 className="mb-3 font-display text-2xl font-medium text-primary">{full}</h3>

      <div className="mb-6 w-full max-w-xs rounded-xl bg-surface-container-low px-4 py-3">
        <p className="text-sm text-on-surface-variant">{order} dari pasangan:</p>
        <p className="mt-0.5 font-display text-lg font-semibold tracking-[0.03em] text-on-surface">{father}</p>
        <p className="text-sm text-on-surface-variant">&amp; {mother}</p>
      </div>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full bg-surface-container px-4 py-2 text-xs font-semibold tracking-[0.1em] text-on-surface transition-all ${
          accent === "primary" ? "hover:bg-primary hover:text-on-primary" : "hover:bg-secondary hover:text-on-secondary"
        }`}
      >
        <AtSign className="h-4 w-4" />
        <span>{ig}</span>
      </a>
    </div>
  );
}

export function Couple() {
  return (
    <section id="mempelai" className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-16">
      <Reveal className="mx-auto mb-16 max-w-xl text-center">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
          Mempelai Mulia
        </span>
        <h2 className="font-display text-[28px] font-semibold leading-[1.25] text-primary sm:text-4xl">
          Dua Jiwa Menuju Sakinah
        </h2>
        <p className="mt-2 text-sm text-on-surface-variant">
          Dipersatukan dalam ikrar suci untuk membangun bahtera rumah tangga yang bertabur berkah.
        </p>
      </Reveal>

      <div className="relative grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
        <Reveal>
          <PersonCard
            accent="primary"
            label="Mempelai Pria"
            full={GROOM.full}
            order={GROOM.order}
            father={GROOM.father}
            mother={GROOM.mother}
            ig={GROOM.ig}
            photo="/images/groom.jpg"
            photoAlt="Potret mempelai pria berbusana emerald"
          />
        </Reveal>

        {/* Penghubung monogram */}
        <div className="absolute left-1/2 top-1/2 z-10 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container shadow-lg ring-4 ring-surface md:flex">
          <span className="font-display text-3xl font-semibold">&amp;</span>
        </div>

        <Reveal delay={140}>
          <PersonCard
            accent="secondary"
            label="Mempelai Wanita"
            full={BRIDE.full}
            order={BRIDE.order}
            father={BRIDE.father}
            mother={BRIDE.mother}
            ig={BRIDE.ig}
            photo="/images/bride.jpg"
            photoAlt="Potret mempelai wanita berbusana ivory"
          />
        </Reveal>
      </div>
    </section>
  );
}
