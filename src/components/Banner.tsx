import Image from "next/image";
import { useEffect, useState } from "react";
import { IMAGE_BASE_URL } from "../../constants/media";
import { Movie } from "../../typings";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setFeaturedMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 h-[95vh] w-screen">
        <Image
          src={`${IMAGE_BASE_URL}/${
            featuredMovie?.backdrop_path || featuredMovie?.poster_path
          }`}
          object-fit="contain"
          fill
          alt=""
        />
      </div>
      <div className="absolute">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-7xl">
          {featuredMovie?.title ||
            featuredMovie?.name ||
            featuredMovie?.original_title}
        </h1>
        <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {featuredMovie?.overview}
        </p>
      </div>
    </div>
  );
};

export default Banner;
