import { Router } from 'express'
import { allUser, userByID } from '../controllers/User/read.js'
import { create } from '../controllers/User/create.js'
import { update } from '../controllers/User/update.js'
import { destroy } from '../controllers/User/delete.js'

const userRouter = Router()

// read
userRouter.get('/all', allUser)
userRouter.get('/id/:valueID', userByID)

// create
userRouter.post('/create', create)

// update
userRouter.put('/update/:id', update)

// delete
userRouter.delete('/destroy/:id', destroy)

export default userRouter