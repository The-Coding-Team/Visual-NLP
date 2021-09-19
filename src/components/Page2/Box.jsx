import React from "react";
import { Card } from "react-bootstrap";
import Reference from "../../assets/images/adhar1.jpeg";
// import TextField from "@mui/material/TextField";

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
            <Card.Title>Page 1</Card.Title>
            <Card>
              <Card.Title>Block 1</Card.Title>
              <Card className="mx-2 mb-2">
                <Card.Title>Paragraph 1</Card.Title>
                <Card.Body>Text</Card.Body>
                {/* <TextField
                  id="outlined-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  InputProps={{
                    readOnly: true,
                  }}
                /> */}
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
