import Home from "./components/home/Home";
import Accordion from "./components/accordion/Accordion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="App center mt-40 h-screen items-start">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordion" element={<Accordion />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
