function Bank(nama, saldo) {
  this.nama = nama;
  this.saldo = saldo;
}

Bank.prototype.setor = function (setor) {
  return setor == 0
    ? "Tidak bisa menambahkan saldo dengan 0"
    : `Saldo anda sekarang adalah ${(this.saldo += setor)}`;
};

Bank.prototype.tarik = function (tarik) {
  return tarik > this.saldo
    ? "Saldo anda tidak cukup"
    : `Anda mengambil saldo sebanyak ${tarik}
    sisa saldo anda adalah ${(this.saldo -= tarik)}`;
};

let BCA = new Bank("Dimas", 10000);

console.log(BCA.tarik(500));
