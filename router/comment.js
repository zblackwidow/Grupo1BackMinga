import { Router } from 'express'
import { allComment, commentByID } from '../controllers/Comment/read.js'
import { create } from '../controllers/Comment/create.js'
import { update } from '../controllers/Comment/update.js'
import { destroy } from '../controllers/Comment/delete.js'

const commentRouter = Router()

// read
commentRouter.get('/all', allComment)
commentRouter.get('/id/:valueID', commentByID)

// create
commentRouter.post('/create', create)

// update
commentRouter.put('/update/:id', update)

// delete
commentRouter.delete('/destroy/:id', destroy)

export default commentRouter