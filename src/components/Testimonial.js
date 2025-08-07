import { useState } from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = ({ review }) => {
  const [index, setIndex] = useState(0);
  const rightShiftHandler = () => {
    setIndex(index === review.length - 1 ? 0 : index + 1);
  };

  const leftShiftHandler = () => {
    setIndex(index === 0 ? review.length - 1 : index - 1);
  };
  const surpriseHandler = () => {
    const random =
      Math.floor(Math.random() * (0 - review.length + 1)) + review.length;
    setIndex(random);
  };
  return (
    <div className="card-testimonial-wrapper">
      <div>
        <Card data={review[index]} />
      </div>
      <div className="nav-buttons">
        <button onClick={leftShiftHandler}>
          <FaChevronLeft />
        </button>
        <button onClick={rightShiftHandler}>
          <FaChevronRight />
        </button>
      </div>

      <div className="surprise-button">
        <button className="surprise" onClick={surpriseHandler}>
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
