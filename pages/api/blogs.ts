// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const allFilesData:string[]=[];

  const data= await fs.promises.readdir(`blogdata`, 'utf-8');
  data.forEach((file)=>{
    const fileData= fs.readFileSync(`blogdata/${file}`, 'utf-8');
    allFilesData.push(JSON.parse(fileData));
  });
  res.status(200).json(allFilesData);


}
