import {
  CalendarDays,
  CircleParking,
  Clock,
  Hand,
  Map,
  MapPin,
  Navigation,
  PartyPopper,
} from "lucide-react";
import { Reveal } from "./Reveal";
import {
  HIJRI_LABEL,
  MAP_AKAD_URL,
  MAP_EMBED_URL,
  MAP_RESEPSI_URL,
  WEDDING_DATE_LABEL,
} from "../lib/constants";

interface RowProps {
  icon: React.ReactNode;
  title: string;
  sub?: string;
  hint?: string;
}

function InfoRow({ icon, title, sub, hint }: RowProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 text-secondary">{icon}</span>
      <div>
        <p className="text-sm font-semibold text-on-surface">{title}</p>
        {sub && <p className="text-sm text-on-surface-variant">{sub}</p>}
        {hint && <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-outline">{hint}</p>}
      </div>
    </div>
  );
}

export function Events() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-14">
      <Reveal className="mb-10 text-center">
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
          Rangkaian Acara
        </span>
        <h2 className="font-display text-[28px] font-semibold leading-[1.25] text-primary sm:text-4xl">
          Waktu &amp; Tempat Pelaksanaan
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Akad Nikah */}
        <Reveal>
          <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-surface-container-lowest p-8 shadow-md sm:p-10">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Hand className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-surface-container-high px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-secondary">
                Khidmat &amp; Sakral
              </span>
            </div>
            <div>
              <h3 className="mb-2 font-display text-2xl font-semibold text-primary">Akad Nikah</h3>
              <p className="mb-6 text-sm text-on-surface-variant">
                Prosesi ijab qabul perjanjian kokoh (Misaqan Ghaliza) di hadapan penghulu dan saksi.
              </p>
              <div className="mb-8 space-y-4">
                <InfoRow
                  icon={<CalendarDays className="h-5 w-5" />}
                  title={WEDDING_DATE_LABEL}
                  hint={HIJRI_LABEL}
                />
                <InfoRow
                  icon={<Clock className="h-5 w-5" />}
                  title="08.00 - 10.00 WIB"
                  hint="Diharapkan hadir 15 menit sebelum acara"
                />
                <InfoRow
                  icon={<MapPin className="h-5 w-5" />}
                  title="Masjid Raya Al-Ukhuwah"
                  sub="Ballroom Sakinah, Lantai Utama"
                  hint="Jl. Diponegoro No. 45, Kota Bandung"
                />
              </div>
            </div>
            <a
              href={MAP_AKAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-surface-container py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-on-surface transition-all hover:bg-primary hover:text-on-primary"
            >
              <Map className="h-[18px] w-[18px]" />
              <span>Petunjuk Lokasi Google Maps</span>
            </a>
          </div>
        </Reveal>

        {/* Resepsi */}
        <Reveal delay={120}>
          <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-surface-container-lowest p-8 shadow-md sm:p-10">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                <PartyPopper className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-on-secondary-container">
                Walimatul &rsquo;Ursy
              </span>
            </div>
            <div>
              <h3 className="mb-2 font-display text-2xl font-semibold text-primary">Resepsi Pernikahan</h3>
              <p className="mb-6 text-sm text-on-surface-variant">
                Jamuan tasyakuran ramah tamah bersama keluarga, sanak kerabat, dan sahabat terhormat.
              </p>
              <div className="mb-8 space-y-4">
                <InfoRow
                  icon={<CalendarDays className="h-5 w-5" />}
                  title={WEDDING_DATE_LABEL}
                  hint="Sesi Siang Penuh Keakraban"
                />
                <InfoRow
                  icon={<Clock className="h-5 w-5" />}
                  title="11.00 - 14.30 WIB"
                  hint="Pemberian ucapan selamat & santap siang"
                />
                <InfoRow
                  icon={<MapPin className="h-5 w-5" />}
                  title="Grand Emerald Sanctuary Garden"
                  sub="Glass Pavillion & Courtyard"
                  hint="Jl. Juanda No. 88, Kota Bandung"
                />
              </div>
            </div>
            <a
              href={MAP_RESEPSI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-on-primary shadow-sm transition-all hover:bg-primary-container"
            >
              <Navigation className="h-[18px] w-[18px]" />
              <span>Buka Navigasi Rute</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Peta tersemat */}
      <Reveal delay={100}>
        <div className="mt-8 overflow-hidden rounded-3xl bg-surface-container shadow-md">
          <iframe
            title="Peta lokasi venue pernikahan di Kota Bandung"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full border-0 [filter:saturate(0.85)_sepia(0.12)]"
            allowFullScreen
          />
          <div className="flex flex-wrap items-center justify-between gap-4 bg-surface-container-low p-4">
            <div className="flex items-center gap-2">
              <CircleParking className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-sm text-on-surface">
                Tersedia area parkir luas &amp; layanan valet gratis untuk para tamu undangan.
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-secondary">
              Dress Code: Earth Tone / Modest Emerald
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
