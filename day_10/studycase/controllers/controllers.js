import { validationResult } from "express-validator";
import Model from "../models/models";

const get = (req, res) => {
  const sql = `SELECT * FROM user`;
  Model(sql, res);
};

const post = (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    const e = new Error("Invalid value");
    e.code = 400;
    e.data = error.array();
    throw e;
  }

  let results = {
    nama: req.body.nama,
    umur: req.body.umur,
    hobi: req.body.hobi,
  };

  const sql = `INSERT INTO user (nama, umur, hobi)
            VALUES ('${results.nama}', '${results.umur}', '${results.hobi}')`;

  Model(sql, res);
};

const search = (req, res) => {
  const id = req.params.id;

  const sql = `SELECT user where id='${id}'`;
};

const edit = (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    const e = new Error("Invalid value");
    e.code = 400;
    e.data = error.array();
    throw e;
  }

  let results = {
    nama: req.body.title,
    umur: req.body.author,
    hobi: req.body.year,
  };

  const id = req.params.id;

  const sql = `UPDATE users SET nama='${results.nama}' umur='${results.umur}' hobi='${results.hobi}' where id='${id}'`;

  Model(sql, res);
};

const del = (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM users WHERE id='${id}'`;
  Model(sql, res);
};

export { get, post, search, edit, del };
