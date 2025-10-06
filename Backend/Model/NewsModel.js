import mongoose from "mongoose"


const newsSchema = new mongoose.Schema({
    newsType: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subtitle:{
        type: String
    },
    date: {
        type: String,
        required: true
    }
})

const newsModel= mongoose.model("news", newsSchema)

export default newsModel;