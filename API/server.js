import express from 'express'
import mongoose from 'mongoose';
import { Contact } from './Contect-Model.js';

const app = express();

mongoose.connect(
    "mongodb+srv://satyapalbishnoi129:mdPhOKJbDKe5mDsB@cluster0.aj8cnr6.mongodb.net/",
    {
        dbName:"CONTECT-SAVE-USING-MERN"
    }
).then(()=>console.log("DATABASE CONNECTED.....!!!")).catch((err)=>console.log(err))


// GET ALL CONTECT

app.get("/home",(req,res)=>{
    res.json({message:"Welcome to my API"})
})

//ADD NEW CONTECT

app.post('/',async(req,res)=>{
    const {name,email,phone} = req.body
    try{
        let contect = await Contact.create({name,email,phone})
        res.json({message:"Contect save .........!",contect})
    }
    catch (error){
        res.json({message: error.message})
    }
})


// DELETE CONTECT

// EDIT CONTECT



app.listen(2000, () => {
    console.log('Server is running on port 2000');
});



















// M U-NAME : satyapalbishnoi129
// M U-PASS : mdPhOKJbDKe5mDsB