import { Router } from 'express'
import create from '../controllers/Chapter/create'
import { allChapters, chapterById } from '../controllers/Chapter/read'
import { updateChapter } from '../controllers/Chapter/update'
import { deleteChapter } from '../controllers/Chapter/delete'


const chapterRouter = Router()

// read
chapterRouter.get('/all', allChapters)
chapterRouter.get('/id/:id', chapterById)

// // create
chapterRouter.post('/create', create)

// update
chapterRouter.put('/update', updateChapter)

// delete
chapterRouter.delete('/delete', deleteChapter)

export default chapterRouter