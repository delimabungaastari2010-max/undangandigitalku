import { supabase, isSupabaseConfigured } from "./supabase";

export type Attendance = "hadir" | "tidak_hadir";

export interface GuestWish {
  id: string;
  name: string;
  attendance: Attendance;
  message: string;
  guests?: number | null;
  created_at: string;
}

export interface WishInput {
  name: string;
  phone?: string;
  guests: number;
  attendance: Attendance;
  message: string;
}

const TABLE = "guest_wishes";
const LS_KEY = "fr-walimah-wishes";

/* ——— Doa awal agar halaman terasa hidup saat pertama dibuka ——— */
function seedWishes(): GuestWish[] {
  const t = (mins: number) => new Date(Date.now() - mins * 60_000).toISOString();
  return [
    {
      id: "seed-1",
      name: "Ustadz Hendra Pratama & Keluarga",
      attendance: "hadir",
      message:
        "Barakallahu laka wa baraka 'alaika wa jama'a bainakuma fii khair. Selamat untuk Fadhil dan Rania. Semoga Allah menganugerahkan keturunan yang shalih dan shalihah serta rumah tangga sakinah mawaddah warahmah.",
      guests: 3,
      created_at: t(10),
    },
    {
      id: "seed-2",
      name: "dr. Anisa Rahmawati",
      attendance: "tidak_hadir",
      message:
        "Maa syaa Allah tabarakallah, Rania sayang ikut berbahagia sekali! Mohon maaf belum bisa hadir secara langsung karena sedang bertugas, namun doaku selalu menyertai kebahagiaan kalian berdua sampai surga kelak.",
      guests: 1,
      created_at: t(60),
    },
    {
      id: "seed-3",
      name: "Bima Wicaksono, M.T.",
      attendance: "hadir",
      message:
        "Selamat menempuh babak kehidupan yang baru saudaraku Fadhil! Semoga langkahmu memimpin keluarga senantiasa diberi petunjuk dan kemudahan oleh Allah Ta'ala.",
      guests: 2,
      created_at: t(180),
    },
  ];
}

/* ——— Fallback lokal (mode demo tanpa Supabase) ——— */
function readLocal(): GuestWish[] {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as GuestWish[]) : [];
  } catch {
    return [];
  }
}

function writeLocal(rows: GuestWish[]) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(rows.slice(0, 60)));
  } catch {
    /* abaikan */
  }
}

/** Ambil doa & ucapan terbaru (Supabase -> fallback lokal + seed). */
export async function fetchWishes(): Promise<GuestWish[]> {
  if (supabase) {
    const { data, error } = await supabase
      .from(TABLE)
      .select("id,name,attendance,message,guests,created_at")
      .order("created_at", { ascending: false })
      .limit(60);
    if (!error && data) {
      return data.length > 0 ? (data as GuestWish[]) : seedWishes();
    }
  }
  return [...readLocal(), ...seedWishes()];
}

/** Simpan doa/RSVP baru. Mengembalikan baris yang tersimpan. */
export async function submitWish(input: WishInput): Promise<GuestWish> {
  if (supabase) {
    const { data, error } = await supabase
      .from(TABLE)
      .insert({
        name: input.name.trim(),
        phone: input.phone?.trim() || null,
        guests: input.guests,
        attendance: input.attendance,
        message: input.message.trim(),
      })
      .select("id,name,attendance,message,guests,created_at")
      .single();
    if (!error && data) return data as GuestWish;
  }
  const row: GuestWish = {
    id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: input.name.trim(),
    attendance: input.attendance,
    message: input.message.trim(),
    guests: input.guests,
    created_at: new Date().toISOString(),
  };
  writeLocal([row, ...readLocal()]);
  return row;
}

/**
 * Langganan realtime (Supabase Realtime). Pada mode demo,
 * mendengarkan event `storage` antar-tab browser.
 */
export function subscribeWishes(onInsert: (row: GuestWish) => void): () => void {
  if (supabase) {
    const client = supabase;
    const channel = client
      .channel("guest_wishes_live")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: TABLE },
        (payload) => onInsert(payload.new as GuestWish)
      )
      .subscribe();
    return () => {
      void client.removeChannel(channel);
    };
  }
  const handler = (e: StorageEvent) => {
    if (e.key === LS_KEY && e.newValue) {
      try {
        const rows = JSON.parse(e.newValue) as GuestWish[];
        if (rows[0]) onInsert(rows[0]);
      } catch {
        /* abaikan */
      }
    }
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

/* ——— Util ——— */
export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const menit = Math.floor(diff / 60_000);
  if (menit < 1) return "Baru saja";
  if (menit < 60) return `${menit} Menit yang lalu`;
  const jam = Math.floor(menit / 60);
  if (jam < 24) return `${jam} Jam yang lalu`;
  const hari = Math.floor(jam / 24);
  return `${hari} Hari yang lalu`;
}

export { isSupabaseConfigured };
