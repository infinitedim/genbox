class Attack {
  attacking(nama) {
    nama.hp -= 20;
    this.xp += this.att;
    if (this.xp > 100) {
      this.lv++;
      this.xp %= 100;
    }

    return `Kamu menyerang ${nama.nama}, xp mu bertambah ${this.xp}, level mu sekarang adalah ${this.lv}`;
  }
}

module.exports = Attack;
