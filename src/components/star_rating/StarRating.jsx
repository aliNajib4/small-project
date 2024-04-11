import PropTypes from "prop-types";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
// import { FaStar } from "react-icons/fa6";

const StarRating = ({ noOfStars: stars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="flex">
      {[...Array(stars)].map((_, index) => (
        <FaStar
          color={(hover || rating) > index ? "#f59e0b" : ""}
          size={32}
          key={index}
          onClick={() => setRating(index + 1)}
          onMouseMove={() => setHover(index + 1)}
          onMouseLeave={() => setHover(rating)}
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  noOfStars: PropTypes.number,
};

export default StarRating;
