import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import Header from "./Page2/Header";
import Main from "./Page2/Main";

export const Page1 = () => {
  const history = useHistory();
  const [loadingText, setLoadingText] = useState("Uploading File");
  const [fileDisplay, setFileDisplay] = useState("flex");
  const [loadingDisplay, setLoadingDisplay] = useState("none");
  const handleFileChange = () => {
    setFileDisplay("none");
    setLoadingDisplay("flex");
    setTimeout(() => {
      setLoadingText("Analysing File");
      setTimeout(() => {
        setLoadingText("Extracting Text from File");
        setTimeout(() => {
          history.push("/page-2");
        }, 2000);
      }, 2000);
    }, 2000);
  };
  return (
    <>
      <Header />
      <Main />
      <Container className="page-1--container">
        <div style={{ display: fileDisplay }} className="drop-file--container">
          <div className="icon m-3">
            <i style={{ fontSize: "80px" }} class="far">
              &#xf1c1;
            </i>
          </div>
          <div className="input-field m-3">
            <label className="d-flex input-file--label" htmlFor="input-file">
              <div>
                <i class="fas fa-file-import"></i>
              </div>
              <div className="mx-3">Choose Files</div>
            </label>
            <input
              onChange={() => {
                handleFileChange();
              }}
              type="file"
              id="input-file"
              style={{ display: "none" }}
            />
          </div>
          <div className="bottom-text">or drop Files here</div>
        </div>
        <div style={{ display: loadingDisplay }} className="loading--container">
          <div>
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
          <div>{loadingText}</div>
        </div>
      </Container>
    </>
  );
};
