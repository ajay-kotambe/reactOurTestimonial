import "./Card.css";
const Card = () => {
  return (
    <div>
      <div>
        <h3></h3>
        <h5></h5>
      </div>
      <div>
        <div className="icon"></div>
        <p></p>
        <div className="icon"></div>
      </div>
      <div>
        <button>{"<"}</button>
        <button>{">"}</button>
        <button>Surprise Me</button>
      </div>
    </div>
  );
};

export default Card;
