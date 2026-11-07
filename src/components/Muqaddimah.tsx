import { BookOpen } from "lucide-react";
import { Reveal } from "./Reveal";

export function Muqaddimah() {
  return (
    <section id="mukadimah" className="mx-auto flex w-full max-w-4xl scroll-mt-28 flex-col items-center px-6 pt-12 text-center">
      <Reveal className="flex w-full flex-col items-center">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-secondary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Mukadimah</span>
          <div className="h-2 w-2 rounded-full bg-secondary" />
        </div>

        <h2 className="mb-4 font-display text-[28px] font-semibold leading-[1.3] text-primary sm:text-4xl">
          Assalamu&rsquo;alaikum Warahmatullahi Wabarakatuh
        </h2>
        <p className="mb-8 max-w-2xl leading-relaxed text-on-surface-variant">
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta&rsquo;ala, kami bermaksud
          menyelenggarakan syukuran walimatul &rsquo;ursy pernikahan kami, seraya memanjatkan
          puji syukur atas limpahan karunia-Nya.
        </p>

        {/* Kartu ayat suci */}
        <div className="relative flex w-full flex-col items-center overflow-hidden rounded-3xl bg-surface-container p-8 text-center shadow-sm sm:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#0a3526 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">
            <BookOpen className="h-6 w-6" />
          </div>
          <p dir="rtl" className="mb-6 max-w-3xl font-arabic text-[19px] leading-[2.4] text-primary sm:text-[22px]">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا
            وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
          </p>
          <div className="mb-6 h-px w-20 bg-secondary/30" />
          <p className="max-w-2xl text-sm italic leading-relaxed text-on-surface">
            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
            isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram
            kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada
            yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.&rdquo;
          </p>
          <span className="mt-3 block text-xs font-semibold tracking-[0.12em] text-secondary">
            (QS. Ar-Rum: 21)
          </span>
        </div>
      </Reveal>
    </section>
  );
}
