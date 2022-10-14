/* eslint-disable no-return-assign */
const Attack = require("./att");

class Player extends Attack {
  constructor(nama) {
    super();
    this.att = 30;
    this.nama = nama;
    this.xp = 0;
    this.hp = 100;
    this.lv = 1;
  }

  attacked(nama) {
    this.hp -= 20;
    nama.xp += this.att;
    return this.hp <= 0
      ? `Kamu diserang ${nama.nama}, Kamu kalah`
      : `Kamu diserang ${nama.nama}, hp mu berkurang ${this.att}`;
  }
}

const alucard = new Player("Alucard");
const layla = new Player("Layla");

console.log(alucard.attacking(layla));
console.log(alucard.attacked(layla));
console.log(alucard);
console.log(layla);
