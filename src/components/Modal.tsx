import {
  PlusIcon,
  XMarkIcon,
  HandThumbUpIcon
} from "@heroicons/react/24/outline";
import MuiModal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player/lazy";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../../atoms/modalAtom";
import { Element, Genre, Movie } from "../../typings";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [featuredMovie, setFeaturedMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!featuredMovie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          featuredMovie?.media_type === "tv" ? "tv" : "movie"
        }/${featuredMovie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((res) => res.json());

      if (data?.videos) {
        const vidIdx = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[vidIdx]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }
    fetchMovie();
  }, [featuredMovie]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          onClick={handleClose}
          className="modalBtn absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]/60"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />

          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-white text-black px-8 text-xl font-bold transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-black" /> Play
              </button>

              <button className="modalBtn">
                <PlusIcon className="h-7 w-7" />
              </button>
              <button className="modalBtn">
                <HandThumbUpIcon className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
