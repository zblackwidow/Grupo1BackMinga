import { Schema, model } from "mongoose"


let collection = "companies"

let schema = new Schema({
    name: { type: String, required: true },
    website: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    active: { type: Boolean, required: true, default: false }
    },
    {
        timestamps: true,
    })

let Company = model(collection, schema);

export default Company;