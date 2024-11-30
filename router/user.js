import { Router } from 'express'
import { allUser, userByID } from '../controllers/User/read.js'
import { create } from '../controllers/User/create.js'
import { update } from '../controllers/User/update.js'
import { destroy } from '../controllers/User/delete.js'
import accountExists from '../middleware/accountExist.js'
import validatorAccount from '../middleware/validatorAccount.js'
import validatorSchema from '../middleware/validatorSchema.js'
import schemaUserCreate from '../schemas/User/create.js'
import schemaUserEmail from '../schemas/User/delete.js'
import schemaUserUpdate from '../schemas/User/update.js'

const userRouter = Router()

// read
userRouter.get('/all', allUser)
userRouter.get('/id/:valueID', userByID)

// create
userRouter.post('/create', validatorSchema(schemaUserCreate), accountExists, create)

// update
userRouter.put(
    '/update',
    validatorSchema(schemaUserEmail),
    validatorAccount,
    validatorSchema(schemaUserUpdate),
    update
)

// delete
userRouter.delete('/destroy', validatorSchema(schemaUserEmail), validatorAccount, destroy)

export default userRouter
