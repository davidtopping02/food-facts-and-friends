import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Groups from "./pages/Groups/Groups";
import News from "./pages/News/News";
import Services from "./pages/Services/Services";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
