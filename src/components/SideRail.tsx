import { ChevronUp, UserCheck } from "lucide-react";

export function SideRail() {
  return (
    <div className="fixed right-6 top-28 z-40 hidden flex-col gap-2.5 sm:flex">
      <a
        href="#rsvp"
        title="Konfirmasi RSVP"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container shadow-md transition hover:scale-110"
      >
        <UserCheck className="h-5 w-5" />
      </a>
      <button
        type="button"
        title="Kembali ke Atas"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high text-on-surface shadow-md transition hover:scale-110"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
}
