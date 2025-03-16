import { MDBInput, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";

export const ContactForm = () => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{ height: "100vh" }}
  >
    <div className="card w-100" style={{ maxWidth: "400px" }}>
      <div className="card-body text-center d-flex flex-column justify-content-center">
        <form
          id="form"
          className="text-center d-flex flex-column justify-content-center"
          style={{ width: "100%" }}
        >
          <h3 className="heading heading-3">Send us an email</h3>

          <MDBInput label="Name" wrapperClass="mb-4" />

          <MDBInput type="email" label="Email address" wrapperClass="mb-4" />

          <MDBInput label="Subject" wrapperClass="mb-4" />

          <MDBTextArea wrapperClass="mb-4" label="Message" />

          <MDBBtn color="primary" block className="my-4">
            Send
          </MDBBtn>
        </form>
      </div>
    </div>
  </div>
);
