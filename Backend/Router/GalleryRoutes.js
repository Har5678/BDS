import express from "express";
import upload from "../Middleware/Multer.js";
import { addGalleryImages, GalleryList } from "../Controller/GalleryController.js";

const galleryRouter=express.Router();


galleryRouter.post("/add",upload.single("image"),addGalleryImages);
galleryRouter.post("/list",GalleryList);



export default galleryRouter;