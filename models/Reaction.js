import { Schema, model } from "mongoose";
import "./Manga.js";
import "./Author.js";
import "./Company.js";

let collection = "reactions";
let schema = new Schema(
    {
        manga_id: { type: Schema.Types.ObjectId, ref: "mangas" },
        author_id: { type: Schema.Types.ObjectId, ref: "authors",required: false },
        company_id: { type: Schema.Types.ObjectId, ref: "companies",required: false },
        reaction: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
)

let Reaction = model(collection, schema);
export default Reaction