// Resizes and compresses photos for the website.
// Usage:  1) put the original photos in a folder called raw-photos/ (project root)
//         2) npm install -D sharp
//         3) node scripts/optimize-photos.mjs
// Output goes to src/assets/progress/ as progress-01.webp, progress-02.webp, ...
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const IN = "pod-photos";
const OUT = "src/assets/progress";

await mkdir(OUT, { recursive: true });

const files = (await readdir(IN))
  .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

let n = 0;
for (const f of files) {
  n++;
  const out = `progress-${String(n).padStart(2, "0")}.webp`;
  await sharp(path.join(IN, f))
    .rotate() // respects the phone's orientation data
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(OUT, out));
  console.log(`${f} -> ${out}`);
}
console.log(`Done: ${n} photos`);
