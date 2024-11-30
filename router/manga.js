import { Router } from "express";
import { readAll, readById } from "../controllers/Manga/read.js";
import { createManga } from "../controllers/Manga/create.js";
import { updateManga } from "../controllers/Manga/update.js";
import { deleteManga } from "../controllers/Manga/delete.js";


const router = Router();

router.get("/all", readAll )
router.get("/mangaById/:id", readById)
router.post("/create", createManga)
router.put("/update", updateManga)
router.delete("/delete", deleteManga)

export default router