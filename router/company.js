import { Router } from "express";
import createCompany from "../controllers/company.js";
import updateCompany from "../controllers/company.js";
import deleteCompany from "../controllers/company.js";
import allCompany from "../controllers/company.js";


const companyRouter = Router();

companyRouter.post("/create", createCompany);
companyRouter.put("/update/:id", updateCompany);
companyRouter.delete("/delete/:id", deleteCompany);
companyRouter.get("/all", allCompany);  

export default companyRouter;