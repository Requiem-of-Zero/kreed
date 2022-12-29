import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { authorId, movieId, content, authorName } = req.body;

  try {
    await prisma.comment.create({
      data: {
        authorName,
        authorId,
        movieId,
        content,
      },
    });
    res.status(200).json({ message: "Comment Created" });
  } catch (error) {
    console.log(error);
  }
}
