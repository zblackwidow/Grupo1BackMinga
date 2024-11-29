import { Router } from "express";
import companyRouter from "./company.js";
import userRouter from "./user.js";

const indexRouter = Router();

indexRouter.use("/company", companyRouter);
indexRouter.use("/user", userRouter);

export default indexRouter;