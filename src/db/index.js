import mongoose from "mongoose";
import { DBname } from "../constants.js";
const DBconnect=async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DBname}`)
        console.log(`\n MONGODB CONNECTED`)
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED",error)
        process.exit(1)
    }
}

export default DBconnect