import { Router } from "express";
import companyRouter from "./company.js";
import userRouter from "./user.js";
import commentRouter from "./comment.js";
<<<<<<< HEAD
import authorRouter from "./author.js";

=======
import mangaRouter from "./manga.js";
>>>>>>> origin

const indexRouter = Router();

indexRouter.use("/company", companyRouter);
indexRouter.use("/user", userRouter);
indexRouter.use("/comment", commentRouter);
<<<<<<< HEAD
indexRouter.use("/author", authorRouter);
=======
indexRouter.use("/manga", mangaRouter);
>>>>>>> origin

export default indexRouter;