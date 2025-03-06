import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Donate from "./Pages/Donate/Donate";
import Contact from "./Pages/Contact/Contact";
import Supporters from "./Pages/Supporters/Supporters";

// components
import Navbar from "./Components/Navbar/Navbar";

// css
import "./App.css";

import Header from "./Components/Header/Header";

function App() {
  return (
    <div id="appContainer" className="container">
      <Router>
        <div className="row pt-4">
          <div className="col">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/supporters" element={<Supporters />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
