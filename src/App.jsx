import { useEffect, useState } from 'react';

import './App.css'

function App() {
  let [countervisible, setCountervisible]  = useState(true); //conditional rendering example on counter component

  useEffect(function() {
    setInterval(function() {
        setCountervisible(c => !c)//component counter will render after every 5 second
    },5000);
  }, [])

  return (
    <div>
   {countervisible && <Counter></Counter> }
   </div>
  )
  
}
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(function(){
      setInterval(function () {   
        setCount(count => count + 1 );
      }, 1000)
      console.log("mounted"); 
    
  },[]);
    
  return(
  <div>
    <h1 id="text">{count}</h1>
    </div>
  )
  }
export default App
