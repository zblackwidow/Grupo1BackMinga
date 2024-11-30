import { Router } from 'express'
import { allUser, userByID } from '../controllers/User/read.js'
import { create } from '../controllers/User/create.js'
import { update } from '../controllers/User/update.js'
import { destroy } from '../controllers/User/delete.js'
import accountExists from '../middleware/accountExist.js'
import validatorAccount from '../middleware/validatorAccount.js'
import validatorCreate from '../middleware/validatorUser/validatorCreate.js'
import schemaUserCreate from '../schemas/User/create.js'
import validatorDelete from '../middleware/validatorUser/validatorDelete.js'
import schemaUserDelete from '../schemas/User/delete.js'
import validatorUpdate from '../middleware/validatorUser/validatorUpdate.js'

import schemaUserUpdate from '../schemas/User/update.js'

const userRouter = Router()

// read
userRouter.get('/all', allUser)
userRouter.get('/id/:valueID', userByID)

// create
userRouter.post('/create', validatorCreate(schemaUserCreate), accountExists, create)

// update
userRouter.put('/update', validatorAccount, validatorUpdate(schemaUserUpdate), update)

// delete
userRouter.delete('/destroy', validatorAccount, validatorDelete(schemaUserDelete), destroy)

export default userRouter
