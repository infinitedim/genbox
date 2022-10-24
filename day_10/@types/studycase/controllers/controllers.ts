/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { validationResult } from "express-validator";
import { Request } from "express-validator/src/base";

import Model from "../models/models";

const get = (
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          status: string;
          code: number;
          messege: string;
          data: any;
        }): void;
        new (): any;
      };
    };
  },
): void => {
  const sql = "SELECT * FROM user";
  Model(sql, res);
};

const post = (
  req: Request,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          status: string;
          code: number;
          messege: string;
          data: any;
        }): void;
        new (): any;
      };
    };
  },
): void => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    const e = new Error("Invalid value");
    e.code = 400;
    e.data = error.array();
    throw e;
  }

  const results = {
    nama: req.body.nama,
    umur: req.body.umur,
    hobi: req.body.hobi,
  };

  const sql = `INSERT INTO user (nama, umur, hobi)
            VALUES ('${results.nama}', '${results.umur}', '${results.hobi}')`;

  Model(sql, res);
};

const search = (
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          status: string;
          code: number;
          messege: string;
          data: any;
        }): void;
        new (): any;
      };
    };
  },
): void => {
  const id = req.params.id;

  const sql = `SELECT user where id='${id}'`;

  Model(sql, res);
};

const edit = (
  req: Request,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          status: string;
          code: number;
          messege: string;
          data: any;
        }): void;
        new (): any;
      };
    };
  },
): void => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    const e = new Error("Invalid value");
    e.code = 400;
    e.data = error.array();
    throw e;
  }

  const results = {
    nama: req.body.title,
    umur: req.body.author,
    hobi: req.body.year,
  };

  const id: any = req?.params?.id;

  const sql = `UPDATE users SET nama='${results.nama}' umur='${results.umur}' hobi='${results.hobi}' where id='${id}'`;

  Model(sql, res);
};

const del = (
  req: { params: { id: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          status: string;
          code: number;
          messege: string;
          data: any;
        }): void;
        new (): any;
      };
    };
  },
): void => {
  const id: any = req?.params?.id;

  const sql = `DELETE FROM users WHERE id='${id}'`;
  Model(sql, res);
};

export { get, post, search, edit, del };
