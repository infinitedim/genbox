const data = (req: any, res: any): void => {
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
};

export default data;
