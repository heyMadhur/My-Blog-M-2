import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // console.log(req.body)
    
    const detailsArray= JSON.parse(await fs.promises.readFile("contactdata/contactInfo.json",'utf-8'));
    // console.log(detailsArray)
    
    const data= JSON.parse(req.body);
    
    detailsArray.push(data);
    
    fs.promises.writeFile("contactdata/contactInfo.json", JSON.stringify(detailsArray));
    
    res.status(200).json("Data Added")


  } else {
    res.status(200).json("zxzxz")
    // Handle any other HTTP method
  }
}
