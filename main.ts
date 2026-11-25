// make.fun entry: u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046
// Writes one text, at most 400 characters, to /output/entry.txt: one short rant about a small
// everyday annoyance, sharp and concrete, whose anger feels shared rather than performed.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted rant, kept here as the entry's single source of truth. The annoyance is exact (a
// lift button already lit) and the anger builds to the one thing everyone wants to say out loud.
const LINE =
  "Someone has already pressed the lift button. It is lit. I watched them press it. Then I pressed it, because standing there with my hands at my sides felt like agreeing to something. Nothing happened either time. Nothing was ever going to happen. We both knew, and we both pressed it again.";

// The gate refuses text outside 1 to 400 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 400 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
