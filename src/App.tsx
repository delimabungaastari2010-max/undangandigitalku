import { useCallback, useEffect, useState } from "react";
import { ToastProvider } from "./components/Toast";
import { Header } from "./components/Header";
import { Cover } from "./components/Cover";
import { Muqaddimah } from "./components/Muqaddimah";
import { Couple } from "./components/Couple";
import { Story } from "./components/Story";
import { Countdown } from "./components/Countdown";
import { Events } from "./components/Events";
import { Gallery } from "./components/Gallery";
import { Dua } from "./components/Dua";
import { Gift } from "./components/Gift";
import { Rsvp } from "./components/Rsvp";
import { Guestbook } from "./components/Guestbook";
import { Adab } from "./components/Adab";
import { Closing } from "./components/Closing";
import { Dock } from "./components/Dock";
import { SideRail } from "./components/SideRail";
import { Footer } from "./components/Footer";
import {
  fetchWishes,
  submitWish,
  subscribeWishes,
  type GuestWish,
  type WishInput,
} from "./lib/guestbook";
import { oud } from "./lib/sound";

function Root() {
  const [wishes, setWishes] = useState<GuestWish[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    let alive = true;
    fetchWishes().then((rows) => {
      if (alive) {
        setWishes(rows);
        setLoaded(true);
      }
    });
    const unsubscribe = subscribeWishes((row) => {
      setWishes((prev) => (prev.some((w) => w.id === row.id) ? prev : [row, ...prev]));
    });
    return () => {
      alive = false;
      unsubscribe();
    };
  }, []);

  const handleSubmit = useCallback(async (input: WishInput) => {
    const row = await submitWish(input);
    setWishes((prev) => (prev.some((w) => w.id === row.id) ? prev : [row, ...prev]));
  }, []);

  const toggleMusic = useCallback(() => {
    setMusicOn((on) => {
      const next = !on;
      if (next) oud.start();
      else oud.stop();
      return next;
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-surface text-on-surface">
      <Header />
      <main className="w-full">
        <Cover />
        <Muqaddimah />
        <Couple />
        <Story />
        <Countdown />
        <Events />
        <Gallery />
        <Dua />
        <Gift />
        <Rsvp onSubmit={handleSubmit} />
        <Guestbook wishes={wishes} loaded={loaded} />
        <Adab />
        <Closing />
      </main>
      <SideRail />
      <Dock musicOn={musicOn} onToggleMusic={toggleMusic} />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <Root />
    </ToastProvider>
  );
}
