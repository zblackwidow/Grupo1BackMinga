import { Router } from 'express'
import create from '../controllers/Chapter/create.js'
import { allChapters, chapterById } from '../controllers/Chapter/read.js'
import { updateChapter } from '../controllers/Chapter/update.js'
import { deleteChapter } from '../controllers/Chapter/delete.js'
import { validator } from '../middleware/validator.js'
import schemaChapterCreate from '../schemas/Chapter/create.js'
import schemaChapterDelete from '../schemas/Chapter/delete.js'
import schemaChapterUpdate from '../schemas/Chapter/update.js'


const chapterRouter = Router()

// read
chapterRouter.get('/all', allChapters)
chapterRouter.get('/id/:id', chapterById)

// // create
chapterRouter.post('/create',validator(schemaChapterCreate),create)

// update
chapterRouter.put('/update',validator(schemaChapterUpdate),updateChapter)

// delete
chapterRouter.delete('/delete',validator(schemaChapterDelete),deleteChapter)

export default chapterRouter