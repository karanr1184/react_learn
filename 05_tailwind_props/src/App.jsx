import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    name: "Karan",
    age: 21,
  }
  const newArr = [1, 2, 3]
  return (
    <>
      <h1 className='p-5 bg-green-500 text-black rounded-2xl'>Hi there👋! Using Tailwind CSS</h1>
      <Card contributors="199" user={myObj}/>  
      <Card contributors="200" nums={newArr}/>  
    </>
  )
}

export default App
