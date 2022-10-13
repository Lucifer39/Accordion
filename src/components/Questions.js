import React from "react";
import { useState, useEffect } from "react";

const Questions = (props) => {
  const { title, info } = props.obj;
  const [indicator, setIndicator] = useState(false);

  return (
    <div className="questions">
      <div className="topic">
        {title}
        <button className="inc" onClick={() => setIndicator(!indicator)}>
          {indicator ? "-" : "+"}
        </button>
      </div>
      {indicator && <div className="answers">{info}</div>}
    </div>
  );
};

export default Questions;
