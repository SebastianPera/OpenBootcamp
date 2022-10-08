import React, { useState } from "react";
import "../styles/square.css";

const Square = () => {
  const [color, setColor] = useState("rgba(0,0,0)");
  const [intervalId, setIntervalId] = useState(null);

  const changeColor = () => {
    const randomColor = setInterval(() => {
      setColor(
        `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`
      );
    }, 1000);
    setIntervalId(randomColor);
  };

  const stopChangeColor = () => {
    clearInterval(intervalId);
  };

  return (
    <div>
   
      <div
        className="square"
        onMouseOver={changeColor}
        onMouseOut={stopChangeColor}
        onDoubleClick={stopChangeColor}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default Square;
