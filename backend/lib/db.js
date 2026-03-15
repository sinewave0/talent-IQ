import mongoose from "mongoose"

import {ENV} from "./env.js"

export const connectDB = async()=>{
    try {
       const conn = await mongoose.connect(ENV.DB_URL)
       console.log("successfully connected to MongoDB 🚀🔥🚀 ", conn.connection.host);
    } catch (error) {
        console.error("error connecting to mongo DB", error)
        process.exit(1)
    }

}