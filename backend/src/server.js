import express from "express";
import cors from "cors";
import { connectDB } from "../lib/db.js";
const app = express();
app.use(cors());
import {ENV} from "../lib/env.js"
app.get("/health", (req, res)=>{
    res.status(200).json({message: "success: api is up and running"})
})
app.get("/books", (req, res)=>{
    res.status(200).json({message: "this is the books endpoint"})
})

app.get("/{*any}", (req, res)=>{
    res.status(200).json({message: "you are in unexplored territory. this endpoint havent been configured yet"})
})




const startServer = async() =>{
    try {
        await connectDB();
        app.listen(ENV.PORT, ()=>{
        console.log(" we are actively listening on port number", ENV.PORT);
        
})
    } catch (error) {
        console.error("error starting the server 😐", error);
    }
}

startServer();

