import { Copy, Gift as GiftIcon, Landmark } from "lucide-react";
import { Reveal } from "./Reveal";
import { useToast } from "./Toast";
import { copyText } from "../lib/clipboard";
import { BANK_ACCOUNTS, GIFT_ADDRESS } from "../lib/constants";

export function Gift() {
  const toast = useToast();

  const handleCopy = async (text: string, label: string) => {
    const ok = await copyText(text);
    toast(ok ? `${label} berhasil disalin ke clipboard!` : `Gagal menyalin ${label.toLowerCase()}`);
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-8">
      <Reveal className="mx-auto mb-10 max-w-xl text-center">
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
          Tanda Kasih
        </span>
        <h2 className="font-display text-[28px] font-semibold leading-[1.25] text-primary sm:text-4xl">
          Dompet Digital &amp; Hadiah
        </h2>
        <p className="mt-2 text-sm text-on-surface-variant">
          Doa restu Anda merupakan hadiah terindah bagi kami. Namun apabila Anda berkenan
          memberikan tanda kasih, kami menyediakan sarana cashless di bawah ini:
        </p>
      </Reveal>

      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {BANK_ACCOUNTS.map((acc, i) => (
          <Reveal key={acc.number} delay={i * 100}>
            <div className="group relative flex h-full flex-col justify-between rounded-3xl bg-surface-container-lowest p-7 shadow-md transition hover:shadow-lg">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className={`rounded-full bg-surface-container px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] ${i === 0 ? "text-primary" : "text-secondary"}`}>
                    {acc.bank}
                  </span>
                  <Landmark className="h-6 w-6 text-secondary" />
                </div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                  Nomor Rekening
                </p>
                <p className="tnum font-display text-2xl font-semibold tracking-wider text-primary">
                  {acc.number}
                </p>
                <p className="mt-1 text-sm text-on-surface-variant">
                  a.n. <strong>{acc.holder}</strong>
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(acc.number, `Nomor Rekening ${acc.short}`)}
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-surface-container-high py-3 text-xs font-bold uppercase tracking-[0.1em] text-on-surface transition ${
                  i === 0 ? "hover:bg-primary hover:text-on-primary" : "hover:bg-secondary hover:text-on-secondary"
                }`}
              >
                <Copy className="h-[18px] w-[18px]" />
                <span>Salin Nomor Rekening</span>
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-surface-container p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container">
              <GiftIcon className="h-6 w-6" />
            </div>
            <div>
              <h4 className="mb-1 font-display text-lg font-semibold tracking-[0.03em] text-primary">
                Kirim Hadiah Fisik / Kado
              </h4>
              <p className="max-w-lg text-sm text-on-surface-variant">
                Kediaman Mempelai: {GIFT_ADDRESS}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCopy(GIFT_ADDRESS, "Alamat pengiriman kado")}
            className="flex shrink-0 items-center gap-2 rounded-full bg-surface-container-lowest px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-on-surface shadow-sm transition hover:bg-primary hover:text-on-primary"
          >
            <Copy className="h-[18px] w-[18px]" />
            <span>Salin Alamat</span>
          </button>
        </div>
      </Reveal>
    </section>
  );
}
