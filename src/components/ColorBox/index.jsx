import React, { useState } from "react";
import "./colorbox.scss";

// ColorBox.propTypes = {
//     handleBoxClick: PropTypes.func,

// }
function getRandomColor() {
  const colorList = ["deeppink", "green", "blue", "yellow", "black"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return colorList[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initialColor = localStorage.getItem("box-color") || "deeppink";
    return initialColor;
  });
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
