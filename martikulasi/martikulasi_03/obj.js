// const data = {
//   nama: "Dimas",
//   umur: 18,
//   hobi: "nonton anime",
//   makanan: ["mie, ramen, miso"],
//   alamat: {
//     jalan: "Jalan yang lurus",
//     nomor: 12,
//     rtRw: [1, 9],
//   },
//   cetakNama: () => return this.nama,
// };

// data.tinggiBadan = "150cm"
// data.nama = "Dimas Saputra"
// data.makanan.push(data.hobi)

// console.log(data);

// ini sama saja
// console.log(this);
// console.log(window);

class Data {
  constructor(nama, umur, hobi) {
    // let this = {};
    this.nama = nama;
    this.umur = umur;
    this.hobi = hobi;
    this.cetak = () => {
      return this.nama;
    };
    // return this
  }
}

// Ini sama saja sama class yang ada diatas
// function Data(nama, umur, hobi) {
//   // let this = {};
//   this.nama = nama;
//   this.umur = umur;
//   this.hobi = hobi;
//   // return this
// }

let dimas = new Data("Dimas", 18, "Nonton anime");

console.log(dimas.cetak());

let saputra = new Data("Saputra", 18, "Nonton anime");
