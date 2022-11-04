import "./App.css"
import  {useState} from "react"

function App() { 
const [firstNumber, setFirstNumber] = useState("0")
const [secondNumber, setSecondNumber] = useState("0")
const [totalNumber, setTotalNumber] = useState(0)
const [operation, setOperation] = useState("+")

function displayNumber(number) {
  if (firstNumber[0] === "0") {
    setFirstNumber(number)
  } else if (number === "c") {
    setFirstNumber("0")
  } else {
  setFirstNumber(firstNumber += number)
  }
}

function displaySecondNumber(number) {
  setSecondNumber(number)
}

function displayOperation(character) {
  setOperation(character)
}

function smartMaths() {
  if (operation === "+") {
    setTotalNumber(firstNumber + secondNumber)
  } else if (operation === "-") {
    setTotalNumber(firstNumber - secondNumber)
  } else if (operation === "*") {
    setTotalNumber(firstNumber * secondNumber)
  } else if (operation === "÷") {
    setTotalNumber(firstNumber / secondNumber)
  }
}

  return (
    <div className="calculator">
        <div className="panel">
          <p>{firstNumber}</p>
          <div className="numbers">
            <button onClick={() => displayNumber("1")}>1</button>
            <button onClick={() => displayNumber("2")}>2</button>
            <button onClick={() => displayNumber("3")}>3</button>
            <button onClick={() => displayNumber("4")}>4</button>
            <button onClick={() => displayNumber("5")}>5</button>
            <button onClick={() => displayNumber("6")}>6</button>
            <button onClick={() => displayNumber("7")}>7</button>
            <button onClick={() => displayNumber("8")}>8</button>
            <button onClick={() => displayNumber("9")}>9</button>
            <button onClick={() => displayNumber("0")}>0</button>
            <button onClick={() => displayNumber("c")}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operation}</p>
          <div className="numbers">
            <button onClick={() => displayOperation("+")}>+</button>
            <button onClick={() => displayOperation("-")}>-</button>
            <button onClick={() => displayOperation("*")}>*</button>
            <button onClick={() => displayOperation("÷")}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{secondNumber}</p>
          <div className="numbers">
            <button onClick={() => displaySecondNumber(1)}>1</button>
            <button onClick={() => displaySecondNumber(2)}>2</button>
            <button onClick={() => displaySecondNumber(3)}>3</button>
            <button onClick={() => displaySecondNumber(4)}>4</button>
            <button onClick={() => displaySecondNumber(5)}>5</button>
            <button onClick={() => displaySecondNumber(6)}>6</button>
            <button onClick={() => displaySecondNumber(7)}>7</button>
            <button onClick={() => displaySecondNumber(8)}>8</button>
            <button onClick={() => displaySecondNumber(9)}>9</button>
            <button onClick={() => displaySecondNumber(0)}>0</button>
            <button onClick={() => displaySecondNumber(0)}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{totalNumber}</p>
          <div>
            <button onClick={() => smartMaths()}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
