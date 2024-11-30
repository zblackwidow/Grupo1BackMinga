import { Router } from 'express'
import { allComment, commentByID } from '../controllers/Comment/read.js'
import { create } from '../controllers/Comment/create.js'
import { update } from '../controllers/Comment/update.js'
import { destroy } from '../controllers/Comment/delete.js'
import commentExists from '../middleware/commentExist.js'
import validatorComment from '../middleware/validatorComment.js'
import schemaCommentCreate from '../schemas/Comment/create.js'
import schemaCommentID from '../schemas/Comment/delete.js'
import schemaCommentUpdate from '../schemas/Comment/update.js'
import {validator} from '../middleware/validator.js'

const commentRouter = Router()

// read
commentRouter.get('/all', allComment)
commentRouter.get('/id/:valueID', commentByID)

// create
commentRouter.post('/create', validator(schemaCommentCreate), commentExists, create)

// update
commentRouter.put(
    '/update',
    validator(schemaCommentID),
    validatorComment,
    validator(schemaCommentUpdate),
    update
)

// delete
commentRouter.delete('/destroy', validator(schemaCommentID), validatorComment, destroy)

export default commentRouter
