import { useSpring, animated } from "react-spring";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { contactInfoCardText } from "./ContactText";

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
          <div className="card w-100 h-100">
            <div className="card-body text-center d-flex flex-column justify-content-center">
              <h2 className="heading heading-2">{contactInfoCardText.name}</h2>
              <h3 className="heading heading-3">{contactInfoCardText.role}</h3>
              <div>
                <EmailIcon />
                <p className="card-text">{contactInfoCardText.email}</p>
              </div>
              <div>
                <PhoneIcon />
                <p className="card-text">{contactInfoCardText.primaryPhone}</p>
              </div>
              <div>
                <PhoneIcon />
                <p className="card-text">
                  {contactInfoCardText.secondaryPhone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
