import { v2 as cloudinary } from "cloudinary";
import newsModel from "../Model/NewsModel.js";


export const addNews = async (req, res) => {

    try {
        console.log("hello");
        const { newsType, title,subtitle} = req.body;
        console.log(req.file);
        console.log(req.body.newsType);
       
        const image = req.file;
        

        const result = await cloudinary.uploader.upload(image.path, {
            resource_type: "image",
        });

        const imageUrl = result.secure_url;

        const newsData = {
            newsType: newsType,
            image: imageUrl,
            title: title,
            subtitle:subtitle,
            date: new Date()
        }

        console.log(newsData);

        const news = new newsModel(newsData);
        await news.save();
        res.json({ success: true, message: "News Added Successfully" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }


}


export const newsList=async(req,res)=>{
    try {
        const news=await newsModel.find({}).sort({date:-1});
        res.json({success:true,news:news});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}


export const delNews=async(req,res)=>{
    try {
        console.log("hello");
        const {id}=req.body;
        await newsModel.findByIdAndDelete(id);
        res.json({success:true,message:"News Deleted Successfully"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}