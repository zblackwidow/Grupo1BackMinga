import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config.js";
import "./config/database.js";
import indexRouter from "./router/index.js";
import error400Handler from "./middleware/error400Handdler.js";
import error404handler from "./middleware/error404Handler.js"
import error500handler from "./middleware/error500Handler.js";


const server = express();
const PORT = process.env.PORT || 8080 ;

const ready = () => console.log("Server ready in port :" + PORT);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors())
server.use(morgan("dev"));
server.use("/api", indexRouter);

server.use(error404handler);
server.use(error400Handler);
server.use(error500handler);




server.listen(PORT, ready);