import db from "../config/db_config";

const Model = (query, res) => {
  db.query(query, (e, response) => {
    e ? console.error(e) : false;
    res.status(200).json({
      status: "OK",
      code: 200,
      messege: "Success",
      data: response,
    });
  });
};

export default Model;
