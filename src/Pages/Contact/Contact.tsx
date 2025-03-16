import { useSpring, animated } from "react-spring";

import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

function Contact() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
    config: { duration: 800 },
  });

  return (
    <div className="mt-5">
      <animated.div className="row" style={fadeIn}>
        <h2 className="heading page-title">Contact Page</h2>
      </animated.div>
      <div className="container">
        <div className="row">
          {/* First Column */}
          <div className="col-md-6">
            <animated.div style={fadeIn}>
              <ContactForm />
            </animated.div>
          </div>

          {/* Second Column */}
          <div className="col-md-6">
            <animated.div style={fadeIn}>
              <ContactInfo />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
