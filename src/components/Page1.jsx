import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { getTextAPI } from "../api/getText";
import Header from "./Page2/Header";
import Main from "./Page2/Main";

export const Page1 = ({ setFile }) => {
  const history = useHistory();
  const [loadingText, setLoadingText] = useState("Uploading File");
  const [fileDisplay, setFileDisplay] = useState("flex");
  const [loadingDisplay, setLoadingDisplay] = useState("none");
  const hitAPI = async (url) => {
    setLoadingText("Extracting Text");
    if (url.length) {
      const payload = { url };
      const res = await getTextAPI(payload);
      if (res?.status) {
        history.push("/page-2", { text: res.text });
        console.log(res.text);
      } else {
        //error handling
      }
    }
  };
  const handleFileChange = async (e) => {
    setFileDisplay("none");
    setLoadingDisplay("flex");
    let file = e.target.files[0];
    let reader = new FileReader();
    let url =
      "https://cdn.cnn.com/cnnnext/dam/assets/160122124623-01-national-handwriting-day.jpg";

    setFile(url);
    hitAPI(url);
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
              onChange={(e) => {
                handleFileChange(e);
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
