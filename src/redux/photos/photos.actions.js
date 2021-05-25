import photosTypes from "./photos.types";
import PHOTOS from "./photos.data";

export const fetchPhotos = () => {
  return {
    type: photosTypes.FETCH_PHOTOS,
    payload: PHOTOS,
  };
};
