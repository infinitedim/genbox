const get = (req: any, res: any): void => {
  res.status(200).json({
    nama: "Dimas",
    umur: 666,
    hobi: "Main hp",
  });
};

const post = (req: any, res: any): void => {
  res.status(200).json({
    nama: req.body.nama,
    numur: req.body.umur,
    hobi: req.body.hobi,
  });
};

export { get, post };
