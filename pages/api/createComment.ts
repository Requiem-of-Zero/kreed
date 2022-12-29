import {prisma} from '../../lib/prisma';
import {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const {authorId, movieId, content} = req.body;

  try {
    await prisma.comment.create({
      data: {
        authorId,
        movieId,
        content
      }
    })
    res.status(200).json({message: "Comment Created"})
  } catch(error) {
    console.log(error)
  }
}