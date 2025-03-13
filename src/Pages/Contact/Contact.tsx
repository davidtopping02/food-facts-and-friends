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
    <>
      {/* <div className="container mt-5 p-0 m-0"> */}
      <animated.div className="row" style={fadeIn}>
        <h1 className="heading heading-1">Contact Page</h1>
      </animated.div>
      {/* </div>s */}

      {/* <div className="container mt-5 p-0 m-0"> */}
      <div className="row">
        <div className="col-sm-6">
          <ContactForm />
        </div>

        <div className="col-sm-6">
          <ContactInfo />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Contact;
