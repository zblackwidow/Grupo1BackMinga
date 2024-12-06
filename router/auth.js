import { Router } from 'express'
import signIn from '../controllers/auth/signIn.js'
import signInGoogle from '../controllers/auth/signInGoogle.js'
import accountNotExist from '../middleware/accountNotExist.js'
import isValidatePassword from '../middleware/isValidatePassword.js'
import generateToken from '../middleware/generateToken.js'
import passport from "../middleware/passport.js";
//import passportGoogle from "../middleware/passportGoogle.js";
import {validator} from '../middleware/validator.js'
import schemaUserCreate from '../schemas/User/create.js'
import accountExists from '../middleware/accountExist.js'
import createHash from '../middleware/createHash.js'
import signOut from '../controllers/auth/signOut.js'



const routerAuth = Router()

// signIn
routerAuth.post('/signIn', accountNotExist, isValidatePassword, generateToken, signIn)

// signOut
routerAuth.post('/signOut', passport.authenticate('jwt', { session: false }), signOut)

// Ruta para iniciar sesion con google
/*routerAuth.get(
    '/signin/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] })
)*/
/*routerAuth.get(
    '/signin/google/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }),
    generateToken,
    signInGoogle
)*/

export default routerAuth
