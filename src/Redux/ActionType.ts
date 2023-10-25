export const MAKE_REQUEST = "MAKE_REQUEST";
export const FAIL_REQUEST = "FAIL_REQUEST";
export const GET_ARTWORKS_LIST = "GET_ARTWORKS_LIST";
export const GET_ARTWORK_OBJ = "GET_ARTWORK_OBJ";

export interface Artwork {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    alt_text: string;
    height: number;
    lqip: string;
    width: number;
    timestamp: string;
    title: string;
    updated_at: string;
    video_ids: [];
  };
  department_title: string;
  place_of_origin: string;
  date_display: string;
  category_titles: string[];
}

interface MakeRequestAction {
  type: typeof MAKE_REQUEST;
}

interface GetArtworkListAction {
  type: typeof GET_ARTWORKS_LIST;
  payload: Artwork[];
}

interface GetArtworkObjAction {
  type: typeof GET_ARTWORK_OBJ;
  payload: Artwork;
}

interface FailRequestAction {
  type: typeof FAIL_REQUEST;
  payload: string;
}

export type ArtworkActionTypes =
  | GetArtworkListAction
  | MakeRequestAction
  | GetArtworkObjAction
  | FailRequestAction;
