import { Schema, model } from 'mongoose'
import "./Chapter.js"
import "./Author.js"
import "./Company.js"

let collection = 'comment'
let schema = new Schema(
    {
        chapter_id: { type: Schema.Types.ObjectId, ref: 'chapters' },
        author_id: { type: Schema.Types.ObjectId, ref: 'authors' },
        company_id: { type: Schema.Types.ObjectId, ref: 'companies' },
        message: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

let Comment = model(collection, schema)
export default Comment