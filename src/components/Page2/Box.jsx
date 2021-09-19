import React from "react";
import { Card } from "react-bootstrap";
import Reference from "../../assets/images/ref-img.jpeg";

const Box = () => {
  return (
    <>
      <div
        className="image-display--container d-flex justify-content-between "
        style={{ border: "1px solid gray" }}
      >
        <img src={Reference} alt="werr" />
        <div className="text-main--container">
          <Card className="m-2 p-3">
            <Card.Title>
              <span>Page 1</span>
            </Card.Title>
            <Card>
              <Card.Title>
                <span>Block 1</span>
              </Card.Title>
              <Card className="paragraph-card mx-2 mb-2">
                <Card.Title>
                  <span>Paragraph 1</span>
                </Card.Title>
                <Card.Body>Text</Card.Body>
              </Card>
            </Card>
            <Card>
              <Card.Body>hjdshdvhgkdvhvsdhsvdhg</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
            <Card>
              <Card.Body>Text</Card.Body>
            </Card>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Box;
