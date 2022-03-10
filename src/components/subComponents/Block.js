import React from "react";
import { Card } from "react-bootstrap";
import { Paragraph } from "./Paragraph";

export const Block = ({ paragraphData }) => {
  const drawParagraphs = (wordData, index) => {
    return (
      <Card className="block-card m-3">
        <div>
          <span className="text-title bg-success">Paragraph {index + 1}</span>
        </div>
        <Paragraph key={index} wordData={wordData} />
      </Card>
    );
  };
  return <>{paragraphData?.map(drawParagraphs)}</>;
};
