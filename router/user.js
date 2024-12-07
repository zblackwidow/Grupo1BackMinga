import { Router } from 'express'
import { allUser, userByID } from '../controllers/User/read.js'
import { create } from '../controllers/User/create.js'
import { update } from '../controllers/User/update.js'
import { destroy } from '../controllers/User/delete.js'
import accountExists from '../middleware/accountExist.js'
import validatorAccount from '../middleware/validatorAccount.js'
import schemaUserCreate from '../schemas/User/create.js'
import schemaUserEmail from '../schemas/User/delete.js'
import schemaUserUpdate from '../schemas/User/update.js'
import {validator} from '../middleware/validator.js'
import passport from '../middleware/passport.js'
import createHash from '../middleware/createHash.js'
import generateToken from '../middleware/generateToken.js'



const userRouter = Router()

// read
userRouter.get('/all', passport.authenticate('jwt', { session: false }), allUser)
userRouter.get('/id/:valueID', passport.authenticate('jwt', { session: false }), userByID)

// create
userRouter.post('/register', validator(schemaUserCreate), accountExists, createHash, generateToken, create)

// update
userRouter.put(
    '/update', passport.authenticate('jwt', { session: false }),
    validator(schemaUserEmail),
    validatorAccount,
    validator(schemaUserUpdate), createHash,
    update
)

// delete
userRouter.delete('/destroy', passport.authenticate('jwt', { session: false }), validator(schemaUserEmail), validatorAccount, destroy)

export default userRouter
