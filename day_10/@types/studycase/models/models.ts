/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { QueryOptions } from "mysql";
import db from "../config/db_config";

const Model = (
  query: string | QueryOptions,
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
  db.query(query, (e, response) => {
    if (e != null) {
      throw e;
    }
    res.status(200).json({
      status: "OK",
      code: 200,
      messege: "Success",
      data: response,
    });
  });
};

export default Model;
