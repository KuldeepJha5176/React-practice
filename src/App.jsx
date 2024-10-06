import { useState } from 'react'

import './App.css'

function App() {
  return (
    <Counter></Counter>
)
}
function Counter() 
{
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }
  function ResetCount() {
    setCount(0);
  }
return(
  <div>
    <h1 id="text">{count}</h1>
    <button onClick ={increaseCount}>count increase</button>
    <button onClick ={decreaseCount}>count decrease</button>
    <button onClick ={ResetCount}>Reset</button>
  </div>
     )
}
export default App
