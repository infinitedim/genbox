import { model, Schema } from "mongoose";

const blogModel = new Schema(
  {
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
    timestamps: true,
  }
);

export default model("blog model", blogModel);
