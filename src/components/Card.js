import "./Card.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ data }) => {
  return (
    <div className="card-wrapper">
      <div className="profile-img-wrapper">
        <img src={data.image} alt={data.name} />
      </div>

      <div className="card">
        <div className="card-info">
          <h2>{data.name}</h2>
          <h5>{data.job}</h5>
        </div>

        <div className="card-text">
          <div className="icon">
            <FaQuoteLeft />
          </div>
          <p>{data.text}</p>
          <div className="icon">
            <FaQuoteRight />
          </div>
        </div>

        <div className="nav-buttons">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>

        <div className="surprise-button">
          <button className="surprise">Surprise Me</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
