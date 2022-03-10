import React from "react";
import { Card } from "react-bootstrap";

export const Paragraph = ({ wordData }) => {
  return <>{wordData.join(" ")}</>;
};
