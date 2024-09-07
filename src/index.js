import dotenv from "dotenv"
import DBconnect from "./db/index.js";
import express from "express"
const app=express()
dotenv.config({
    path:"../.env"
})
const PORTval=process.env.PORT
DBconnect()
.then(()=>{
    app.listen(PORTval,()=>{
    console.log(`server started at port : ${PORTval}`)
   })
})
.catch((err)=>{
    console.log("\n ERROR found while starting",err)
})