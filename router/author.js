import { Router } from 'express'
import { updateAuthor } from '../controllers/Author/update.js'
import { allAuthors, authorById } from '../controllers/Author/read.js'
import create from '../controllers/Author/create.js'
import { deleteAuthor } from '../controllers/Author/delete.js'
import { validator } from '../middleware/validator.js'
import schemaAuthorCreate from '../schemas/Author/create.js'
import schemaAuthorUpdate from '../schemas/Author/update.js'
import schemaAuthorDelete from '../schemas/Author/delete.js'
import passport from '../middleware/passport.js'
import validateRole from '../middleware/validateRole.js'


const authorRouter = Router()

// read
authorRouter.get('/all',passport.authenticate('jwt', { session: false }),validateRole, allAuthors)
authorRouter.get('/id/:id',passport.authenticate('jwt', { session: false }),validateRole, authorById)

 // create
authorRouter.post('/create',create)

// update
authorRouter.put('/update',passport.authenticate('jwt', { session: false }),validateRole,validator(schemaAuthorUpdate),updateAuthor)

// delete
authorRouter.delete('/delete',passport.authenticate('jwt', { session: false }),validateRole,validator(schemaAuthorDelete),deleteAuthor)

export default authorRouter