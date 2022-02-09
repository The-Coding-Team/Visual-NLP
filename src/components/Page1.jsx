import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import Header from "./Page2/Header";
import Main from "./Page2/Main";
// const firebase = require("firebase");
import firebase from "firebase/app";

export const Page1 = ({setFile}) => {
  const history = useHistory();
  const [loadingText, setLoadingText] = useState("Uploading File");
  const [fileDisplay, setFileDisplay] = useState("flex");
  const [loadingDisplay, setLoadingDisplay] = useState("none");
  const handleFileChange = (e) => {
    let file = e.target.files[0]
    console.warn("data file",file)
    let reader = new FileReader()
    reader.readAsDataURL(file)
    // reader.onload=(e)=>{
    //   console.warn("img data",e.target.result)
    // }
    let url = "https://cdn.cnn.com/cnnnext/dam/assets/160122124623-01-national-handwriting-day.jpg"
    console.log(setFile)
    setFile(url)
  };

  const handleImage = (image) => {
    const storage = firebase.default.storage();
    const ref = storage.ref();
    const imageRef = ref.child("Images/image1.pdf");
    var metadata = {
      contentType: "application/pdf",
    };
    imageRef.put(image, metadata);
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
          <div className="bottom-text" onClick={handleImage()}>
            or drop Files here
          </div>
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
