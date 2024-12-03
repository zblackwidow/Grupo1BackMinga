import { Router } from 'express'
import { updateAuthor } from '../controllers/Author/update.js'
import { allAuthors, authorById } from '../controllers/Author/read.js'
import create from '../controllers/Author/create.js'
import { deleteAuthor } from '../controllers/Author/delete.js'
import { validator } from '../middleware/validator.js'
import schemaAuthorCreate from '../schemas/Author/create.js'
import schemaAuthorUpdate from '../schemas/Author/update.js'
import schemaAuthorDelete from '../schemas/Author/delete.js'

const authorRouter = Router()

// read
authorRouter.get('/all',allAuthors)
authorRouter.get('/id/:id',authorById)

// // create
authorRouter.post('/create',validator(schemaAuthorCreate),create)

// update
authorRouter.put('/update',validator(schemaAuthorUpdate),updateAuthor)

// delete
authorRouter.delete('/delete',validator(schemaAuthorDelete),deleteAuthor)

export default authorRouter