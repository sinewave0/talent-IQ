import express from "express";
import { ENV } from "../lib/env.js";
const app = express();

app.get("/health", (req, res)=>{
    res.status(200).json({message: "success: api is up and running"})
})

app.listen(ENV.PORT, ()=>{
    console.log(" we are actively listening on port number", ENV.PORT);
})

