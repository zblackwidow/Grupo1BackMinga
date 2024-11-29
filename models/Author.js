import { Schema, model } from "mongoose";

let collection = "authors";

let schema = new Schema({
        name: {type: String, required: true},
        lastName:{type: String, required: true},
        city:{type: String, required: true},
        country:{type: String, required: true},

        date:{type: Date, required: true},
        photo:{type: String, required: true},
        user_id:{type: Schema.Types.ObjectId, required: true},
        active: {type: Boolean, required: true},
},
{
        timestamps: true
})

let Author = model(collection, schema)

export default Author;