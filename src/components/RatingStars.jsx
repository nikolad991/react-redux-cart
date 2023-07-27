import React from "react";
import { BiStar, BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
const RatingStars = ({ rating }) => {
  const wholeNumber = Math.floor(rating);
  const fraction = Math.ceil(rating) - rating;
  return (
    <div className="stars">
      {Array.from({ length: wholeNumber }).map((item, index) => (
        <BiSolidStar key={index} />
      ))}
      {fraction <= 0.5 && <BiSolidStarHalf />}
    </div>
  );
};

export default RatingStars;
