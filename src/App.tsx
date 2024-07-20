import Cards from "./components/Cards";
import Flower from "./components/flower";
import MainBanner from "./components/MainBanner";
import Navbar from "./components/navbar";
import ImageSlider from "./components/Slider";
import Tiles from "./components/Tiles";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <ImageSlider />
      <Flower />
      <Cards />
      <Tiles />
    </>
  );
}

export default App;