const express = require('express');
const mongoose = require('mongoose');
const app=express();
const cors = require('cors');

app.use(express.json());
// Use the cors middlewar
app.use(cors());

const userRoute=require("./router/routes");

mongoose.connect('mongodb+srv://aryan:aryanabbas@luster0.itmipga.mongodb.net/mern?retryWrites=true&w=majority').then(()=>{
    console.log("Sucess")
}).catch((err)=>console.log("error"))

app.listen(3000);
app.use(userRoute);
