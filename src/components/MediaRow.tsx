import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Movie } from "../../typings";
import MediaItem from "./MediaItem";

interface Props {
  title: string;
  movies: Movie[];
}

const MediaRows = ({ title, movies }: Props) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-60 pl-10 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <Splide
        options={{
          rewind: true,
          perMove: 5,
          arrows: false,
        }}
        id="media_row__arrow"
        className="group md:-ml-2 w-[100vw] px-4"
      >
        <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
        <div className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide">
          {movies.map((movie, i) => {
            return (
              <SplideSlide>
                <MediaItem key={`media_item-${i}`} movie={movie} />
              </SplideSlide>
            );
          })}
        </div>
        <ChevronRightIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
      </Splide>
    </div>
  );
};

export default MediaRows;
