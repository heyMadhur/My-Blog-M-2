import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const detailsArray = JSON.parse(
      await fs.promises.readFile("contactdata/contactInfo.json", "utf-8")
    );

    const data = JSON.parse(req.body);

    detailsArray.push(data);

    fs.promises.writeFile(
      "contactdata/contactInfo.json",
      JSON.stringify(detailsArray)
    );

    res.status(200).json("Data Added");
  } else {
    // Handle any other HTTP method
    res.status(200).json("Could not add your data");
  }
}
