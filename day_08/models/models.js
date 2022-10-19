import { Schema, model } from "mongoose";

const blogModel = Schema(
  {
    gambar: {
      type: String,
      required: true,
    },
    judul: {
      type: String,
      required: true,
    },
    isi: {
      type: String,
      required: true,
    },
    penulis: {
      type: String,
      required: true,
    },
  },
  {
    timetamps: true,
  }
);

export default model("blog model", blogModel);
