import express from "express"
import { addNews, delNews, newsList } from "../Controller/NewsController.js";
import upload from "../Middleware/Multer.js";


const newsRouter=express.Router();


newsRouter.post("/add", upload.single("image"), addNews);

newsRouter.post("/list",newsList);
newsRouter.post("/delete",delNews);

export default newsRouter;