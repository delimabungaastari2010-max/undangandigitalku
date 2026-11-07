import { Heart } from "lucide-react";
import { BRIDE, GROOM } from "../lib/constants";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low pb-28 pt-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-6 text-center lg:px-12">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
          <Heart className="h-[18px] w-[18px]" fill="currentColor" />
        </div>
        <p dir="rtl" className="mt-2 font-arabic text-lg leading-[2.1] text-primary sm:text-[22px]">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
        </p>
        <p className="max-w-xl text-sm text-on-surface-variant">
          &ldquo;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan
          untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram
          kepadanya.&rdquo; (QS. Ar-Rum: 21)
        </p>
        <div className="my-2 h-px w-24 bg-surface-container-highest" />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
          &copy; Walimatul &rsquo;Ursy {GROOM.short} &amp; {BRIDE.short} &bull; Baraka Allahu Lakuma
        </p>
      </div>
    </footer>
  );
}
