import { Router } from "express";
import { readAll, readById } from "../controllers/Manga/read.js";
import { createManga } from "../controllers/Manga/create.js";
import { updateManga } from "../controllers/Manga/update.js";
import { deleteManga } from "../controllers/Manga/delete.js";
import { validator, validatorParams } from "../middleware/validator.js";
import { schemaReadManga } from "../schemas/Manga/read.js";
import { schemaCreateManga } from "../schemas/Manga/create.js";
import { schemaUpdateManga } from "../schemas/Manga/update.js";

const router = Router();

router.get("/all", readAll )
router.get("/mangaById/:id", validatorParams(schemaReadManga), readById)
router.post("/create", validator(schemaCreateManga), createManga)
router.put("/update",validator(schemaUpdateManga), updateManga)
router.delete("/delete",validator(schemaReadManga), deleteManga)

export default router