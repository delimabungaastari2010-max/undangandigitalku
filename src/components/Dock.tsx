import { MailOpen, Music, Share2, VolumeX } from "lucide-react";

interface DockProps {
  musicOn: boolean;
  onToggleMusic: () => void;
}

function EqualizerBars({ playing }: { playing: boolean }) {
  const base = "w-0.5 origin-bottom rounded-full bg-secondary-fixed";
  return (
    <span className="flex h-3 items-end gap-0.5">
      <span className={`${base} h-3 ${playing ? "animate-eq-1" : ""}`} />
      <span className={`${base} h-2 ${playing ? "animate-eq-2" : ""}`} />
      <span className={`${base} h-2.5 ${playing ? "animate-eq-3" : ""}`} />
    </span>
  );
}

export function Dock({ musicOn, onToggleMusic }: DockProps) {
  const shareWhatsApp = () => {
    const url = window.location.href;
    const text =
      "Assalamu'alaikum warahmatullah. Dengan hormat, kami mengundang Bapak/Ibu/Saudara/i ke Walimatul 'Ursy Fadhil & Rania — Ahad, 24 Agustus 2025 di Bandung. Silakan buka undangan digital berikut: ";
    window.open(`https://wa.me/?text=${encodeURIComponent(text + url)}`, "_blank", "noopener");
  };

  return (
    <aside className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center px-4">
      <div className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-surface-container-lowest/90 px-4 py-2.5 shadow-[0_8px_24px_-4px_rgba(36,76,59,0.18),0_2px_6px_0_rgba(198,166,107,0.25)] backdrop-blur-xl">
        {/* Musik */}
        <button
          type="button"
          onClick={onToggleMusic}
          aria-label="Nyalakan atau hentikan instrumen islami"
          className={`flex items-center gap-2.5 rounded-full px-3.5 py-2 transition-all ${
            musicOn
              ? "bg-primary text-on-primary hover:bg-primary-container"
              : "bg-primary/90 text-on-primary hover:bg-primary"
          }`}
        >
          {musicOn ? <VolumeX className="h-[18px] w-[18px]" /> : <Music className="h-[18px] w-[18px]" />}
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.16em] sm:inline">
            {musicOn ? "Sedang Berdendang" : "Peaceful Oud"}
          </span>
          <EqualizerBars playing={musicOn} />
        </button>

        <div className="h-5 w-px bg-surface-variant" />

        {/* Bagikan */}
        <button
          type="button"
          onClick={shareWhatsApp}
          aria-label="Bagikan undangan melalui WhatsApp"
          className="flex items-center gap-1.5 rounded-full bg-surface-container-high px-3.5 py-2 text-xs font-semibold tracking-[0.08em] text-on-surface transition-all hover:bg-surface-variant"
        >
          <Share2 className="h-[18px] w-[18px] text-secondary" />
          <span className="hidden sm:inline">Bagikan WhatsApp</span>
        </button>

        {/* RSVP */}
        <a
          href="#rsvp"
          className="flex items-center gap-1.5 rounded-full bg-secondary-container px-3.5 py-2 text-xs font-semibold tracking-[0.08em] text-on-secondary-container transition-all hover:bg-secondary-fixed"
        >
          <MailOpen className="h-[18px] w-[18px]" />
          <span>Konfirmasi Kehadiran</span>
        </a>
      </div>
    </aside>
  );
}
