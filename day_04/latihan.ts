// import fs from "fs";
import { createInterface } from "readline";
import type { Interface } from "readline";

let rl: Interface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nama anda: ", (nama: string): void => {
  console.log(`Nama anda ${nama}`);
  rl.close();
});

// let tulisan: Uint8Array = new Uint8Array(Buffer.from("Ohayou sekai"));

// fs.writeFile(
//   "tulisan.md",
//   tulisan,
//   (error: NodeJS.ErrnoException | null): void =>
//     error ? console.error(error) : console.log("udah kesimpen")
// );
