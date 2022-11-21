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

export default get;
