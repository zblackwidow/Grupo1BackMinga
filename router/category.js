import express from "express";
import create from "../controllers/Category/create.js";
import read from "../controllers/Category/read.js";
import update from "../controllers/Category/update.js";
import remove from "../controllers/Category/delete.js";
const router = express.Router();
// Ruta de prueba
router.get("/test", (req, res) => {
    res.status(200).send("¡Rutas de categoría funcionando!");
});
router.post("/", create); // Crear categoría
router.get("/", read); // Leer todas las categorías
router.put("/:id", update); // Actualizar categoría por ID
router.delete("/:id", remove); // Eliminar categoría por ID

export default router;
