// Deklarasi fungsi
const data =
  ("/data",
  (req, res) => {
    res.status(200).json({
      status: "OK",
      code: 200,
      messege: "Data Berhasil Di get",
      data: {
        nama: "Dimas",
        umur: 18,
        hobi: "Nonton Anime",
      },
    });
  });

// Export fungsi
export default data;
