import express from "express";
import create from "../controllers/Category/create.js";
import read from "../controllers/Category/read.js";
import update from "../controllers/Category/update.js";
import remove from "../controllers/Category/delete.js";
const router = express.Router();

router.post("/create", create); // Crear categoría
router.get("/all", read); // Leer todas las categorías
router.put("/update", update); // Actualizar categoría por ID
router.delete("/delete", remove); // Eliminar categoría por ID

export default router;
