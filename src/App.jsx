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
  setInterval(function () {//here whenever the state changes react re-rendering the counter component
    setCount(count + 1);
  },1000)
  
  return(
  <div>
    <h1 id="text">{count}</h1>
    </div>
  )
  }
export default App
