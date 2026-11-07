-- ============================================================
--  Skema Supabase — Walimatul 'Ursy Fadhil & Rania
--  Jalankan di: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- 1) Tabel doa, ucapan & konfirmasi kehadiran tamu
create table if not exists public.guest_wishes (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) <= 120),
  phone       text check (char_length(phone) <= 32),
  guests      smallint not null default 1 check (guests between 1 and 10),
  attendance  text not null default 'hadir' check (attendance in ('hadir', 'tidak_hadir')),
  message     text not null default '' check (char_length(message) <= 600),
  created_at  timestamptz not null default now()
);

comment on table public.guest_wishes is 'RSVP + untaian doa tamu undangan Walimatul Ursy';

-- 2) Row Level Security: semua orang boleh membaca & menambah,
--    namun tidak boleh mengubah / menghapus lewat API publik.
alter table public.guest_wishes enable row level security;

create policy "siapa pun boleh membaca doa"
  on public.guest_wishes for select
  using (true);

create policy "siapa pun boleh mengirim doa"
  on public.guest_wishes for insert
  with check (true);

-- 3) Aktifkan Realtime supaya daftar doa tampil langsung (live)
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and tablename = 'guest_wishes'
  ) then
    alter publication supabase_realtime add table public.guest_wishes;
  end if;
end $$;
