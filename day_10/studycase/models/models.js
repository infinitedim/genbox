import db from "../config/db_config";

const Model = (query, res) => {
  db.query(query, (e, response) => {
    e ? console.error(e) : false;
    res.status(200).json({
      messege: "Success",
      data: response,
    });
  });
};

export default Model;
