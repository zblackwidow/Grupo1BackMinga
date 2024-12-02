import { Router } from "express";
import companyRouter from "./company.js";
import userRouter from "./user.js";
import commentRouter from "./comment.js";
import authorRouter from "./author.js";

import mangaRouter from "./manga.js";

const indexRouter = Router();

indexRouter.use("/company", companyRouter);
indexRouter.use("/user", userRouter);
indexRouter.use("/comment", commentRouter);
indexRouter.use("/author", authorRouter);
indexRouter.use("/manga", mangaRouter);

export default indexRouter;