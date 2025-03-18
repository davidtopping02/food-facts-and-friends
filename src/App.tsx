import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Donate from "./Pages/Donate/Donate";
import Contact from "./Pages/Contact/Contact";
import Supporters from "./Pages/Supporters/Supporters";
import OpeningHours from "./Pages/OpeningHours/OpeninngHours";
import NewsLetter from "./Pages/NewsLetter/NewsLetter";

// Components
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Container id="appContainer">
        <Router>
          <Row className="pt-4">
            <Col>
              <Header />
            </Col>
          </Row>

          <Row>
            <Col>
              <Navbar />
            </Col>
          </Row>

          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/supporters" element={<Supporters />} />
                <Route path="/news-letter" element={<NewsLetter />} />
                <Route path="/opening-hours" element={<OpeningHours />} />
              </Routes>
            </Col>
          </Row>
        </Router>
      </Container>

      <Footer />
    </>
  );
}

export default App;
