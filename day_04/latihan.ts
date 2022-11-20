// const fs = require("fs");
const readLine = require("readline");

let rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nama anda: ", (nama) => {
  console.log(`Nama anda ${nama}`);
  rl.close();
});

// let tulisan = new Uint8Array(Buffer.from("Ohayou sekai"));

// fs.writeFile("tulisan.md", tulisan, (e) => {
//   if (e) throw err;
//   console.log("udah kesimpen");
// });
