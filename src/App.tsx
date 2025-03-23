import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Supporters from "./Pages/Supporters/Supporters";
import OpeningHours from "./Pages/OpeningHours/OpeningHours";
import NewsLetter from "./Pages/NewsLetter/NewsLetter";

// Donate Pages
import Donate from "./Pages/Donate/Donate";
import DonateMoney from "./Pages/Donate/DonateMoney/DonateMoney";
import DonateTime from "./Pages/Donate/DonateTime/DonateTime";
import DonateItems from "./Pages/Donate/DonateItems/DonateItems";
import DonateRecycle from "./Pages/Donate/DonateRecyclables/DonateRecyclables";

// Components
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import "./App.css";

const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: document.title,
    });
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    ReactGA.initialize(googleAnalyticsId);
  }, []);

  return (
    <Router>
      <Analytics />
      <Container id="appContainer">
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/supporters" element={<Supporters />} />
              <Route path="/news-letter" element={<NewsLetter />} />
              <Route path="/opening-hours" element={<OpeningHours />} />

              {/* Nested Donate Routes */}
              <Route path="/donate" element={<Donate />} />
              <Route path="/donate/money" element={<DonateMoney />} />
              <Route path="/donate/time" element={<DonateTime />} />
              <Route path="/donate/items" element={<DonateItems />} />
              <Route path="/donate/recycle" element={<DonateRecycle />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
