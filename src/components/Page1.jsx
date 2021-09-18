import React from "react";
import { Container } from "react-bootstrap";

export const Page1 = () => {
  return (
    <>
      {/* <Header /> */}
      <Container className="page-1--container">
        <div className="drop-file--container">
          <div className="icon m-3">
            <i style={{ fontSize: "80px" }} class="far">
              &#xf1c1;
            </i>
          </div>
          <div className="input-field m-3">
            <label className="input-file--label" htmlFor="input-file">
              Choose Files
            </label>
            <input type="file" id="input-file" style={{ display: "none" }} />
          </div>
          <div className="bottom-text">or drop Files here</div>
        </div>
      </Container>
    </>
  );
};
