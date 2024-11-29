import { Router } from "express";
import { readAllCompany, readCompany } from "../controllers/Company/read.js";
import createCompany from "../controllers/Company/create.js";
import deleteCompany from "../controllers/Company/delete.js";
import { updateActive, updateName, updateDescription, updateWebsite, updatePhoto } from "../controllers/Company/update.js";


const companyRouter = Router();

companyRouter.post("/create", createCompany);
companyRouter.delete("/delete/:id", deleteCompany);
companyRouter.get("/all", readAllCompany);
companyRouter.get("/read/:id", readCompany);
companyRouter.put("/update/active/:id", updateActive);
companyRouter.put("/update/name/:id", updateName);
companyRouter.put("/update/description/:id", updateDescription);
companyRouter.put("/update/website/:id", updateWebsite);
companyRouter.put("/update/photo/:id", updatePhoto);

export default companyRouter;