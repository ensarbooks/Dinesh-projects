import Keypad from "./keypad"
import './App.css'
import {useState} from "react"


function App(){

  let [input,setInput] = useState("");
  function handleClick(value){
    setInput(input+value);
  }

  function calculate(value){
    let outputVal = eval(input)
    setInput(outputVal)
  }

  function handleClear(value){
    setInput("")
  }
  return(
    <div className="container">
      <h1>Calculator App using React</h1>
      <div className="calculator">
        <input type="text" className="output" value={input}/>
        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>
      </div>
    </div>
  )
}

export default App