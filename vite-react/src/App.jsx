import { useState } from 'react'
import './assets/app.css'
function App() {
  const [count, setCount] = useState(15)


const addValue = () =>{
  if(count<20){
  setCount(count+1);
  }
}

const subtractValue = () =>{
  if(count>0){
  setCount(count-1);
  }
}
  return (
    <>
    <h1>Chai or React</h1>
    <h2>Counter value : {count}</h2>

    <button onClick={addValue}>Add 1</button>
    <br />
    <br />
    <button onClick={subtractValue}>subtract 1</button>        
    </>
  )
}

export default App
