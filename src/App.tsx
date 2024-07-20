import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import "./styles/app.scss";
import Layout from "./components/Layout";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    <>
      {/* <Navbar />
      <MainBanner />
      <ImageSlider />
      <Flower />
      <Cards />
      <Tiles /> */}

      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;