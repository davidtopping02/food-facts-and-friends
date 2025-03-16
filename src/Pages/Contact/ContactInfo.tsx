import { Envelope, TelephoneFill } from "react-bootstrap-icons";
import { contactInfoCardText } from "./ContactText";

export const ContactInfo = () => {
  return (
    <div className="container-fluid pt-1 pb-1">
      <div className="card">
        <div className="card-body text-center">
          <h2 className="heading heading-2">{contactInfoCardText.name}</h2>
          <h3 className="heading heading-3">{contactInfoCardText.role}</h3>
          <div>
            <div className="row align-items-center">
              <div className="col">
                <Envelope />
              </div>
              <div className="col">
                <p>{contactInfoCardText.email}</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col">
                <TelephoneFill />
              </div>
              <div className="col">
                <p>{contactInfoCardText.primaryPhone}</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col">
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
  );
};
