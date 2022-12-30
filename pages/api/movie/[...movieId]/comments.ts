import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { movieId } = req.query;

  try {
    await prisma.comment.findMany({
      where: {
        movieId: movieId,
      },
    });
    res.status(200).json({ message: "Comment Created" });
  } catch (error) {
    console.log(error);
  }
}
