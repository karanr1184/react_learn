import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //? Basically, hooks are used for UI updation which is automatically handled by React
  // ? Here, useState automatically updates the UI whenever the state of variable is changed and at all places where variable is used.
  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const increaseVal = () => {
    // counter = counter + 1;
    if(counter < 20)
      setCounter(counter + 1);
  }

  const decreaseVal = () =>{
    // counter = counter - 1;
    if(counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <button onClick={decreaseVal}>-</button>
     <span> Counter Value: {counter} </span>
     <button onClick={increaseVal}>+</button>
    </>
  )
}

export default App
