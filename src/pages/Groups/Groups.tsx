import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "./Groups.css";

const Groups: React.FC = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Groups at Penicuik Trinity Community Church</h3>

      <Accordion defaultActiveKey="0" className="w-75 mx-auto">
        <Card>
          <Accordion.Item eventKey="0" className="custom-accordion-item">
            <Accordion.Header>
              <h4>Kirk Session</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Meets regularly throughout the year, with meetings starting at 7.30pm in the Church or committee room (Church Hall).
              </p>
              <p>Specific dates and venues are advertised in advance. Minutes of the meetings are posted in the church vestibule.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        <Card>
          <Accordion.Item eventKey="1" className="custom-accordion-item">
            <Accordion.Header>
              <h4>The Guild</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p>Meets on the first and third Monday of each month, from October through to March in the Church Hall. Meetings start at 7.30pm.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        <Card>
          <Accordion.Item eventKey="2" className="custom-accordion-item">
            <Accordion.Header>
              <h4>Penicuik Trinity Community Housegroups</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Open to everyone. A place where people come together to support each other and share their experiences of the practicalities of being a Christian.
              </p>
              <p>If you would like to join a group or need more information, please contact the group leader (name in italics).</p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        <Card>
          <Accordion.Item eventKey="3" className="custom-accordion-item">
            <Accordion.Header>
              <h4>Friendship Circle</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                An informal get-together once a month on Wednesday mornings for coffee and chat. For details and help with transport, contact Margaret Webster at 01968 672347.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* Add similar Cards for other groups */}
      </Accordion>
    </div>
  );
};

export default Groups;
