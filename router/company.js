import { Router } from "express";
import { readAllCompany, readCompany } from "../controllers/Company/read.js";
import createCompany from "../controllers/Company/create.js";
import deleteCompany from "../controllers/Company/delete.js";
import { updateCompany } from "../controllers/Company/update.js";
import { validator } from "../middleware/validator.js";
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
// actualizar una compania
companyRouter.put("/update", validator(schemaUPDCompany), updateCompany);


export default companyRouter;