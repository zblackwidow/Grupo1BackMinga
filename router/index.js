import { Router } from "express";
import 'dotenv/config'
import companyRouter from "./company.js";
import userRouter from "./user.js";
import commentRouter from "./comment.js";
import authorRouter from "./author.js";
import mangaRouter from "./manga.js";
import categoryRouter from "./category.js"
import routerReaction from "./reaction.js"
import routerAuth from "./auth.js"
import chapterRouter from "./chapter.js";

const indexRouter = Router();

indexRouter.use("/company", companyRouter);
indexRouter.use("/user", userRouter);
indexRouter.use("/comment", commentRouter);
indexRouter.use("/author", authorRouter);
indexRouter.use("/manga", mangaRouter);
indexRouter.use("/category", categoryRouter)
indexRouter.use("/reaction", routerReaction)
indexRouter.use('/auth', routerAuth)
indexRouter.use("/chapter", chapterRouter)



export default indexRouter;