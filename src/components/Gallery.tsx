import { useState } from "react";
import { Reveal } from "./Reveal";

type Category = "semua" | "outdoor" | "detail" | "tradisi";

const TABS: { id: Category; label: string }[] = [
  { id: "semua", label: "Semua Potret" },
  { id: "outdoor", label: "Outdoor Hijau" },
  { id: "detail", label: "Detail & Mahligai" },
  { id: "tradisi", label: "Tradisi Syar'i" },
];

const PHOTOS: { src: string; cat: Exclude<Category, "semua">; caption: string; alt: string }[] = [
  {
    src: "/images/gallery-1.jpg",
    cat: "outdoor",
    caption: "Dalam Naungan Restu Semesta",
    alt: "Pasangan berdiri anggun di samping lengkung taman botani",
  },
  {
    src: "/images/gallery-2.jpg",
    cat: "detail",
    caption: "Ikatan Misaqan Ghaliza",
    alt: "Cincin emas di atas Al-Qur'an sutra ivory",
  },
  {
    src: "/images/gallery-3.jpg",
    cat: "tradisi",
    caption: "Ketenangan Jiwa & Doa",
    alt: "Mempelai wanita tersenyum teduh berbalut busana ivory",
  },
  {
    src: "/images/gallery-4.jpg",
    cat: "tradisi",
    caption: "Tanggung Jawab & Amanah",
    alt: "Mempelai pria merapikan cufflink di pelataran berlengkung",
  },
  {
    src: "/images/gallery-5.jpg",
    cat: "detail",
    caption: "Warkah Undangan Bertabur Rahmat",
    alt: "Flatlay undangan hijau sage dengan lilin segel emas",
  },
  {
    src: "/images/gallery-6.jpg",
    cat: "outdoor",
    caption: "Melangkah Bersama Menuju Ridho-Nya",
    alt: "Pasangan menatap perbukitan hijau dari balkon kayu senja hari",
  },
];

export function Gallery() {
  const [active, setActive] = useState<Category>("semua");
  const photos = PHOTOS.filter((p) => active === "semua" || p.cat === active);

  return (
    <section id="galeri" className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-12">
      <Reveal className="mx-auto mb-10 max-w-xl text-center">
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
          Potret Bahagia
        </span>
        <h2 className="font-display text-[28px] font-semibold leading-[1.25] text-primary sm:text-4xl">
          Galeri Keindahan
        </h2>
        <p className="mt-2 text-sm text-on-surface-variant">
          Momen-momen teduh penuh kehangatan dalam bingkai kesederhanaan dan keikhlasan.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={
                active === tab.id
                  ? "rounded-full bg-primary px-5 py-1.5 text-xs font-bold tracking-[0.08em] text-on-primary transition-all"
                  : "rounded-full bg-surface-container-high px-5 py-1.5 text-xs font-semibold tracking-[0.08em] text-on-surface transition-all hover:bg-surface-variant"
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => (
          <div
            key={`${active}-${photo.src}`}
            style={{ animationDelay: `${i * 70}ms` }}
            className="group relative aspect-[4/5] animate-fade-up overflow-hidden rounded-2xl bg-surface-container shadow-sm"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 via-transparent to-transparent p-6 opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="text-sm font-medium text-surface">{photo.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
