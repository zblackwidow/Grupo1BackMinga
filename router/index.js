import { Router } from "express";
import users from "./users.js";


const indexRouter = Router();

indexRouter.use("/users", users.js);


export default indexRouter;