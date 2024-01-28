import { useState,useCallback,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numa, setNa] = useState(false)
  const [chara, setchara] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

const passwordGenerator = useCallback(() =>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numa) str+="0123456789";
  if(chara) str+="`~!@#$%^&*-_=+;:\.,/?"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length +1);
    pass +=str.charAt(char);
  } 
  setPassword(pass);

  },[length, numa, chara, setPassword])

const copyPasswordToClipboard = useCallback(() =>{
  passwordRef.current?.select()
window.navigator.clipboard.writeText(password);
},[password])

  useEffect(()=>{
  passwordGenerator();
}, [length,numa,chara,passwordGenerator]) 

  return (
    <div className='flex'>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className="text-white text-center my-3">Password Generator</h1>
       <div className="flex shadow roudned-lg overflow-hidden mb-4">
        <input type="text" value={password} ref={passwordRef} className='outline-none w-full py-1 px-3' placeholder='password' readOnly/>
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked ={numa} id='numberInput' onChange={(e) => {setNa((prev)=>!prev);}} />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked ={chara} id='charInput' onChange={(e) => {setchara((prev)=>!prev);}} />
          <label>Cahracters</label>
        </div>  
      </div>
    </div>
  )
}

export default App
