import { Schema, model } from 'mongoose'
import './Author.js'
import './Company.js'
import './Category.js'

let collection = 'mangas'
let schema = new Schema(
    {
        title: { type: String, required: true },
        cover_photo: { type: String },
        description: { type: String, required: true },
        author_id: { type: Schema.Types.ObjectId, ref: 'authors' },
        company_id: { type: Schema.Types.ObjectId, ref: 'companies' },
        category_id: { type: Schema.Types.ObjectId, ref: 'categories' },
    },

    {
        timestamps: true,
    }
)

let Manga = model(collection, schema)
export default Manga
