import { Envelope, TelephoneFill } from "react-bootstrap-icons";
import { contactInfoCardText } from "./ContactText";

export const ContactInfo = () => {
  return (
    <div className="container-fluid pt-1 pb-1 ">
      <div className="card">
        <div className="card-body text-center">
          <h3 className="heading heading-3">{contactInfoCardText.name}</h3>
          <h4 className="heading heading-4">{contactInfoCardText.role}</h4>
          <div className="pt-4 pb-4">
            <div className="row ">
              <div className="col-2">
                <Envelope />
              </div>
              <div className="col-10">{contactInfoCardText.email}</div>
            </div>
            <div className="row ">
              <div className="col-2">
                <TelephoneFill />
              </div>
              <div className="col-10">{contactInfoCardText.primaryPhone}</div>
            </div>
            <div className="row ">
              <div className="col-2">
                <TelephoneFill />
              </div>
              <div className="col-10">{contactInfoCardText.secondaryPhone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
