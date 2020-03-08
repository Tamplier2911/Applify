import "./FeedbacksCollection.scss";
import React, { useState } from "react";

// components
import FeedbackView from "../FeedbackView/FeedbackView";

// temporary DTO
const reviewData = [
  {
    id: 32214,
    name: "Dayana WoodsDayana WoodsDayana WoodsDayana WoodsDayana Woods",
    photo: "https://bit.ly/39y1VnX",
    rating: 4.2,
    color: "#1a73e8",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maxime dicta explicabo molestias accusantium magnam optio, dolores, ex vitae alias id est itaque corporis praesentium obcaecati aliquam molestiae dolore ipsum?"
  },
  {
    id: 32215,
    name: "Yuki MayDayana WoodsDayana WoodsDayana WoodsDayana Woods",
    photo: "https://bit.ly/2ItRmX9",
    rating: 3.5,
    color: "#fe3f2d",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maxime dicta explicabo molestias accusantium magnam optio, dolores, ex vitae alias id est itaque corporis praesentium obcaecati aliquam molestiae dolore ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maxime dicta explicabo molestias accusantium magnam optio, dolores, ex vitae alias id est itaque corporis praesentium obcaecati aliquam molestiae dolore ipsum?"
  },
  {
    id: 32216,
    name:
      "Rayley BridgesDayana WoodsDayana WoodsDayana WoodsDayana WoodsDayana Woods",
    photo: "https://bit.ly/3cECNxT",
    rating: 5.0,
    color: "#00a8a9",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maxime dicta explicabo molestias accusantium magnam optio, dolores, ex vitae alias id est itaque corporis praesentium obcaecati aliquam molestiae dolore ipsum?"
  },
  {
    id: 32217,
    name: "Clara Jepsen",
    photo: "https://bit.ly/3av5BXQ",
    rating: 4.5,
    color: "#ffaa2d",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maxime dicta explicabo molestias accusantium magnam optio, dolores, ex vitae alias id est itaque corporis praesentium obcaecati aliquam molestiae dolore ipsum?"
  },
  {
    id: 32218,
    name: "Dayana WoodsDayana WoodsDayana WoodsDayana WoodsDayana Woods",
    photo: "https://bit.ly/39y1VnX",
    rating: 4.2,
    color: "#1a73e8",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maxime dicta explicabo molestias accusantium magnam optio, dolores, ex vitae alias id est itaque corporis praesentium obcaecati aliquam molestiae dolore ipsum?"
  },
  {
    id: 32219,
    name: "Yuki MayDayana WoodsDayana WoodsDayana WoodsDayana Woods",
    photo: "https://bit.ly/2ItRmX9",
    rating: 3.5,
    color: "#fe3f2d",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maxime dicta explicabo molestias accusantium magnam optio, dolores, ex vitae alias id est itaque corporis praesentium obcaecati aliquam molestiae dolore ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maxime dicta explicabo molestias accusantium magnam optio, dolores, ex vitae alias id est itaque corporis praesentium obcaecati aliquam molestiae dolore ipsum?"
  },
  {
    id: 32220,
    name:
      "Rayley BridgesDayana WoodsDayana WoodsDayana WoodsDayana WoodsDayana Woods",
    photo: "https://bit.ly/3cECNxT",
    rating: 5.0,
    color: "#00a8a9",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maxime dicta explicabo molestias accusantium magnam optio, dolores, ex vitae alias id est itaque corporis praesentium obcaecati aliquam molestiae dolore ipsum?"
  },
  {
    id: 32221,
    name: "Clara Jepsen",
    photo: "https://bit.ly/3av5BXQ",
    rating: 4.5,
    color: "#ffaa2d",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maxime dicta explicabo molestias accusantium magnam optio, dolores, ex vitae alias id est itaque corporis praesentium obcaecati aliquam molestiae dolore ipsum?"
  },
  {
    id: 32222,
    name:
      "Rayley BridgesDayana WoodsDayana WoodsDayana WoodsDayana WoodsDayana Woods",
    photo: "https://bit.ly/3cECNxT",
    rating: 5.0,
    color: "#00a8a9",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maxime dicta explicabo molestias accusantium magnam optio, dolores, ex vitae alias id est itaque corporis praesentium obcaecati aliquam molestiae dolore ipsum?"
  },
  {
    id: 32223,
    name: "Clara Jepsen",
    photo: "https://bit.ly/3av5BXQ",
    rating: 4.5,
    color: "#ffaa2d",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maxime dicta explicabo molestias accusantium magnam optio, dolores, ex vitae alias id est itaque corporis praesentium obcaecati aliquam molestiae dolore ipsum?"
  }
];

// const totalReviews = reviewData.length;

// const getMoreReviews = () => {};

const FeedbacksCollection = () => {
  const [feedsData, setFeedsData] = useState({
    currentlyLoadedFeeds: reviewData.slice(0, 4),
    allFeedsCollection: reviewData,
    totalFeeds: reviewData.length
  });

  const { currentlyLoadedFeeds, allFeedsCollection, totalFeeds } = feedsData;
  let count = -1;
  return (
    <div className="feedback-collection">
      <div className="feedback-collection__title">Recent Feedbacks:</div>
      {currentlyLoadedFeeds.map(feedback => {
        count++;
        return <FeedbackView key={feedback.id} {...feedback} count={count} />;
      })}
      <div
        className="feedback-collection__button"
        onClick={
          currentlyLoadedFeeds.length === totalFeeds
            ? () => {}
            : () =>
                setFeedsData({
                  ...feedsData,
                  currentlyLoadedFeeds: [
                    ...currentlyLoadedFeeds,
                    ...allFeedsCollection.splice(4, 4)
                  ]
                })
        }
      >
        Show More
      </div>
    </div>
  );
};

export default FeedbacksCollection;
