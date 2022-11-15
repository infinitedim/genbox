import db from "../config/db_config";
import type { Response } from "express";

const Model = (query: any, res: Response): void => {
  db.query(query, (error: any, response: any): void => {
    error ? console.error(error) : false;
    res.status(200).json({
      status: "OK",
      code: 200,
      messege: "Success",
      data: response,
    });
  });
};

export default Model;
