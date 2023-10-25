import { Dispatch } from "redux";
import {
  Artwork,
  ArtworkActionTypes,
  FAIL_REQUEST,
  GET_ARTWORKS_LIST,
  GET_ARTWORK_OBJ,
  MAKE_REQUEST,
} from "./ActionType";

export const makeRequest = (): ArtworkActionTypes => {
  return { type: MAKE_REQUEST };
};

export const failRequest = (err: string): ArtworkActionTypes => {
  return { type: FAIL_REQUEST, payload: err };
};

export const getArtworksList = (data: Artwork[]): ArtworkActionTypes => {
  return { type: GET_ARTWORKS_LIST, payload: data };
};

export const getArtworkObj = (data: Artwork): ArtworkActionTypes => {
  return { type: GET_ARTWORK_OBJ, payload: data };
};

export const fetchArtworkList = () => {
  return (dispatch: Dispatch<ArtworkActionTypes>) => {
    dispatch(makeRequest());
    fetch("https://corsproxy.io/?https://api.artic.edu/api/v1/artworks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("error with fetch");
        }
        return response.json();
      })
      .then((data) => {
        const artworkList = data.data;
        dispatch(getArtworksList(artworkList));
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};

export const fetchArtworkObj = (id: number) => {
  return (dispatch: Dispatch<ArtworkActionTypes>) => {
    dispatch(makeRequest());
    fetch("https://corsproxy.io/?https://api.artic.edu/api/v1/artworks/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("error from network");
        }
        return response.json();
      })
      .then((data) => {
        const artworkList = data.data;
        dispatch(getArtworkObj(artworkList));
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};
