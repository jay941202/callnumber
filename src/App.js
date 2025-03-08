import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './Component/list';

function App() {
  const [inputValue,setinputValue]=useState('')
  const [numberList,setNumberList]=useState([])
  const addItem = () =>{
    console.log(numberList,inputValue)
    setNumberList([...numberList,Number(inputValue)])
  }
  return (
    <div className="App">
      <input type="number" value={inputValue} onChange={(event)=>setinputValue(event.target.value)}/>
        <button onClick={addItem}>click</button>
      <List numberList={numberList}/>
    </div>
  );
}

export default App;
