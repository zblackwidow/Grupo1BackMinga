import { Router } from "express";
import companyRouter from "./company.js";
import userRouter from "./user.js";
import commentRouter from "./comment.js";
import mangaRouter from "./manga.js";
import authorRouter from "./author.js";
import chapterRouter from "./chapter.js";


const indexRouter = Router();

indexRouter.use("/company", companyRouter);
indexRouter.use("/user", userRouter);
indexRouter.use("/comment", commentRouter);
indexRouter.use("/manga", mangaRouter);
indexRouter.use("/author", authorRouter);
indexRouter.use("/chapter", chapterRouter);

export default indexRouter;