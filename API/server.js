import express from 'express'
import mongoose from 'mongoose';
import { Contact } from './Contect-Model.js';
import bodyParser from 'express';


const app = express();

app.use(bodyParser.json())

mongoose.connect(
    "mongodb+srv://satyapalbishnoi129:mdPhOKJbDKe5mDsB@cluster0.aj8cnr6.mongodb.net/",
    {
        dbName:"CONTECT-SAVE-USING-MERN"
    }
).then(()=>console.log("DATABASE CONNECTED.....!!!")).catch((err)=>console.log(err))


// GET ALL CONTECT

app.get("/", async (req,res)=>{
    try {
        let contect = await Contact.find()

        res.json({message:"All Contects", contect})
    } catch (error) {
        res.json({message:error.message})
    }
})

//ADD NEW CONTECT

app.post('/',async(req,res)=>{
    const {name,email,phone} = req.body
    try{
        let contect = await Contact.find({email})
        if(contect) return res.json({message:"Contect Alredy ADDED....."})

        contect = await Contact.create({name,email,phone})
        res.json({message:"Contect save .........!",contect})
    }
    catch (error){
        res.json({message: error.message})
    }

})


// DELETE CONTECT

app.delete('/:id',async(req,res)=>{
    try{
        let contect = await Contact.findById(req.params.id)
        if(!contect) return res.json({message:"Contect Not Found"})

        contect = await Contact.findByIdAndDelete(req.params.id)
        res.json({message:"Contect Deleted",contect})
    }
    catch (error){
        res.json({message: error.message})
    }

})

// EDIT CONTECT

app.put('/:id',async(req,res)=>{
    const {name,email,phone} = req.body
    try{
        let contect = await Contact.findById(req.params.id)
        if(!contect) return res.json({message:"Contect Not Found"})

        contect = await Contact.findByIdAndUpdate(req.params.id,{name,email,phone},{new:true})
        res.json({message:"Contect Updated",contect})
    }
    catch (error){
        res.json({message: error.message})
    }

})



app.listen(2000, () => {
    console.log('Server is running on port 2000');
});

