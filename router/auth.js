import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import signInGoogle from "../controllers/auth/signInGoogle.js";
import accountNotExist from "../middleware/accountNotExist.js";
import isValidatePassword from "../middleware/isValidatePassword.js";
import generateToken from "../middleware/generateToken.js";
import passport from "../middleware/passport.js";
import passportGoogle from "../middleware/passportGoogle.js";
import schemaUserCreate from "../schemas/User/create.js";
import accountExists from "../middleware/accountExist.js";
import signOut from "../controllers/auth/signOut.js";
import validateToken from "../controllers/auth/validateToken.js";

const routerAuth = Router();
// signIn
routerAuth.post(
  "/signIn",
  accountNotExist,
  isValidatePassword,
  generateToken,
  signIn
);

// signOut
routerAuth.post(
  "/signOut",
  passport.authenticate("jwt", { session: false }),
  signOut
);

// ValidateToken
routerAuth.get(
  "/validateToken",
  passport.authenticate("jwt", { session: false }),
  validateToken
);

// Google
routerAuth.get(
  "/signIn/google",
  passportGoogle.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

routerAuth.get(
  "/signIn/google/callback",
  passportGoogle.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  generateToken,
  signInGoogle
);

export default routerAuth;
