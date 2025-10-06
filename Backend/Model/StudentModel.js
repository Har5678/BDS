import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    FatherName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    Phone:{
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true
    }
})

const studentModel= mongoose.model("student", studentSchema)

export default studentModel