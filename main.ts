import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const text =
  "You will never hold this stone. It sits in a pocket, warm from a hand, smooth from years of turning. The hand never knew why it kept it. Tonight it lies on the table, the pocket empty, and you are still turning it over, wondering who it belonged to first — the hand, or you.";

const outputPath = "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, text, "utf8");
