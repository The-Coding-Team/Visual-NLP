import React from "react";
import Box from "./Page2/Box";
import Header from "./Page2/Header";
import Main from "./Page2/Main";

const Page2 = () => {
  return (
    <div>
      <Header />
      <Main />
      <div className="d-flex justify-content-center">
        <Box />
      </div>
    </div>
  );
};

export default Page2;
