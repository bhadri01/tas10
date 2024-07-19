import Flower from "./components/flower";
import ImageSlider from "./components/Slider";
import "./styles/app.scss";

function App() {
  return (
    <>
      {/* <div className="title">welcome project</div> */}
      <ImageSlider />
      <Flower />
    </>
  );
}

export default App;