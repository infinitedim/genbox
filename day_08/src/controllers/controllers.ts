import { validationResult } from "express-validator";
import blogModel from "../models/models";
import path from "path";
import { fileURLToPath } from "url";
import { unlink } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    e.code = 400;
    e.data = error.array();
    throw e;
  }

  if (!req.file) {
    const e = new Error("Files must be upload");
    e.code = 422;
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
      res.status(201).json({
        messege: "Successfully post new data",
        code: 201,
        data: response,
      });
    })
    .catch((e) => console.error(e));
};

const blog = (req, res) => {
  const blogId = req.params.getId;
  blogModel.findById(blogId).then((response) =>
    res.status(200).json({
      code: 200,
      status: "OK",
      messege: "Successfully get data by id",
      data: response,
    })
  );
};

const edit = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    const e = new Error("Invalid value");
    e.code = 400;
    e.data = error.array();
    throw e;
  }

  if (!req.file) {
    const e = new Error("Files must be upload");
    e.code = 422;
    throw e;
  }

  let results = {
    gambar: req.file.path,
    judul: req.body.judul,
    isi: req.body.isi,
    penulis: req.body.penulis,
  };

  const blogId = req.params.getId;
  blogModel
    .findById(blogId)
    .then((response) => {
      if (!response) {
        const err = new Error("Blog tidak ditemukan!");
        err.code(422);
      }

      response.gambar = results.gambar;
      response.judul = results.judul;
      response.isi = results.isi;
      response.penulis = results.penulis;

      response.save();
    })
    .then((response) => {
      res.status(200).json({
        status: "OK",
        code: 200,
        messege: "Successfully update data",
        data: response,
      });
    })
    .catch((e) => next(e));
};

const del = (req, res, next) => {
  const blogId = req.params.getId;
  blogModel
    .findById(blogId)
    .then((response) => {
      if (!response) {
        const err = new Error("Blog tidak ditemukan!");
        err.code(422);
      }

      deleteImage(response.gambar);
      return blogModel.findByIdAndRemove(blogId);
    })
    .then((response) => {
      res
        .status(200)
        .json({
          status: "OK",
          code: 200,
          messege: "Data deleted",
          data: response,
        })
        .catch((e) => next(e));
    });
};

const deleteImage = (filePath) => {
  filePath = path.join(__dirname + "../" + filePath);
  unlink(filePath, (e) => console.error(e));
};

export { get, post, blog, edit, del };
