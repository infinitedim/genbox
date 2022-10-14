class Serang {
  attacking(nama) {
    this.xp += 30;
    nama.hp -= this.sword;
    if (this.xp > 100) {
      this.lv++;
      this.xp %= 100;
    }

    return `Kamu menyerang ${nama.nama}, xp mu bertambah ${this.xp}, level mu sekarang adalah ${this.lv}`;
  }
}

class Sword extends Hero {
  constructor(nama) {
    super();
    this.sword = 30;
    this.nama = nama;
    this.xp = 0;
    this.hp = 100;
    this.lv = 1;
  }
}

let alucard = new Sword("Alucard", "SKill 1");
let layla = new Sword("Layla", "Ultimate");

console.log(alucard.attacking(layla));
console.log(layla);
console.log(alucard);
