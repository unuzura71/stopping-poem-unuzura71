// A short poem about agency: the power to stop and to stay.
// Writes the poem to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic: no network, no randomness, no time — same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "Almost, I pressed send. Then I didn't.",
  "The cursor blinked. The world went on",
  "without my answer \u2014 and that was the answer.",
  "",
  "Stopping is not losing. It is the hand",
  "that hovers, chooses, and stays \u2014",
  "keeping the power, not spending it,",
  "holding the door instead of pushing through.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: the entry must be 1–280 Unicode code points. Fail loudly if it is not.
const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem is ${codePoints} code points, must be 1–280`);
}
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
