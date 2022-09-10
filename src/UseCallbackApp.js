import "./App.css";
import { useState, useEffect, useCallback } from "react";

function UseCallbackApp() {
  const [color, setColor] = useState("yellow");
  const [number, setNumber] = useState(200);
  const showColor = useCallback(() => {
    setColor(color == "yellow" ? "black" : "yellow");
  }, [color]);
  useEffect(() => {
    console.log(color);
  }, [showColor]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <div
        style={{
          display: "flex",
          width: `${number}px`,
          height: `${number}px`,
          backgroundColor: `${color}`,
        }}
      ></div>
      <button onClick={showColor}>색깔 바꾸기</button>
    </>
  );
}
export default UseCallbackApp;
