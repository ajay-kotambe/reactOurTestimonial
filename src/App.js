import "./App.css";
import Testimonial from "./components/Testimonial";
import review from "./data";

function App() {
  return (
    <div className="App-container">
      <div className="app">
        <h1>Our Testimonials</h1>
        <div className="underline"></div>
        <Testimonial review={review} />
      </div>
    </div>
  );
}

export default App;
