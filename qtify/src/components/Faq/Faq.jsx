import React from "react";
import "./Faq.css";
import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";

const Faq = () => {
  return (
    <>
      <div className="container">
        <h2>FAQs</h2>
        <div>
          <Accordion className="accContainer" flush>
            <Accordion.Item className="accItem" eventKey="0">
              <Accordion.Header className="accHead">
                Is Qtify free to use?
              </Accordion.Header>
              <Accordion.Body>
                Yes! It is 100% free, and contains 0% ads!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="accItem">
              <Accordion.Header className="accHead">
                Accordion Item #2
              </Accordion.Header>
              <Accordion.Body>
                As of now, there is no option to download and listen to songs
                offline, but you can enjoy music online!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default Faq;
