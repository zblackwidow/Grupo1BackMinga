import { Router } from "express";
import createCompany from "../controllers/Company/create.js";
// import updateCompany from "../controllers/company.js";
// import deleteCompany from "../controllers/company.js";
import readAllCompany from "../controllers/Company/read.js";


const companyRouter = Router();

companyRouter.post("/create", createCompany);
// companyRouter.put("/update/:id", updateCompany);
// companyRouter.delete("/delete/:id", deleteCompany);
companyRouter.get("/all", readAllCompany);  

export default companyRouter;