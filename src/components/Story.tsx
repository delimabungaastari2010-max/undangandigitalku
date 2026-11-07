import { Heart } from "lucide-react";
import { Reveal } from "./Reveal";

const MILESTONES = [
  {
    n: "01",
    title: "Pertemuan Pertama (Silaturahmi)",
    date: "Januari 2023",
    final: false,
    body: "Takdir mempertemukan kedua keluarga dalam agenda silaturahmi di Yogyakarta. Dari perjumpaan singkat beradab tersebut, terbit niat baik yang dijaga dalam ketundukan doa.",
  },
  {
    n: "02",
    title: "Ta'aruf Penuh Adab",
    date: "Agustus 2023",
    final: false,
    body: "Memulai proses saling mengenal visi hidup dan keselarasan prinsip secara syar'i didampingi perantara keluarga. Menyelaraskan niat membangun baitul jannah bersama.",
  },
  {
    n: "03",
    title: "Khitbah (Pertunangan Resmi)",
    date: "Februari 2024",
    final: false,
    body: "Keluarga besar berkumpul dalam suasana penuh kehangatan. Mempelai pria secara resmi mengutarakan pinangan suci yang disambut keridhoan kedua belah pihak orang tua.",
  },
  {
    n: "04",
    title: "Menuju Akad Nikah (Misaqan Ghaliza)",
    date: "Agustus 2025",
    final: true,
    body: "Menyempurnakan separuh agama dalam ikatan pernikahan yang suci, kokoh, dan berlimpah ridho Ilahi Rabbi. Memohon doa restu dari segenap kerabat terkasih.",
  },
];

export function Story() {
  return (
    <section id="kisah" className="mx-auto w-full max-w-4xl scroll-mt-28 px-6 py-12">
      <Reveal className="mb-12 text-center">
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
          Perjalanan Cinta
        </span>
        <h2 className="font-display text-[28px] font-semibold leading-[1.25] text-primary sm:text-4xl">
          Kisah Menuju Ikrar Halal
        </h2>
        <p className="mt-1 text-sm text-on-surface-variant">
          Setiap langkah dihiasi niat tulus menjaga kehormatan dan syariat.
        </p>
      </Reveal>

      <div className="relative space-y-10 pl-6 sm:pl-10">
        {/* Garis benang vertikal */}
        <div className="absolute bottom-4 left-6 top-4 w-0.5 -translate-x-1/2 bg-secondary-fixed-dim sm:left-10" />

        {MILESTONES.map((m, i) => (
          <Reveal key={m.n} delay={i * 90}>
            <div className="group relative flex items-start gap-6">
              <div
                className={`z-10 -ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-md ${
                  m.final ? "bg-secondary text-on-secondary" : "bg-primary text-on-primary"
                }`}
              >
                {m.final ? (
                  <Heart className="h-4 w-4" fill="currentColor" />
                ) : (
                  <span className="text-[10px] font-bold tracking-widest">{m.n}</span>
                )}
              </div>
              <div
                className={`w-full rounded-2xl p-6 transition-all ${
                  m.final
                    ? "border-t-2 border-secondary bg-surface-container-lowest shadow-md group-hover:shadow-lg"
                    : "bg-surface-container-low shadow-sm group-hover:bg-surface-container"
                }`}
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold tracking-[0.03em] text-primary">
                    {m.title}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.14em] ${
                      m.final
                        ? "bg-primary text-on-primary"
                        : "bg-secondary-container text-on-secondary-container"
                    }`}
                  >
                    {m.date}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-on-surface-variant">{m.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
