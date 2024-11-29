import { Router } from "express";
import companyRouter from "./company.js";

const indexRouter = Router();


indexRouter.use("/company", companyRouter);

export default indexRouter;