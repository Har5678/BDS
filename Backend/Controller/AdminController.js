import jwt from "jsonwebtoken"


//function for admin login 

export const adminLogin= async (req,res)=>{
    try {
        console.log("hello");
        const {email,password}=req.body;
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET);
            console.log(token);
            res.json({success:true,token:token});
        }else{
            res.json({success:false,message:"Invalid email or password"});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}