import { useEffect, useState } from "react";

export interface CountState {
  d: number;
  h: number;
  m: number;
  s: number;
  /** true bila tanggal akad telah berlalu (hitung mundur -> hitung maju) */
  done: boolean;
}

export function useCountdown(targetIso: string): CountState {
  const calc = (): CountState => {
    const diff = new Date(targetIso).getTime() - Date.now();
    const done = diff < 0;
    const abs = Math.abs(diff);
    return {
      d: Math.floor(abs / 86_400_000),
      h: Math.floor(abs / 3_600_000) % 24,
      m: Math.floor(abs / 60_000) % 60,
      s: Math.floor(abs / 1000) % 60,
      done,
    };
  };

  const [state, setState] = useState<CountState>(calc);

  useEffect(() => {
    const id = window.setInterval(() => setState(calc()), 1000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetIso]);

  return state;
}
