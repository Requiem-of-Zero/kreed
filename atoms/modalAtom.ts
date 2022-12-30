import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";
import { Comments, Movie } from "../typings";

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const movieState = atom<Movie | DocumentData | null>({
  key: 'movieState',
  default: null,
})

export const commentsState = atom<Comment[] | DocumentData[] | null>({
  key: 'commentsState',
  default: null
})