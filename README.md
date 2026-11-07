# Fadhil & Rania — Walimatul 'Ursy

Undangan pernikahan digital (React + Vite + Tailwind CSS v4 + Supabase) dengan RSVP & buku tamu
doa realtime, penghitung waktu, galeri, hadiah digital, dan instrumen gambus generatif.

## Menjalankan

```bash
npm install
npm run dev
```

## Menghubungkan Supabase (Database RSVP & Doa)

1. Buat proyek di [supabase.com](https://supabase.com) (gratis).
2. Buka **SQL Editor → New query**, tempel seluruh isi [`supabase/schema.sql`](supabase/schema.sql), lalu **Run**.
   Skrip membuat tabel `public.guest_wishes`, kebijakan RLS (baca/tulis publik), serta mengaktifkan Realtime.
3. Salin `.env.example` menjadi `.env`, lalu isi:

   ```env
   VITE_SUPABASE_URL=https://xxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
   ```

   Kredensial ada di **Project Settings → Data API** (URL) dan **API Keys** (`anon public`).
4. Restart `npm run dev`. Indikator pada bagian "Doa & Ucapan Sahabat" berubah menjadi
   *Terhubung ke Supabase — pembaruan realtime*.

> Tanpa `.env`, aplikasi tetap berfungsi penuh dalam **mode demo**: doa tersimpan di
> `localStorage` browser dan tersinkron antar-tab.

## Personalisasi Tamu

Tambahkan query `?to=` pada tautan undangan, contoh:
`https://undangananda.vercel.app/?to=Keluarga%20Besar%20Hasyim` — nama tamu tampil pada sampul.

## Struktur

```
src/
├── lib/          # supabase client, data layer guestbook, musik generatif, clipboard
├── hooks/        # useCountdown
└── components/   # Header, Cover, Muqaddimah, Couple, Story, Countdown, Events,
                  # Gallery, Dua, Gift, Rsvp, Guestbook, Adab, Closing, Dock, …
```
