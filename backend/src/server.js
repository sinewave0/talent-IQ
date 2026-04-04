import express from "express";
import cors from "cors";
import { connectDB } from "../lib/db.js";
import {ENV} from "../lib/env.js"
import {serve } from "inngest/express"
import { inngest, functions } from "../lib/inngest.js";
import { clerkMiddleware } from '@clerk/express'
import { protectRoute } from "../middleware/protectRoute.js";
import chatRoutes from "../routes/chatRoutes.js"

const app = express();
app.use(express.json());
app.use(cors({origin:ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware())


app.use("/api/inngest", serve({client:inngest, functions}))
app.get("/health", (req, res)=>{
    res.status(200).json({message: "success: api is up and running"})
})

// app.get("/video-calls", protectRoute,  (req, res)=>{
//     res.status(200).json({msg: "this is the video calls endpoint protected route"})
// })
app.use("/api/chat", chatRoutes,)
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

