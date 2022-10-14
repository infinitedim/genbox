function Bank(nama, saldo) {
  this.nama = nama;
  this.saldo = saldo;

  this.setor = function (setor) {
    return setor == 0
      ? "Tidak bisa menambahkan saldo dengan 0"
      : `Saldo anda sekarang adalah ${(this.saldo += setor)}`;
  };

  this.tarik = function (tarik) {
    return tarik > this.saldo
      ? "Saldo anda tidak cukup"
      : `Anda mengambil saldo sebanyak ${tarik}
      sisa saldo anda adalah ${(saldo -= tarik)}`;
  };
}

let BCA = new Bank("Dimas", 10000);

console.log(BCA.setor(500));
