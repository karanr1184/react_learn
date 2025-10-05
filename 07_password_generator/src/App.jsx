import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("copy");

  //? useRef hook references the value stored in the hook
  const passwordRef = useRef(null);

  //? useCallback hook keeps the function in cache when triggered... thus optimising the process
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "`~!@#$%^&*()-_+={}[]";

    for(let i = 0; i < length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //? useEffect hook executes the function whenever the values are changed of given parameters
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopyText("copied!");
    setTimeout(() => setCopyText("copy"), 3000);
  }

  return (
    <>
      <div className="bg-gray-800 p-5 w-5xl mr-auto ml-auto m-10 rounded-2xl text-orange-500 text-2xl flex flex-col gap-5">
        <div className='flex overflow-hidden rounded-xl'>
          <input 
            type="text" 
            className='bg-white w-full px-5 py-3 outline-none' 
            value={password}
            ref={passwordRef}
            readOnly 
            />
          <button className='bg-blue-700 text-white px-5 py-3 cursor-pointer outline-none' onClick={() => copyPasswordToClipboard()}>{copyText}</button>
        </div>
        <div className='flex gap-10 '>
          <div className='flex gap-2'>
            <input 
              type="range" 
              name="length" 
              id="length-ip"
              value={length} 
              onChange={(e) => setLength(parseInt(e.target.value))}
              className='outline-none'
              min={6}
              max={100}
              />
            <label htmlFor="length-ip">Length ({length})</label>
          </div>
          <div className='flex gap-2'>
            <input 
              type="checkbox" 
              name="numbers_allowed" 
              id="num-ip" 
              checked={numberAllowed} 
              onClick={() => setNumberAllowed((prev) => !prev)}
              className='cursor-pointer outline-none'
              />
            <label htmlFor="num-ip" className='cursor-pointer'>Numbers</label>
          </div>
          <div className='flex gap-2'>
            <input 
              type="checkbox" 
              name="character_allowed" 
              id="char-ip" 
              checked={charAllowed} 
              onClick={() => setCharAllowed((prev) => !prev)}
              className='cursor-pointer'
              />
            <label htmlFor="char-ip" className='cursor-pointer'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
