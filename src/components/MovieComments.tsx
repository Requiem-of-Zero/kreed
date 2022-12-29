import { useEffect, useState } from "react";
import { Comment } from "../../typings";

interface Props {
  comments: Comment[]
}

const MovieComments = ({comments}: Props) => {
  const [movieComments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (!comments.length) return;

    async function getComments() {
      const data = await fetch(`https://localhost:3000/api/movie/${movieId}/comments`).then(
        (res) => res.json()
      );
      console.log(data);
    }
    getComments();
  }, [comments]);

  return <div>MovieComments</div>;
};

export default MovieComments