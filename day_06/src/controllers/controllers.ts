const get = (req: any, res: any): void => {
  res.status(200).json({
    status: "OK",
    code: 200,
    messege: "Data berhasil didapat",
    data: [
      {
        nama: "Dimas",
        username: "drachozhu",
        ttl: "Jakarta, 2-Juli-2004",
        skill: "Coding",
        desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsum
        neque nisi vero saepe repudiandae molestias eaque ex aliquid. Dolorem
        ullam at enim? Itaque sit fuga beatae iusto tenetur molestiae?`,
        icon: "ri-user-fill",
      },
    ],
  });
};

const post = (req: any, res: any): void => {
  res.status(201).json({
    Status: "OK",
    Code: 200,
    Messege: "Data berhasil di upload",
    data: [
      {
        nama: req.body.nama,
        umur: req.body.umur,
        hobi: req.body.hobi,
      },
    ],
  });
};

export { get, post };
