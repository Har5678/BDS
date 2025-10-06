import express from "express"
import { addStudents, studentList } from "../Controller/StudentController.js";


const studentRouter=express.Router();


studentRouter.post("/add",addStudents);
studentRouter.post("/list",studentList);


export default studentRouter;