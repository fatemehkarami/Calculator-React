import "./App.css";
import { useState } from "react";

function App() {
  const [expression, setExpression] = useState([0]);
  const [revisedExpression, setRevisedExpression] = useState([0]);

  const handleClick = (inputExp) => {
    if (
      expression.length === 1 &&
      expression[0] === 0 &&
      !["+", "-", "÷", "×"].includes(inputExp)
    ) {
      setExpression([inputExp]);
      setRevisedExpression([inputExp]);
    } else if (inputExp === "÷") {
      setExpression([...expression, inputExp]);
      setRevisedExpression([...revisedExpression, "/"]);
    } else if (inputExp === "×") {
      setExpression([...expression, inputExp]);
      setRevisedExpression([...revisedExpression, "*"]);
    } else {
      setExpression([...expression, inputExp]);
      setRevisedExpression([...revisedExpression, inputExp]);
    }
  };

  const handleAc = () => {
    setExpression([0]);
    setRevisedExpression([0]);
  };

  const handleNegate = (revisedExpression) => {
    const revisedExpressionToString = revisedExpression.join("");
    const result = -revisedExpressionToString;
    setExpression([result]);
    setRevisedExpression([result]);
  };

  const handlePercentage = (revisedExpression) => {
    const revisedExpressionToString = revisedExpression.join("");
    const result = revisedExpressionToString / 100;
    setExpression([result]);
    setRevisedExpression([result]);
  };

  const calculateResult = (revisedExpression) => {
    const revisedExpressionToString = revisedExpression.join("");
    const result = eval(revisedExpressionToString);
    setExpression([result]);
    setRevisedExpression([result]);
  };

  return (
    <div className="App">
      <div className="result">{expression}</div>
      <div>
        <button className="first-row" onClick={handleAc}>
          AC
        </button>
        <button
          className="first-row"
          onClick={() => handleNegate(revisedExpression)}
        >
          +/-
        </button>
        <button
          className="first-row"
          onClick={() => handlePercentage(revisedExpression)}
        >
          %
        </button>
        <button className="operation" onClick={() => handleClick("÷")}>
          ÷
        </button>
      </div>
      <div>
        <button className="number" onClick={() => handleClick(7)}>
          7
        </button>
        <button className="number" onClick={() => handleClick(8)}>
          8
        </button>
        <button className="number" onClick={() => handleClick(9)}>
          9
        </button>
        <button className="operation" onClick={() => handleClick("×")}>
          ×
        </button>
      </div>
      <div>
        <button className="number" onClick={() => handleClick(4)}>
          4
        </button>
        <button className="number" onClick={() => handleClick(5)}>
          5
        </button>
        <button className="number" onClick={() => handleClick(6)}>
          6
        </button>
        <button className="operation" onClick={() => handleClick("-")}>
          -
        </button>
      </div>
      <div>
        <button className="number" onClick={() => handleClick(1)}>
          1
        </button>
        <button className="number" onClick={() => handleClick(2)}>
          2
        </button>
        <button className="number" onClick={() => handleClick(3)}>
          3
        </button>
        <button className="operation" onClick={() => handleClick("+")}>
          +
        </button>
      </div>
      <div>
        <button className="zero number" onClick={() => handleClick(0)}>
          0
        </button>
        <button
          className="operation"
          onClick={() => calculateResult(revisedExpression)}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
