import { Router } from "express";
import { reactionAll, reactionById } from "../controllers/Reaction/read.js";
import { createReaction } from "../controllers/Reaction/create.js";
import { updateReaction } from "../controllers/Reaction/update.js";
import { deleteReaction } from "../controllers/Reaction/delete.js";
import { validator } from "../middleware/validator.js";
import { schemaDeleteReaction } from "../schemas/Reaction/delete.js";
import { schemaCreateReaction } from "../schemas/Reaction/create.js";
import { schemaUpdateReaction } from "../schemas/Reaction/update.js";

const router = Router();    

router.get("/all", reactionAll)
router.get("/id/:id",validator(schemaDeleteReaction), reactionById)
router.post("/create",validator(schemaCreateReaction), createReaction)
router.put("/update", validator(schemaUpdateReaction) ,updateReaction)
router.delete("/delete", validator(schemaDeleteReaction), deleteReaction)

export default router