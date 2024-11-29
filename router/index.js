import { Router } from "express";
import companyRouter from "./company.js";
import userRouter from "./user.js";
import commentRouter from "./comment.js";

const indexRouter = Router();

indexRouter.use("/company", companyRouter);
indexRouter.use("/user", userRouter);
indexRouter.use("/comment", commentRouter);

export default indexRouter;