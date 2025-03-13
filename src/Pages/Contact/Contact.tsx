import { useSpring, animated } from "react-spring";
import { contactInfoCardText } from "./ContactText";
import { Envelope, TelephoneFill } from "react-bootstrap-icons";

function Contact() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
    config: { duration: 800 },
  });

  return (
    <>
      <div className="container mt-5">
        <animated.div className="row" style={fadeIn}>
          <h1 className="heading heading-1">Contact Page</h1>
        </animated.div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card w-200 h-200">
            <div className="card-body text-center d-flex flex-column justify-content-center">
              <h2 className="heading heading-2">{contactInfoCardText.name}</h2>
              <h3 className="heading heading-3">{contactInfoCardText.role}</h3>
              <div>
                <div className="row">
                  <Envelope className="col align-self-center" />
                  <p className="col align-self-center">
                    {contactInfoCardText.email}
                  </p>
                </div>
                <div className="row">
                  <TelephoneFill className="col align-self-center" />
                  <p className="col align-self-center">
                    {contactInfoCardText.primaryPhone}
                  </p>
                </div>
                <div className="row">
                  <TelephoneFill className="col align-self-center" />
                  <p className="col align-self-center">
                    {contactInfoCardText.secondaryPhone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
