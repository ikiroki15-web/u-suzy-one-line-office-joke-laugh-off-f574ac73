import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I asked IT for a second monitor; they gave me a second job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
