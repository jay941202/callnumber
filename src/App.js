import './App.css';
import { useState } from 'react';
import List from './Component/list';
import Headers from './Component/header';
import Footer from './Component/footer';

function App() {
  const [inputValue,setinputValue]=useState('')
  const [numberList,setNumberList]=useState([])
  const addItem = () =>{
    setNumberList([...numberList,Number(inputValue)])
  }
  const addInput = (e)=>{
    setinputValue(e.target.value)
  }
  return (
    <div className="App">
      <Headers />
      <List numberList={numberList}/>
      <Footer onClick={addItem} onChange={addInput} inputValue={inputValue}/>
    </div>
  );
}

export default App;
