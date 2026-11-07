/**
 * Mesin ambient generatif bergaya petikan gambus/oud — tanpa berkas audio.
 * Memakai Web Audio API: petikan triangle-wave dengan delay bercabang
 * serta drone lembut nada D. Volume dijaga tetap teduh.
 */

const SCALE = [146.83, 174.61, 196.0, 220.0, 261.63, 293.66, 349.23, 392.0]; // D minor pentatonik-ish

class OudAmbience {
  private ac: AudioContext | null = null;
  private master: GainNode | null = null;
  private send: GainNode | null = null;
  private drones: OscillatorNode[] = [];
  private timer: number | null = null;
  private idx = 3;
  private live = false;

  isPlaying() {
    return this.live;
  }

  start() {
    if (this.live) return;
    const AC: typeof AudioContext | undefined =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;

    const ac = new AC();
    const master = ac.createGain();
    master.gain.value = 0;
    master.connect(ac.destination);

    // Ruang gema: delay feedback berlangsu
    const delay = ac.createDelay(2);
    delay.delayTime.value = 0.42;
    const feedback = ac.createGain();
    feedback.gain.value = 0.38;
    const damp = ac.createBiquadFilter();
    damp.type = "lowpass";
    damp.frequency.value = 1800;
    const send = ac.createGain();
    send.gain.value = 0.5;
    send.connect(delay);
    delay.connect(damp);
    damp.connect(feedback);
    feedback.connect(delay);
    damp.connect(master);

    // Drone lembut
    [73.42, 146.83].forEach((freq, i) => {
      const osc = ac.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      const g = ac.createGain();
      g.gain.value = i === 0 ? 0.045 : 0.022;
      osc.connect(g);
      g.connect(master);
      osc.start();
      this.drones.push(osc);
    });

    this.ac = ac;
    this.master = master;
    this.send = send;
    this.live = true;

    master.gain.linearRampToValueAtTime(0.6, ac.currentTime + 1.4);

    const loop = () => {
      if (!this.live || !this.ac) return;
      const now = this.ac.currentTime;
      this.pluck(this.pickNote(), now);
      if (Math.random() < 0.16) this.pluck(73.42, now + 0.02, 0.55);
      if (Math.random() < 0.1) this.pluck(this.pickNote(), now + 0.18, 0.5); // sapuan ganda
      this.timer = window.setTimeout(loop, 440 + Math.random() * 980);
    };
    loop();
  }

  stop() {
    if (!this.live) return;
    this.live = false;
    if (this.timer) window.clearTimeout(this.timer);
    const ac = this.ac;
    if (ac && this.master) {
      this.master.gain.cancelScheduledValues(ac.currentTime);
      this.master.gain.setTargetAtTime(0, ac.currentTime, 0.25);
    }
    this.drones.forEach((o) => {
      try {
        o.stop(ac ? ac.currentTime + 0.8 : 0);
      } catch {
        /* sudah berhenti */
      }
    });
    this.drones = [];
    window.setTimeout(() => {
      void ac?.close().catch(() => undefined);
    }, 950);
    this.ac = null;
    this.master = null;
    this.send = null;
  }

  private pickNote(): number {
    const steps = [-2, -1, -1, 1, 1, 2];
    const step = steps[Math.floor(Math.random() * steps.length)];
    this.idx = Math.min(SCALE.length - 1, Math.max(0, this.idx + step));
    return SCALE[this.idx];
  }

  private pluck(freq: number, when: number, vol = 1) {
    if (!this.ac || !this.master || !this.send) return;
    const ac = this.ac;
    const osc = ac.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = freq + (Math.random() * 4 - 2);

    const g = ac.createGain();
    const peak = 0.2 * vol;
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(peak, when + 0.016);
    g.gain.exponentialRampToValueAtTime(0.0001, when + 1.15);

    const lp = ac.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 2400;

    osc.connect(g);
    g.connect(lp);
    lp.connect(this.master);
    lp.connect(this.send);
    osc.start(when);
    osc.stop(when + 1.25);
  }
}

export const oud = new OudAmbience();
