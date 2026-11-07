import { BellOff, Clock, Shirt, UtensilsCrossed } from "lucide-react";
import { Reveal } from "./Reveal";

const ADAB_ITEMS = [
  {
    icon: Shirt,
    title: "Berbusana Rapi",
    desc: "Menutup aurat secara sopan & syar'i",
  },
  {
    icon: UtensilsCrossed,
    title: "Adab Makan",
    desc: "Makan & minum sambil duduk dengan tangan kanan",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    desc: "Hadir sesuai jadwal sesi undangan",
  },
  {
    icon: BellOff,
    title: "Jaga Ketenangan",
    desc: "Khidmat saat prosesi pembacaan ayat & ijab",
  },
];

export function Adab() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-8">
      <Reveal>
        <div className="rounded-3xl bg-surface-container p-8 text-center shadow-sm sm:p-10">
          <h3 className="mb-2 font-display text-2xl font-semibold text-primary">
            Adab Walimatul &rsquo;Ursy
          </h3>
          <p className="mx-auto mb-8 max-w-xl text-sm text-on-surface-variant">
            Demi menjaga kesucian dan kenyamanan bersama, para tamu undangan dimohon
            memperhatikan adab islami berikut:
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {ADAB_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex h-full flex-col items-center rounded-2xl bg-surface-container-lowest p-4">
                  <item.icon className="mb-2 h-7 w-7 text-secondary" />
                  <span className="mb-1 font-display text-[15px] font-semibold text-primary">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.08em] text-on-surface-variant">
                    {item.desc}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
