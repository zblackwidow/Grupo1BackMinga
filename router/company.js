import { Router } from "express";
import { readAllCompany, readCompany } from "../controllers/Company/read.js";
import createCompany from "../controllers/Company/create.js";
import deleteCompany from "../controllers/Company/delete.js";
import { updateActive, updateName, updateDescription, updateWebsite, updatePhoto } from "../controllers/Company/update.js";


const companyRouter = Router();
// crear una compania
companyRouter.post("/create", createCompany);
// borrar una compania
companyRouter.delete("/delete/:id", deleteCompany);
// leer todas las companias
companyRouter.get("/all", readAllCompany);
// leer una compania
companyRouter.get("/read/:id", readCompany);
// actualizar el active de una compania
companyRouter.put("/update/active/:id", updateActive);
// actualizar el nombre de una compania
companyRouter.put("/update/name/:id", updateName);
// actualizar la descripcion de una compania
companyRouter.put("/update/description/:id", updateDescription);
// actualizar el website de una compania
companyRouter.put("/update/website/:id", updateWebsite);
// actualizar la foto de una compania
companyRouter.put("/update/photo/:id", updatePhoto);

export default companyRouter;