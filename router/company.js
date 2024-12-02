import { Router } from "express";
import { readAllCompany, readCompany } from "../controllers/Company/read.js";
import createCompany from "../controllers/Company/create.js";
import deleteCompany from "../controllers/Company/delete.js";
import { updateActive, updateName, updateDescription, updateWebsite, updatePhoto } from "../controllers/Company/update.js";
import { validator, validatorParams } from "../middleware/validator.js";
import schemaCompany from "../schemas/Company/create.js";
import schemaDeleteCompany from "../schemas/Company/delete.js";
import schemaUPDCompany from "../schemas/Company/update.js";


const companyRouter = Router();
// crear una compania
companyRouter.post("/create", validator(schemaCompany), createCompany);
// borrar una compania
companyRouter.delete("/delete", validator(schemaDeleteCompany), deleteCompany);
// leer todas las companias
companyRouter.get("/all", readAllCompany);
// leer una compania
companyRouter.get("/read", readCompany);
// actualizar el active de una compania
companyRouter.put("/update/active", validator(schemaUPDCompany), updateActive);
// actualizar el nombre de una compania
companyRouter.put("/update/name", validator(schemaUPDCompany), updateName);
// actualizar la descripcion de una compania
companyRouter.put("/update/description", validator(schemaUPDCompany), updateDescription);
// actualizar el website de una compania
companyRouter.put("/update/website", validator(schemaUPDCompany), updateWebsite);
// actualizar la foto de una compania
companyRouter.put("/update/photo", validator(schemaUPDCompany), updatePhoto);

export default companyRouter;