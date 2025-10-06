import {v2 as cloudinary} from "cloudinary";
import galleryModel from "../Model/GalleryModel.js";


export const addGalleryImages=async (req,res)=>{
    try {

        const image = req.file;

        const result = await cloudinary.uploader.upload(image.path, {
                    resource_type: "image",
                });
        
                const imageUrl = result.secure_url;

        const imageData={
            image:imageUrl
        }
        
        const gallery= new galleryModel(imageData);
        await gallery.save();
        res.json({success:true,gallery:gallery});
        

    } catch (error) {
         console.log(error);
        res.json({success: false, error: error.message})
    }
}


export const GalleryList=async(req,res)=>{
    try {
        console.log("hello");
        const gallery=await galleryModel.find({});
        res.json({success:true,gallery:gallery});
    } catch (error) {
        console.log(error);
        res.json({success: false, error: error.message})
    }
}