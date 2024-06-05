import mongoose from "mongoose";

const contectSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
})

export const Contact = mongoose.model("Contact",contectSchema)