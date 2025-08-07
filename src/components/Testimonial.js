import Card from "./Card";

const Testimonial = ({ review }) => {
  return (
    <div>
      <Card data={review[0]} />
    </div>
  );
};

export default Testimonial;
