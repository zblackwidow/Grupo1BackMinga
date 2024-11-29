import { Schema, model } from 'mongoose'

let collection = 'comment'
let schema = new Schema(
    {
        chapter_id: [{ type: Schema.Types.ObjectId, ref: 'chapter' }],
        author_id: [{ type: Schema.Types.ObjectId, ref: 'author' }],
        company_id: [{ type: Schema.Types.ObjectId, ref: 'company' }],
        message: [{ type: String, required: true }],
    },
    {
        timestamps: true,
    }
)

let Comment = model(collection, schema)
export default Comment