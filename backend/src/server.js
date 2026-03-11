import express from "express";
import cors from "cors";
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


app.listen(ENV.PORT, ()=>{
    console.log(" we are actively listening on port number", ENV.PORT);
})

