// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs';

type Data = {
  name?: string;
  error?: string;

};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


fs.readFile(`blogdata/${req.query.slug}`, 'utf-8', (err, data)=>{
  if(err){
    const response: Data= {error: "Blog not Found"};
    res.status(500).json(response);
  }
  // console.log(data);
  res.status(200).json(JSON.parse(data))
})
  

}
