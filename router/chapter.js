import { Router } from 'express'
import create from '../controllers/Chapter/create.js'
import { allChapters, chapterById } from '../controllers/Chapter/read.js'
import { updateChapter } from '../controllers/Chapter/update.js'
import { deleteChapter } from '../controllers/Chapter/delete.js'
import { validator } from '../middleware/validator.js'
import schemaChapterCreate from '../schemas/Chapter/create.js'
import schemaChapterDelete from '../schemas/Chapter/delete.js'
import schemaChapterUpdate from '../schemas/Chapter/update.js'
import passport from '../middleware/passport.js'


const chapterRouter = Router()

// read
chapterRouter.get('/all',passport.authenticate('jwt', { session: false }), allChapters)
chapterRouter.get('/id/:id',passport.authenticate('jwt', { session: false }), chapterById)

// create
chapterRouter.post('/create',passport.authenticate('jwt', { session: false }),validator(schemaChapterCreate),create)

// update
chapterRouter.put('/update',passport.authenticate('jwt', { session: false }),validator(schemaChapterUpdate),updateChapter)

// delete
chapterRouter.delete('/delete',passport.authenticate('jwt', { session: false }),validator(schemaChapterDelete),deleteChapter)

export default chapterRouter