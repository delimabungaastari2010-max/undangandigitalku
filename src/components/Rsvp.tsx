import { useState, type FormEvent } from "react";
import { HeartCrack, Loader2, Send, UserCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { useToast } from "./Toast";
import type { Attendance, WishInput } from "../lib/guestbook";

interface RsvpProps {
  onSubmit: (input: WishInput) => Promise<void>;
}

export function Rsvp({ onSubmit }: RsvpProps) {
  const toast = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(1);
  const [attendance, setAttendance] = useState<Attendance>("hadir");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const reset = () => {
    setName("");
    setPhone("");
    setGuests(1);
    setAttendance("hadir");
    setMessage("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      await onSubmit({
        name,
        phone,
        guests,
        attendance,
        message: message.trim() || "Semoga sakinah mawaddah warahmah.",
      });
      toast("Jazakumullah khair, konfirmasi kehadiran berhasil dikirim!");
      reset();
    } catch {
      toast("Maaf, terjadi kendala. Silakan coba kembali.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full rounded-xl bg-surface-container-low px-4 text-sm text-on-surface outline-none transition focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary";
  const labelCls = "mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-on-surface";

  const Option = ({
    value,
    label,
    icon,
  }: {
    value: Attendance;
    label: string;
    icon: React.ReactNode;
  }) => {
    const selected = attendance === value;
    return (
      <button
        type="button"
        onClick={() => setAttendance(value)}
        aria-pressed={selected}
        className={`flex items-center gap-3 rounded-xl p-3.5 text-left transition ${
          selected
            ? "bg-primary-container text-on-primary ring-2 ring-primary/30 shadow-sm"
            : "bg-surface-container-low text-on-surface hover:bg-surface-container"
        }`}
      >
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            selected ? "bg-secondary-fixed/30 text-secondary-fixed" : "bg-surface-container text-secondary"
          }`}
        >
          {icon}
        </span>
        <span className="text-sm font-semibold">{label}</span>
      </button>
    );
  };

  return (
    <section id="rsvp" className="mx-auto w-full max-w-4xl scroll-mt-28 px-6 py-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-[36px] bg-surface-container-lowest p-8 shadow-lg sm:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "radial-gradient(#0a3526 1.5px, transparent 1.5px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="mx-auto mb-10 max-w-md text-center">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
              Konfirmasi Kehadiran
            </span>
            <h2 className="font-display text-[28px] font-semibold leading-[1.25] text-primary sm:text-4xl">
              RSVP Undangan
            </h2>
            <p className="mt-2 text-sm text-on-surface-variant">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
            <div>
              <label htmlFor="rsvp-name" className={labelCls}>
                Nama Lengkap *
              </label>
              <input
                id="rsvp-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Ahmad Fauzan"
                className={`${inputCls} h-12`}
              />
            </div>

            <div>
              <label htmlFor="rsvp-phone" className={labelCls}>
                Nomor WhatsApp *
              </label>
              <input
                id="rsvp-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0812xxxxxxx"
                className={`${inputCls} h-12`}
              />
            </div>

            <div>
              <label htmlFor="rsvp-pax" className={labelCls}>
                Jumlah Tamu *
              </label>
              <select
                id="rsvp-pax"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className={`${inputCls} h-12`}
              >
                <option value={1}>1 Orang</option>
                <option value={2}>2 Orang</option>
                <option value={3}>3 Orang</option>
              </select>
            </div>

            <div>
              <span className={labelCls}>Konfirmasi Kehadiran *</span>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Option value="hadir" label="Insya Allah Hadir" icon={<UserCheck className="h-4 w-4" />} />
                <Option value="tidak_hadir" label="Mohon Maaf Belum Bisa Hadir" icon={<HeartCrack className="h-4 w-4" />} />
              </div>
            </div>

            <div>
              <label htmlFor="rsvp-message" className={labelCls}>
                Untaian Doa &amp; Ucapan Selamat
              </label>
              <textarea
                id="rsvp-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan ucapan selamat dan doa tulus Anda untuk kedua mempelai..."
                className={`${inputCls} p-4`}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-xs font-bold uppercase tracking-[0.14em] text-on-primary shadow-md transition hover:bg-primary-container disabled:opacity-70"
            >
              {sending ? (
                <Loader2 className="h-[18px] w-[18px] animate-spin" />
              ) : (
                <Send className="h-[18px] w-[18px]" />
              )}
              <span>{sending ? "Mengirim..." : "Kirim Konfirmasi Kehadiran"}</span>
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
