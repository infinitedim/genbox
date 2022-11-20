import mongoose from "mongoose";
const Schema = mongoose.Schema();

const blogModel = Schema(
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
      required,
    },
  },
  {
    timetamps: true,
  }
);

export default mongoose.model("blog model", blogModel);
