import React from "react";
import { Card } from "react-bootstrap";
import { Block } from "./Block";

export const Page = ({ pageData }) => {
  const drawBlocks = (blockData, index) => {
    return (
      <Card className="m-2">
        <div>
          <span className="text-title bg-danger">Page {index + 1}</span>
        </div>
        <Block key={index} blockData={blockData} />
      </Card>
    );
  };
  return (
    <div className="text-main--container">{pageData?.map(drawBlocks)}</div>
  );
};
