import React from "react";
import { Card } from "react-bootstrap";

export const Paragraph = ({ paragraphData }) => {
  const drawWords = (wordData, index) => {
    let paragraph = "";
    paragraph += wordData.join(" ");
    console.log(wordData);
    return (
      // <Card className="paragraph-card m-2">
      //   <div>
      //     <span className="text-title bg-success">Paragraph {index + 1}</span>
      //   </div>
      //   <Card.Body>{paragraph}</Card.Body>
      // </Card>
      { paragraph }
    );
  };
  return (
    <>
      <Card className="paragraph-card m-2">
        <div>
          <span className="text-title bg-success">Paragraph </span>
        </div>
        <Card.Body>{paragraphData?.map(drawWords)}</Card.Body>
      </Card>
    </>
  );
};
