import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random_color/RandomColor";
import StarRating from "./components/star_rating/StarRating";
import Sliders from "./components/sliders/Sliders";
import Slider1 from "./components/sliders/1/Slider";
import Slider2 from "./components/sliders/2/Slider";
import Slider3 from "./components/sliders/3/Slider";
import NotFound from "./components/NotFound";
import LoadMore from "./components/load_more/LoadMore";
import TreeView from "./components/tree_view/TreeView";
import QrCode from "./components/qr_code/QrCode";

function App() {
  return (
    <Router>
      <main className="App center h-screen font-mono">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/random-color" element={<RandomColor />} />
          <Route path="/star-rating" element={<StarRating />} />
          <Route path="/sliders" element={<Sliders />} />
          <Route path="/sliders/1" element={<Slider1 />} />
          <Route path="/sliders/2" element={<Slider2 />} />
          <Route path="/sliders/3" element={<Slider3 />} />
          <Route path="/load-more" element={<LoadMore />} />
          <Route path="/tree-view" element={<TreeView />} />
          <Route path="/qr-code" element={<QrCode />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
