import { User } from "../models/usersModels";
import type { Model } from "sequelize";

const getUser = (req, res) => {
  User.findAll()
    .then((result: Model<any, any>[]): void => {
      res.send(result);
    })
    .catch((error: any): void => {
      console.error(error);
    });
};

const getUserById = (req, res) => {
  User.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((result: Model<any, any>[]): void => {
      res.send(result[0]);
    })
    .catch((error: any): void => {
      console.error(error);
    });
};

const createUser = (req, res) => {
  User.create(req.body)
    .then((result: Model<any, any>): void => {
      res.status(200).json({
        messege: "OK",
        code: "User Created",
        users: result,
      });
    })
    .catch((error: any): void => {
      console.error(error);
    });
};

const updateUser = (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((result: [affectedCount: number]): void => {
      res.status(200).json({
        messege: "User Updated",
        users: `${result} data berhasil diupdate`,
      });
    })
    .catch((error: any): void => {
      console.error(error);
    });
};

const deleteUser = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((result: number): void => {
      res.status(200).json({
        messege: "User deleted",
      });
    })
    .catch((error: any): void => {
      console.error(error);
    });
};

export { getUser, getUserById, createUser, updateUser, deleteUser };
