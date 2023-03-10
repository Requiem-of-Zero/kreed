import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../../atoms/modalAtom";
import { IMAGE_BASE_URL } from "../../constants/media";
import { Movie } from "../../typings";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    setFeaturedMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="relative flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end">
      <div className="z-0 absolute top-0 left-0 h-[50vh] lg:h-[95vh] w-screen select-none">
        <Image
          src={`${IMAGE_BASE_URL}/${
            featuredMovie?.backdrop_path || featuredMovie?.poster_path
          }`}
          object-fit="contain"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt="featured backdrop"
        />
      </div>
      <div className="bannerCTA z-10 pl-10 lg:w-200">
        <h1 className="font-bold max-w-s text-2xl pb-4 text-shadow-md md:text-4xl lg:text-7xl">
          {featuredMovie?.title ||
            featuredMovie?.name ||
            featuredMovie?.original_title}
        </h1>
        <p className="max-w-s pb-5 text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {featuredMovie?.overview}
        </p>
        <div className="flex space-x-3">
          <button className="bannerBtn bg-white text-black">
            <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
          </button>
          <button
            className="bannerBtn bg-[gray]/70"
            onClick={() => {
              setCurrentMovie(featuredMovie);
              setShowModal(true);
            }}
          >
            More Info
            <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
