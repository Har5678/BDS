import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./Config/mongodb.js";
import connectCloudinary from "./Config/cloudinary.js";
import newsRouter from "./Router/NewsRoutes.js";
import adminRouter from "./Router/AdminRoutes.js";
import galleryRouter from "./Router/GalleryRoutes.js";
import studentRouter from "./Router/StudentRoutes.js";


const app=express();
const port=process.env.PORT || 5000


app.use(cors());
app.use(express.json());
connectDB();
connectCloudinary();




app.use("/api/news",newsRouter);
app.use("/api/login",adminRouter);
app.use("/api/gallery",galleryRouter);
app.use("/api/students",studentRouter);

app.get("/",(req,res)=>{
    res.send("Api Working")
})


app.listen(port,()=>console.log("server started on PORT : " + port))


