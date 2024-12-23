import { Router } from 'express'
import create from '../controllers/Chapter/create.js'
import { allChapters, chapterById, chapterByMangaId } from '../controllers/Chapter/read.js'
import { updateChapter } from '../controllers/Chapter/update.js'
import { deleteChapter } from '../controllers/Chapter/delete.js'
import { validator } from '../middleware/validator.js'
import schemaChapterCreate from '../schemas/Chapter/create.js'
import schemaChapterDelete from '../schemas/Chapter/delete.js'
import schemaChapterUpdate from '../schemas/Chapter/update.js'
import passport from '../middleware/passport.js'
import validateRole from '../middleware/validateRole.js'

const chapterRouter = Router()

// read
chapterRouter.get('/all',passport.authenticate('jwt', { session: false }),validateRole, allChapters)
chapterRouter.get('/id/:id',passport.authenticate('jwt', { session: false }),validateRole, chapterById)
chapterRouter.get('/idManga/:idManga',passport.authenticate('jwt', { session: false }),validateRole, chapterByMangaId)


// create
chapterRouter.post('/create',passport.authenticate('jwt', { session: false }),validator(schemaChapterCreate),create)

// update
chapterRouter.put('/update',passport.authenticate('jwt', { session: false }),validateRole,validator(schemaChapterUpdate),updateChapter)

// delete
chapterRouter.delete('/delete',passport.authenticate('jwt', { session: false }),validateRole,validator(schemaChapterDelete),deleteChapter)

export default chapterRouter