import { Router } from 'express'
import { allComment, commentByID } from '../controllers/Comment/read.js'
import { create } from '../controllers/Comment/create.js'
import { update } from '../controllers/Comment/update.js'
import { destroy } from '../controllers/Comment/delete.js'
import commentExists from '../middleware/commentExist.js'
import validatorComment from '../middleware/validatorComment.js'
import validatorSchema from '../middleware/validatorSchema.js'
import schemaCommentCreate from '../schemas/Comment/create.js'
import schemaCommentID from '../schemas/Comment/delete.js'
import schemaCommentUpdate from '../schemas/Comment/update.js'

const commentRouter = Router()

// read
commentRouter.get('/all', allComment)
commentRouter.get('/id/:valueID', commentByID)

// create
commentRouter.post('/create', validatorSchema(schemaCommentCreate), commentExists, create)

// update
commentRouter.put(
    '/update',
    validatorSchema(schemaCommentID),
    validatorComment,
    validatorSchema(schemaCommentUpdate),
    update
)

// delete
commentRouter.delete('/destroy', validatorSchema(schemaCommentID), validatorComment, destroy)

export default commentRouter
