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
import DarkMode from "./components/dark_mode/DarkMode";
import Tabs from "./components/tabs/Tabs";
import dataTabs from "./components/tabs/data";
import ScrollIndicator from "./components/scroll_indicator/ScrollIndicator";
import Popup from "./components/modal_popup/Popup";
import GithubProflie from "./components/github_profile/GithubProfile";
import AutoComplete from "./components/auto_complete/AutoComplete";
import Game from "./components/tic-tac-toe/Game";
import ScrollToTopAndBottom from "./components/scroll_to_top_and_bottom/ScrollToTopAndBottom";
import Weather from "./components/weather/Weather";
import TimerDown from "./components/timer_down/TimerDown";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <Router>
      <main className="App center min-h-screen font-mono">
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
          <Route path="/dark-mode" element={<DarkMode />} />
          <Route path="/scroll-indicator" element={<ScrollIndicator />} />
          <Route path="/tabs" element={<Tabs data={dataTabs} />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/github-profile" element={<GithubProflie />} />
          <Route path="/auto-complete" element={<AutoComplete />} />
          <Route path="/tic-tac-toe" element={<Game />} />
          <Route
            path="/scroll-to-top-and-bottom"
            element={<ScrollToTopAndBottom />}
          />
          <Route path="/weather" element={<Weather />} />
          <Route path="/timer-down" element={<TimerDown count={1000} />} />
          <Route path="/parallax" element={<Parallax />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
