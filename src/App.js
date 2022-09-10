import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const showNumber = (e) => {
    setNumber(e.target.value);
  };
  const checkNumber = () => {
    console.log(`number :: ${number}`);
  };
  useEffect(() => {
    console.log("checkNumber :: 변경");
  }, [checkNumber]);
  return (
    <div className="App">
      <h3>useCallback 연습</h3>
      <input
        type="number"
        onChange={showNumber}
        value={number}
        name="num"
      ></input>
      <div></div>
      <button onClick={checkNumber}>콘솔로 숫자 확인하기</button>
    </div>
  );
}

export default App;
