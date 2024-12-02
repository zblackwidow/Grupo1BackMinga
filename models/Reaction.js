import { Schema, model } from "mongoose";

let collection = "reactions";
let schema = new Schema(
    {
        manga_id: { type: Schema.Types.ObjectId, ref: "Manga" },
        author_id: { type: Schema.Types.ObjectId, ref: "Author" },
        company_id: { type: Schema.Types.ObjectId, ref: "Company" },
        reaction: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
)

let Reaction = model(collection, schema);
export default Reaction