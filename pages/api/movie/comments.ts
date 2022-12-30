import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req)
  
  try {
    const data = await prisma.comment.findMany();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}
