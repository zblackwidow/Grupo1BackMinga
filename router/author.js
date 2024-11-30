import { Router } from 'express'
import { updateAuthor } from '../controllers/Author/update.js'
import { allAuthors } from '../controllers/Author/read.js'
import create from '../controllers/Author/create.js'
import { deleteAuthor } from '../controllers/Author/delete.js'
import { chapterById } from '../controllers/Chapter/read.js'



const authorRouter = Router()

// read
authorRouter.get('/all', allAuthors)
authorRouter.get('/id/:id', chapterById)

// // create
authorRouter.post('/create', create)

// update
authorRouter.put('/update', updateAuthor)

// delete
authorRouter.delete('/delete', deleteAuthor)

export default authorRouter