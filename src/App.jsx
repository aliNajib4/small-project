import Home from "./components/home/Home";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random_color/RandomColor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="App center h-screen font-mono">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/random-color" element={<RandomColor />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
