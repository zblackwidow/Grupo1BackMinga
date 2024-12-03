import express from "express";
import create from "../controllers/Category/create.js";
import read from "../controllers/Category/read.js";
import update from "../controllers/Category/update.js";
import remove from "../controllers/Category/delete.js";
import { validator, validatorParams } from "../middleware/validator.js";
import createCategorySchema  from "../schemas/Category/create.js";
import deleteCategorySchema from '../schemas/Category/delete.js'
import updateCategorySchema from '../schemas/Category/update.js'
import passport  from "../middleware/passport.js";
const router = express.Router();
<<<<<<< HEAD
// Ruta de prueba
router.get("/test", (req, res) => {
    res.status(200).send("¡Rutas de categoría funcionando!");
});
router.post("/", create); // Crear categoría
router.get("/", read); // Leer todas las categorías
router.put("/:id", update); // Actualizar categoría por ID {cambiar por body}
router.delete("/:id", remove); // Eliminar categoría por ID {cambiar por body}
=======

<<<<<<< HEAD
router.post("/create", create); // Crear categoría
router.get("/all", read); // Leer todas las categorías
router.put("/update", update); // Actualizar categoría por ID
router.delete("/delete", remove); // Eliminar categoría por ID
>>>>>>> f5ac1950f0254097671712f1d24943d50e2e8661
=======
router.post("/create",passport.authenticate("jwt", { session: false }), validator(createCategorySchema), create); // Crear categoría
router.get("/all", passport.authenticate("jwt", { session: false }), read); // Leer todas las categorías
router.put("/update",passport.authenticate("jwt", { session: false }), validator(updateCategorySchema), update); // Actualizar categoría por ID
router.delete("/delete",passport.authenticate("jwt", { session: false }), validator(deleteCategorySchema), remove); // Eliminar categoría por ID
>>>>>>> d5354c9c40058100da2ff4337a8cbe5193b2690f

export default router;
