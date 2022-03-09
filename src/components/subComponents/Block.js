import React from "react";
import { Card } from "react-bootstrap";
import { Paragraph } from "./Paragraph";

export const Block = ({ blockData }) => {
  const drawParagraphs = (paragraphData, index) => {
    return (
      <Card className="block-card m-3">
        <div>
          <span className="text-title bg-primary">Block {index + 1}</span>
        </div>
        <Paragraph key={index} paragraphData={paragraphData} />
      </Card>
    );
  };
  return <>{blockData?.map(drawParagraphs)}</>;
};
