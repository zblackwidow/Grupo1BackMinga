import express from "express";
import create from "../controllers/Category/create.js";
import read from "../controllers/Category/read.js";
import update from "../controllers/Category/update.js";
import remove from "../controllers/Category/delete.js";
import { validator, validatorParams } from "../middleware/validator.js";
import createCategorySchema  from "../schemas/Category/create.js";
import deleteCategorySchema from '../schemas/Category/delete.js'
import updateCategorySchema from '../schemas/Category/update.js'

const router = express.Router();
// Ruta de prueba
router.get("/test", (req, res) => {
    res.status(200).send("¡Rutas de categoría funcionando!");
});
router.post("/",validator(createCategorySchema), create); // Crear categoría
router.get("/", read); // Leer todas las categorías
router.put("/:id", validator(updateCategorySchema), update); // Actualizar categoría por ID
router.delete("/:id", validatorParams(deleteCategorySchema), remove); // Eliminar categoría por ID

export default router;
