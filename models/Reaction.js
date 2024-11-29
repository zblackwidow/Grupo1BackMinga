import { Schema, model } from "mongoose";

let collection = "reactions";
let schema = new Schema(
    {
        manga_id: { type: Schema.Types.ObjectId, ref: "manga" },
        author_id: { type: Schema.Types.ObjectId, ref: "author" },
        company_id: { type: Schema.Types.ObjectId, ref: "company" },
        reaction: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

let Reaction = model(collection, schema);
export default Reaction