import express from "express";
import { adminLogin } from "../Controller/AdminController.js";


const adminRouter=express.Router();

adminRouter.post("/admin",adminLogin);

export default adminRouter;
