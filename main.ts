// The worst superpower, in one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const power = "Telekinesis that only works on the last chip in the bag, and only to push it deeper in.";
const limit = 140;

if ([...power].length > limit) throw new Error("line is over 140 characters");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), power);
