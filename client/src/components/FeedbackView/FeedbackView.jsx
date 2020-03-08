import "./FeedbackView.scss";
import React from "react";

// svg
import { ReactComponent as StarSVG } from "../../assets/svg/star.svg";

// JS Rendering CSS
import {} from "./FeedbackViewStyles";

export const FeedbackView = ({
  name,
  photo,
  rating,
  feedback,
  count,
  color
}) => {
  const even = count % 2 === 0 ? 1 : 0;
  const groundedRating = Math.floor(rating);

  return (
    <div className="feedback">
      <div className={`feedback__left ${even ? "order-big" : "order-small"}`}>
        <div className="feedback__left--container">
          <div
            style={{ border: `0.3rem solid ${color}` }}
            className={`feedback__left--imageWrap ${
              even ? "img-wrap-even" : ""
            }`}
          >
            <img
              className="feedback__left--img"
              alt="happy user"
              src={photo}
            ></img>
          </div>
          <div
            style={
              even
                ? {
                    backgroundImage: `linear-gradient(to right, ${color} 90%, transparent 90%)`
                  }
                : {
                    backgroundImage: `linear-gradient(to right, transparent 10%, ${color} 10%)`
                  }
            }
            className={`feedback__left--ratingWrap ${
              even ? "cnt-wrap-even" : ""
            }`}
          >
            <div
              className={`feedback__left--name ${even ? "cnt-name-even" : ""}`}
            >
              {name}
            </div>
            <div
              className={`feedback__left--rating ${
                even ? "cnt-rating-even" : ""
              }`}
            >
              {Array.from(new Array(groundedRating), (el, i) => i + 1).map(
                el => {
                  return <StarSVG key={el} className="feedback__left--svg" />;
                }
              )}
            </div>
          </div>
          <div
            style={
              even
                ? { borderRight: `${color} 2rem solid` }
                : { borderLeft: `${color} 2rem solid` }
            }
            className={`${even ? "triangle-even" : "triangle-odd"}`}
          ></div>
        </div>
      </div>
      <div className="feedback__right">
        <div className="feedback__right--container">
          <div style={{ color: `${color}` }} className="feedback__right--qOpen">
            &ldquo;
          </div>
          <div className="feedback__right--text">{feedback}</div>
          <div
            style={{ color: `${color}` }}
            className="feedback__right--qClose"
          >
            &bdquo;
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackView;
