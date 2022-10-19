import { validationResult } from "express-validator";
import blogModel from "../models/models";

const get = (req, res) => {
  blogModel.find().then((response) => {
    res.status(200).json({
      status: "OK",
      messege: "Successfully get data",
      code: 200,
      data: response,
    });
  });
};

const post = (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    const e = new Error("Invalid value");
    e.errorStatus = 400;
    e.data = error.array();
    throw e;
  }

  if (!req.file) {
    const e = new Error("Files must be upload");
    e.errorStatus = 422;
    throw e;
  }

  let results = {
    gambar: req.file.path,
    judul: req.body.judul,
    isi: req.body.isi,
    penulis: req.body.penulis,
  };

  const posting = new blogModel(results);

  posting
    .save()
    .then((response) => {
      res.status(200).json({
        messege: "Successfully post new data",
        code: 200,
        data: response,
      });
    })
    .catch((e) => console.error(e));
};

export { get, post };
