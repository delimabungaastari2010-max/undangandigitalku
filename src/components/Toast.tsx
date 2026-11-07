import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { CheckCircle2 } from "lucide-react";

const ToastCtx = createContext<(msg: string) => void>(() => undefined);

export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ msg: string; key: number } | null>(null);
  const show = useCallback((msg: string) => setToast({ msg, key: Date.now() }), []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2800);
    return () => window.clearTimeout(t);
  }, [toast]);

  return (
    <ToastCtx.Provider value={show}>
      {children}
      {toast && (
        <div
          key={toast.key}
          className="fixed top-24 right-4 sm:right-6 z-[90] flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-full bg-primary px-5 py-3 text-on-primary shadow-xl animate-toast-in"
          role="status"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary-fixed" />
          <span className="text-sm font-medium leading-snug">{toast.msg}</span>
        </div>
      )}
    </ToastCtx.Provider>
  );
}
