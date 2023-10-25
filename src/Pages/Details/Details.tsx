import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArtworkStateType } from "../../Redux/Reducer";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../Redux/Store";
import { ArtworkActionTypes } from "../../Redux/ActionType";
import { Link, useParams } from "react-router-dom";
import { fetchArtworkObj } from "../../Redux/Action";
import "./Details.css";

export const Details = (): ReactElement => {
  const artworkDetails = useSelector(
    (state: ArtworkStateType) => state.artwork
  );
  const dispatch =
    useDispatch<ThunkDispatch<RootState, void, ArtworkActionTypes>>();

  const { artworkObj } = artworkDetails;
  const { id } = useParams();

  useEffect(() => {
    const artworkId = Number(id);
    dispatch(fetchArtworkObj(artworkId));
  }, [dispatch, id]);

  return (
    <div className="details-container">
      <button className="button">
        <Link to="/" className="link">
          Back
        </Link>
      </button>
      <h1>Artwork Details</h1>
      <div className="details-content">
        <h1 className="artwork-title">
          <span>Title:</span> {artworkObj?.title}
        </h1>
        {artworkObj?.description && (
          <p className="artwork-description">
            <span> Description:</span> {artworkObj?.description}
          </p>
        )}
        <div>
          <div className="info-item">
            {artworkObj?.category_titles && (
              <>
                <span>Category:</span> {artworkObj.category_titles[0]}
              </>
            )}
          </div>
          <div className="info-item">
            <span>Date:</span> {artworkObj?.date_display}
          </div>
          <div className="info-item">
            <span>Place of Origin:</span> {artworkObj?.place_of_origin}
          </div>
          <div className="info-item">
            <span>Department:</span> {artworkObj?.department_title}
          </div>
        </div>
      </div>
    </div>
  );
};
