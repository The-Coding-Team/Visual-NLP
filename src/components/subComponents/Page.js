import React from "react";
import { Card } from "react-bootstrap";
import { Block } from "./Block";

export const Page = ({ blockData }) => {
  const drawBlocks = (paragraphData, index) => {
    console.log(paragraphData, "currentBlock");
    return (
      <Card className="m-2">
        <div>
          <span className="text-title bg-primary">Block {index + 1}</span>
        </div>
        <Block key={index} paragraphData={paragraphData} />
      </Card>
    );
  };
  return <>{blockData?.map(drawBlocks)}</>;
};
