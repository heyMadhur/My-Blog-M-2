import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allFilesData: string[] = [];
  // res.status(200).json("Request Recieved");

  // let data = await fs.promises.readdir(`/blogdata`, "utf-8");
  // data = data.slice(0, parseInt("" + req.query.count));
  // data.forEach((file) => {
    // const fileData = fs.readFileSync(`/blogdata/${file}`, "utf-8");
    // allFilesData.push(JSON.parse(fileData));
  // });
  res.status(200).json('hi');
}
