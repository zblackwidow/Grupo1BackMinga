import { Schema, model } from "mongoose";

let collection = "mangas";
let schema = new Schema(
  {
    author_id: { type: Schema.Types.ObjectId, ref: "author" },
    company_id: { type: Schema.Types.ObjectId, ref: "company" },
    title: { type: String, required: true },
    cover_photo: { type: URL, required: true },
    description: { type: String, required: true },
    category_id: { type: Schema.Types.ObjectId, ref: "category" },
  },

  {
    timestamps: true,
  }
);

let Manga = model(collection, schema);
export default Manga;