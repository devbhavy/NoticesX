import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

interface responseElement{
    title : string
    link : any

}


async function fetchNotices(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://mait.ac.in/",{ waitUntil: "networkidle2" });


    const {html} = await page.evaluate(()=>{
        return {
            html : document.documentElement.innerHTML
        }
        
    })


    await browser.close();

    const $ = cheerio.load(html);
    
    
    const element = $(".crs_div");

    const response : responseElement[] = [];

    element.each((i,el)=>{  
            const newEl = $(el);
            const title = newEl.text();


            const href = newEl.find("a").attr("href");
            const link = `https://mait.ac.in${href}`


            response.push({
                title,link
                
            })
        
    })
    response.pop();

    
    return response

    
}

//https://mait.ac.in/index.php/component/content/article/notice-cancellation-and-rescheduling-of-examinations-for-b-tech-students.html?catid=9&Itemid=384

export {fetchNotices}

