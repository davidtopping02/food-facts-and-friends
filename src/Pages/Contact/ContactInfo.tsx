import { Envelope, TelephoneFill } from "react-bootstrap-icons";
import { contactInfoCardText } from "./ContactText";

export const ContactInfo = () => {
  return (
    <>
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
};
