import React from "react";
import { useState, useEffect } from "react";
import questions from "../data";
import Questions from "./Questions";

const Accordion = () => {
  const [data, setData] = useState(questions);
  return (
    <div className="cards">
      <div className="left-col">
        <h1>Questions and Answers about Login</h1>
      </div>
      <div className="right-col">
        {data.map((question) => {
          return <Questions obj={question} />;
        })}
      </div>
    </div>
  );
};

export default Accordion;
