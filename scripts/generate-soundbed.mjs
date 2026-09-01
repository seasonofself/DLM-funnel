/**
 * Blue — the theta sound bed generator.
 *
 * Synthesizes the speaker-safe, Soaak-style frequency bed from scratch
 * (pure Node — no ffmpeg, no libraries) and writes a .wav you can play.
 *
 * The recipe, in plain English:
 *   • A 528 Hz tone — the "transformation" solfeggio frequency — as the
 *     audible musical root.
 *   • A softer 396 Hz companion a calming fourth below it, so it sounds
 *     like a gentle chord instead of a bare beep.
 *   • Both of those PULSE 7 times a second (theta / isochronic). Because
 *     the pulse is baked into one tone (not split between your two ears
 *     like binaural beats), it survives a phone speaker — no headphones
 *     needed. This is the Soaak-style trick.
 *   • A warm 132 Hz drone underneath for body.
 *   • A soft fade in and out, kept quiet on purpose (this sits UNDER the
 *     voice later).
 *
 * Run it:   node scripts/generate-soundbed.mjs
 * Output:   public/blue/theta-bed.wav   (open /blue/sound to hear it)
 *
 * Charlotte: every knob you'd want to turn is in CONFIG below.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

/* ─────────────── CONFIG — tweak freely ─────────────── */
const CONFIG = {
  durationSec: 120, // length of this preview clip
  sampleRate: 44100,
  outPath: "public/blue/theta-bed.wav",

  thetaHz: 7, // the entrainment pulse (theta = drowsy, edge-of-sleep)
  pulseDepth: 0.55, // how strong the pulse is (0 = none, 1 = full on/off)

  // The audible layers: { freq in Hz, level 0..1, pulsed? }
  layers: [
    { freq: 528, level: 0.5, pulsed: true }, // solfeggio "transformation"
    { freq: 396, level: 0.32, pulsed: true }, // calming companion tone
    { freq: 132, level: 0.16, pulsed: false }, // warm steady drone (body)
  ],

  fadeInSec: 4,
  fadeOutSec: 6,
  targetPeak: 0.5, // final loudness ceiling (~ -6 dB) — gentle on purpose
};

/* ─────────────── synthesis ─────────────── */
function generate() {
  const { durationSec, sampleRate } = CONFIG;
  const n = Math.floor(durationSec * sampleRate);
  const samples = new Float64Array(n);
  const twoPi = Math.PI * 2;

  for (let i = 0; i < n; i++) {
    const t = i / sampleRate;

    // Smooth isochronic envelope: oscillates between (1-depth) and 1 at
    // thetaHz, using a raised cosine so it breathes instead of clicking.
    const pulse =
      1 - CONFIG.pulseDepth * (0.5 + 0.5 * Math.cos(twoPi * CONFIG.thetaHz * t));

    let s = 0;
    for (const layer of CONFIG.layers) {
      const tone = Math.sin(twoPi * layer.freq * t) * layer.level;
      s += layer.pulsed ? tone * pulse : tone;
    }
    samples[i] = s;
  }

  // Fades (gentle, equal-power-ish via simple linear ramp).
  applyFade(samples, sampleRate);

  // Normalize to the target ceiling so it's never harsh and never clips.
  normalize(samples, CONFIG.targetPeak);

  return samples;
}

function applyFade(samples, sampleRate) {
  const inN = Math.floor(CONFIG.fadeInSec * sampleRate);
  const outN = Math.floor(CONFIG.fadeOutSec * sampleRate);
  const total = samples.length;
  for (let i = 0; i < inN; i++) samples[i] *= i / inN;
  for (let i = 0; i < outN; i++) {
    samples[total - 1 - i] *= i / outN;
  }
}

function normalize(samples, targetPeak) {
  let peak = 0;
  for (let i = 0; i < samples.length; i++) {
    const a = Math.abs(samples[i]);
    if (a > peak) peak = a;
  }
  if (peak === 0) return;
  const gain = targetPeak / peak;
  for (let i = 0; i < samples.length; i++) samples[i] *= gain;
}

/* ─────────────── WAV writer (16-bit PCM mono) ─────────────── */
function writeWav(samples, sampleRate, path) {
  const numChannels = 1;
  const bitsPerSample = 16;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const byteRate = sampleRate * blockAlign;
  const dataSize = samples.length * blockAlign;
  const buffer = Buffer.alloc(44 + dataSize);

  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16); // PCM chunk size
  buffer.writeUInt16LE(1, 20); // audio format = PCM
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(bitsPerSample, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);

  let offset = 44;
  for (let i = 0; i < samples.length; i++) {
    let v = Math.max(-1, Math.min(1, samples[i]));
    buffer.writeInt16LE((v * 32767) | 0, offset);
    offset += 2;
  }

  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, buffer);
  return dataSize;
}

/* ─────────────── run ─────────────── */
const samples = generate();
const bytes = writeWav(samples, CONFIG.sampleRate, CONFIG.outPath);
const mb = (bytes / 1024 / 1024).toFixed(1);
console.log(
  `✓ Wrote ${CONFIG.outPath} — ${CONFIG.durationSec}s, ${mb} MB\n` +
    `  ${CONFIG.thetaHz}Hz theta pulse · layers: ${CONFIG.layers
      .map((l) => l.freq + "Hz")
      .join(", ")}\n` +
    `  Hear it at http://localhost:3000/blue/sound`
);
