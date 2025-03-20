import './App.css';
import { useState } from 'react';
import List from './Component/list';
import Headers from './Component/header';
import Footer from './Component/footer';

function App() {
  const [inputValue,setinputValue]=useState('')
  const [numberList,setNumberList]=useState([])
  const addItem = () =>{
    setNumberList([...numberList,inputValue])
    setinputValue('')
  }
  const addInput = (e)=>{
    setinputValue(e.target.value)
  }
  const removeItem = (item)=>{
    setNumberList(numberList.filter((number)=> number !== item))
  }
  return (
    <div className="App">
      <Headers />
      <List numberList={numberList} removeItem={removeItem}/>
      <Footer onClick={addItem} onChange={addInput} inputValue={inputValue}/>
    </div>
  );
}

export default App;
