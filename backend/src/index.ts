import express from "express";
import cors from "cors";
import { rootRouter } from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const port = process.env.PORT;



app.use(cors());

app.use("/app/",rootRouter);



app.listen(port,function(){
    console.log(`server running on port ${port}`);
})