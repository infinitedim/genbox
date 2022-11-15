import { validationResult } from "express-validator";
import Model from "../models/models";

const get = (req: any, res: any): void => {
  const sql = `SELECT * FROM user`;

  Model(sql, res);
};

const post = (req: any, res: any): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Invalid value");
    error.code = 400;
    error.data = error.array();
    throw error;
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

const search = (req: any, res: any): void => {
  const id = req.params.id;
  const sql = `SELECT * FROM user where id='${id}'`;

  Model(sql, res);
};

const edit = (req: any, res: any): void => {
  const error = validationResult(req);
  const id: any = req.params.id;

  if (!error.isEmpty()) {
    const error = new Error("Invalid value");
    error.code = 400;
    error.data = error.array();
    throw error;
  }

  let results = {
    nama: req.body.nama,
    umur: req.body.umur,
    hobi: req.body.hobi,
  };

  const sql = `UPDATE user SET nama='${results.nama}', umur='${results.umur}', hobi='${results.hobi}' where id='${id}'`;

  Model(sql, res);
};

const del = (req: any, res: any): void => {
  const id = req.params.id;

  const sql = `DELETE FROM users WHERE id='id'`;

  Model(sql, res);
};

export { get, post, search, edit, del };
