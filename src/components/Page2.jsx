import { borderRadius } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTextAPI } from "../api/getText";
import Box from "./Page2/Box";
import Header from "./Page2/Header";
import Main from "./Page2/Main";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useHistory } from "react-router-dom";
import {getPdfFile} from "../helpers/getPdfFile";
import getTextFile from "../helpers/getTextFile";


const Page2 = () => {
  const location = useLocation();
  const history = useHistory();
  const [text, setText] = useState(location?.state?.text);
  const [image, setImage] = useState(location?.state?.image);
  

  // const [text, setText] = useState("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptatem nobis in iusto nemo dolorum quibusdam repellat, quo dolore cupiditate nostrum qui minus consectetur neque non. Facere aspernatur molestias, ab nam facilis soluta officiis praesentium, optio ex adipisci placeat mollitia. Corporis modi assumenda numquam culpa vero similique maxime optio! Esse commodi recusandae eos. Similique obcaecati error ea eligendi ex excepturi officia rerum officiis consequuntur aspernatur nulla deleniti id, et adipisci velit dolorum quod esse corporis placeat nam magni modi hic! Saepe, alias magnam pariatur, doloribus aperiam repudiandae natus facere perferendis culpa, qui officiis nemo beatae ipsum harum? Nulla, illum quam.");
  const [copy, setCopy] = useState(false);
  useEffect(() => {
    if (!text) {
      history.push("/page-1");
    }
  }, [text]);
  const copyClipboard = async () => {
    await navigator.clipboard.writeText(text);
    setCopy(true);
  };

  


  return (
    <div>
      <Header />
      <Main />
      {/* <div className="d-flex justify-content-center">
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
      </div> */}
      <div className="container my-2">
        <div
          style={{
            border: "1px solid gray",
            borderRadius: "8px",
          }}
          className="my-2"
        >
          <div className="d-flex justify-content-around p-3">
            <div>
              <h5 style={{ textAlign: "center" }}>IMG</h5>
              <img width={"500px"} src={image} alt="" />
            </div>
            <div>
              <h5 style={{ textAlign: "center" }}>TEXT</h5>
              <div class="form-group">
                <textarea class="form-control" rows="12" cols="50">
                  {text}
                </textarea>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mx-4 my-2">
            <div
              className="btn btn-primary"
              onClick={copyClipboard}
              style={{ cursor: "pointer" }}
            >
              <ContentCopyIcon /> {copy == true ? "COPIED" : "COPY"}
            </div>
            <div className="btn btn-primary" onClick={()=>getTextFile(text)}>
              .txt
            </div>
            <div className="btn btn-primary" onClick={()=>getPdfFile(text)}>
              pdf
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Page2;
