// require("dotenv").config() 

const express = require("express");
// const next = require("next")

const app = express();


app.get("/login",(req,res)=>{
    res.send("welcome to server login")
})



app.listen(4000,()=>{
    console.log("app listen port 4000");
})