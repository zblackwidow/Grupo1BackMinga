import { Router } from "express";
import { readAll, readByAuthor, readByCompany, readById } from "../controllers/Manga/read.js";
import { createManga } from "../controllers/Manga/create.js";
import { updateManga } from "../controllers/Manga/update.js";
import { deleteManga } from "../controllers/Manga/delete.js";
import { validator, validatorParams } from "../middleware/validator.js";
import { schemaReadManga } from "../schemas/Manga/read.js";
import { schemaCreateManga } from "../schemas/Manga/create.js";
import { schemaUpdateManga } from "../schemas/Manga/update.js";
import passport from "../middleware/passport.js";
import validateRole from "../middleware/validateRole.js";

const router = Router();

router.get("/all", readAll);
router.get(
  "/mangaById/:id",
  validatorParams(schemaReadManga),
  readById
);
router.get("/mangasByAuthor/:author", readByAuthor)
router.get("/mangasByCompany", readByCompany)
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  validator(schemaCreateManga),
  validateRole,
  createManga
);
router.put(
  "/update",
  passport.authenticate("jwt", { session: false }),
  validateRole,
  validator(schemaUpdateManga),
  updateManga
);
router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  validateRole,
  validator(schemaReadManga),
  deleteManga
);

export default router;
