import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArtworkStateType } from "../../Redux/Reducer";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../Redux/Store";
import { Artwork, ArtworkActionTypes } from "../../Redux/ActionType";
import { fetchArtworkList } from "../../Redux/Action";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = (): ReactElement => {
  const artworksLists = useSelector((state: ArtworkStateType) => state.artwork);
  const dispatch =
    useDispatch<ThunkDispatch<RootState, void, ArtworkActionTypes>>();
  const { artworksList, loading, errorMessage } = artworksLists;

  useEffect(() => {
    dispatch(fetchArtworkList());
  }, [dispatch]);

  return (
    <>
      <h1>Artwork List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <ul className="artworks-grid">
          {artworksList &&
            artworksList.map((artwork: Artwork) => (
              <div key={artwork.id} className="artwork-item">
                <img
                  src={artwork.thumbnail?.lqip}
                  alt={artwork.thumbnail?.alt_text}
                  className="artwork-image"
                />
                <div className="artwork-details">
                  <h2 className="artwork-title">{artwork.title}</h2>
                  <button className="button">
                    <Link className="link" to={`/details/${artwork.id}`}>
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            ))}
        </ul>
      )}
    </>
  );
};
