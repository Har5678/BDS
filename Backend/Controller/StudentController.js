import studentModel from "../Model/StudentModel.js";

export const addStudents=async (req,res)=>{
    try {
        console.log("hello");
        console.log(req.body);
        console.log(req.body.fullName);
        const {name,fatherName,email,phone,address}=req.body;

        const data={
            Name:name,
            FatherName:fatherName,
            email:email,
            Phone:phone,
            Address:address
        }

        const student=new studentModel(data);
        await student.save();
        res.json({success:true,student:student});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
        
    }
}

//list students
export const studentList=async (req,res)=>{
    try {
        console.log("hello");
        const students=await studentModel.find({}).sort({date:-1});
        res.json({success:true,students:students});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
        
    }
}