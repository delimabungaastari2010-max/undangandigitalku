import { useEffect, useReducer } from "react";
import { Reveal } from "./Reveal";
import { isSupabaseConfigured, timeAgo, type GuestWish } from "../lib/guestbook";

const AVATAR_STYLES = [
  "bg-primary text-on-primary",
  "bg-secondary text-on-secondary",
  "bg-tertiary-container text-on-tertiary-container",
];

function WishCard({ wish, index }: { wish: GuestWish; index: number }) {
  const hadir = wish.attendance === "hadir";
  return (
    <div className="animate-fade-in rounded-2xl bg-surface-container-low p-6 shadow-sm">
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${AVATAR_STYLES[index % AVATAR_STYLES.length]}`}
          >
            {wish.name.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <h4 className="truncate font-display text-base font-semibold leading-tight text-primary sm:text-lg">
              {wish.name}
            </h4>
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
              {timeAgo(wish.created_at)}
            </span>
          </div>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ${
            hadir
              ? "bg-primary-container text-on-primary-container"
              : "bg-surface-container-highest text-on-surface"
          }`}
        >
          {hadir ? "Insya Allah Hadir" : "Mendoakan Dari Jauh"}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-on-surface">&ldquo;{wish.message}&rdquo;</p>
    </div>
  );
}

export function Guestbook({ wishes, loaded }: { wishes: GuestWish[]; loaded: boolean }) {
  const [, forceTick] = useReducer((x: number) => x + 1, 0);

  // Segarkan label waktu relatif tiap 30 detik
  useEffect(() => {
    const id = window.setInterval(forceTick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-8">
      <Reveal>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-semibold text-primary">
              Doa &amp; Ucapan Sahabat
            </h3>
            <p className="text-sm text-on-surface-variant">
              Untaian doa penuh kehangatan dari para tamu terkasih
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-surface-container px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-secondary">
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-secondary" />
            <span>{wishes.length} Doa Terkirim</span>
          </div>
        </div>

        {/* Status koneksi basis data */}
        <div className="mb-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-outline">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isSupabaseConfigured ? "animate-pulse-soft bg-emerald-600" : "bg-amber-500"
            }`}
          />
          {isSupabaseConfigured
            ? "Terhubung ke Supabase — pembaruan realtime"
            : "Mode demo — hubungkan Supabase untuk penyimpanan cloud"}
        </div>
      </Reveal>

      <div className="max-h-[460px] space-y-4 overflow-y-auto pr-1">
        {!loaded && (
          <>
            {[0, 1].map((k) => (
              <div key={k} className="animate-pulse-soft rounded-2xl bg-surface-container p-6">
                <div className="mb-3 h-4 w-1/3 rounded-full bg-surface-container-highest" />
                <div className="h-3 w-full rounded-full bg-surface-container-highest" />
                <div className="mt-2 h-3 w-2/3 rounded-full bg-surface-container-highest" />
              </div>
            ))}
          </>
        )}
        {loaded &&
          wishes.map((wish, i) => <WishCard key={wish.id} wish={wish} index={i} />)}
      </div>
    </section>
  );
}
