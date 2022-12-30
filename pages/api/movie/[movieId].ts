import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query;
  const numId = Number(movieId)
  try {
    const data = await prisma.comment.findMany({
      where: {
        movieId: numId,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export default handler;
