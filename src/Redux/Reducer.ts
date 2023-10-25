import {
  ArtworkActionTypes,
  FAIL_REQUEST,
  GET_ARTWORKS_LIST,
  GET_ARTWORK_OBJ,
  MAKE_REQUEST,
  Artwork,
} from "./ActionType";

export interface ArtworkState {
  loading: boolean;
  artworksList: Artwork[];
  artworkObj: Artwork | null;
  errorMessage: string;
}

const initailState: ArtworkState = {
  loading: true,
  artworksList: [],
  artworkObj: null,
  errorMessage: "",
};

export const Reducer = (
  state: ArtworkState = initailState,
  action: ArtworkActionTypes
) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case GET_ARTWORKS_LIST:
      return {
        ...state,
        loading: false,
        errorMessage: "",
        artworksList: action.payload,
        artworkObj: null,
      };
    case GET_ARTWORK_OBJ:
      return {
        ...state,
        loading: false,
        artworkObj: action.payload,
      };
    default:
      return state;
  }
};

export type ArtworkStateType = {
  artwork: ArtworkState;
};
