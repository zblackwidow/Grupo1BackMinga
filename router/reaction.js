import { Router } from "express";
import { reactionAll, reactionById } from "../controllers/Reaction/read.js";
import { createReaction } from "../controllers/Reaction/create.js";
import { updateReaction } from "../controllers/Reaction/update.js";
import { deleteReaction } from "../controllers/Reaction/delete.js";
import { validator } from "../middleware/validator.js";
import { schemaDeleteReaction } from "../schemas/Reaction/delete.js";
import { schemaCreateReaction } from "../schemas/Reaction/create.js";
import { schemaUpdateReaction } from "../schemas/Reaction/update.js";
import passport from "../middleware/passport.js";

const router = Router();

router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  reactionAll
);
router.get(
  "/id/",
  passport.authenticate("jwt", { session: false }),
  validator(schemaDeleteReaction),
  reactionById
);
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  validator(schemaCreateReaction),
  createReaction
);
router.put(
  "/update",
  passport.authenticate("jwt", { session: false }),
  validator(schemaUpdateReaction),
  updateReaction
);
router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  validator(schemaDeleteReaction),
  deleteReaction
);

export default router;
