import express from "express";
import { fetchNotices } from "../services/Pupeteer.js";
const rootRouter = express.Router();


rootRouter.get("/fetch-notices",async function(req,res){
    const notices = await fetchNotices();

    if(notices.length==0){
        res.status(300).json({
            msg : "Failed to fetch notices! Try again later"
        })
    }else{
        res.status(200).json({
            notices
        })
    }
})



export {rootRouter}


