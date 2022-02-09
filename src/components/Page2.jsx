import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTextAPI } from "../api/getText";
import Box from "./Page2/Box";
import Header from "./Page2/Header";
import Main from "./Page2/Main";

const Page2 = () => {
  const location = useLocation();
  const [text, setText] = useState(location?.state?.text);
  return (
    <div>
      <Header />
      <Main />
      <div className="d-flex justify-content-center">
        <Box />
      </div>
      <div className="d-flex justify-content-center mb-5" width="100%">
        <div
          style={{
            display: "flex",
            fontFamily: " 'Exo 2', sans-serif",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          DOWNLOAD IN
        </div>
        <div className="d-flex justify-content-around">
          <button type="button" className="btn-lg btn-primary mx-3">
            <i class="far fa-file-word" style={{ fontSize: "40px" }}></i>
          </button>
          <button type="button" className="btn-lg btn-danger mx-3">
            <i class="far fa-file-pdf" style={{ fontSize: "40px" }}></i>
          </button>
          <button type="button" className="btn-lg btn-success mx-3">
            <i class="fas fa-file-alt" style={{ fontSize: "40px" }}></i>
          </button>
        </div>
        {text?.length && <div>{text}</div>}
      </div>
    </div>
  );
};

export default Page2;
