import { Envelope, TelephoneFill } from "react-bootstrap-icons";
import { contactInfoCardText } from "./ContactText";

export const ContactInfo = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col ">
            <div className="card w-100">
              <div className="card-body text-center h-100">
                <h2 className="heading heading-2">
                  {contactInfoCardText.name}
                </h2>
                <h3 className="heading heading-3">
                  {contactInfoCardText.role}
                </h3>
                <div>
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <Envelope />
                    </div>
                    <div className="col">
                      <p>{contactInfoCardText.email}</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <TelephoneFill />
                    </div>
                    <div className="col">
                      <p>{contactInfoCardText.primaryPhone}</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <TelephoneFill />
                    </div>
                    <div className="col">
                      <p>{contactInfoCardText.secondaryPhone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
