import "./App.css";
import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [answer, setAnswer] = useState(true);
  const changeCount = useMemo(() => {
    console.log("개수");
    return count;
  }, [count]);
  const cnt = changeCount;
  const changeAnswer = useMemo(() => {
    console.log("대답");
    return answer;
  }, [answer]);
  const ans = changeAnswer;
  return (
    <div>
      <h3>내가 먹는 아이스티 갯수:{cnt}</h3>
      <input
        type="number"
        onChange={(e) => {
          setCount(e.target.value);
        }}
        value={count}
      ></input>
      <h4>오늘은 퇴근할 수 있나요?</h4>
      <button
        style={{ width: "150px" }}
        onClick={() => {
          setAnswer(!answer);
        }}
      >
        {ans ? "네" : "아쉽게도 농농.."}
      </button>
      <div>{ans ? "예쓰!" : "제발!"}</div>
    </div>
  );
}
export default App;
