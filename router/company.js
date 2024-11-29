import { Router } from "express";
import createCompany from "../controllers/Company/create.js";
import updateCompany from "../controllers/Company/update.js";
import deleteCompany from "../controllers/Company/delete.js";
import { readAllCompany, readCompany } from "../controllers/Company/read.js";


const companyRouter = Router();

companyRouter.post("/create", createCompany);
companyRouter.put("/update/:id", updateCompany);
companyRouter.delete("/delete/:id", deleteCompany);
companyRouter.get("/all", readAllCompany);  
companyRouter.get("/read/:id", readCompany);

export default companyRouter;