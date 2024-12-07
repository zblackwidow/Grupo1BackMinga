import { Schema, model } from "mongoose";
import "./User.js"

let collection = "authors";

let schema = new Schema({
        name: {type: String, required: true},
        lastName:{type: String, required: true},
        city:{type: String, required: true},
        country:{type: String},
        birthday:{type: Date, required: true},
        photo:{type: String, required: true},
        user_id: { type: Schema.Types.ObjectId, ref: 'users', required:true },
        active: {type: Boolean, active: true}
},
{
        timestamps: true
})

let Author = model(collection, schema)
export default Author;