import React,{useState, useContext} from 'react'
import UserContext from '../context/userContext';


function Login() {
const [name, setName] = useState ('');
const [password, setpassword] = useState('');

const {setUser} = useContext(UserContext)
const handleSubmit = (e) => {
 e.preventDefault()
 setUser({name, password})
}

  return (
    <div>
     <h2>Login</h2>
     <input type="text"
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      placeholder='username'/>

     <input type="password" 
     value={password} 
     placeholder='password'
     onChange={(e) => setpassword(e.target.value)}
     />

     <button onClick={handleSubmit}>login</button>
    </div>
  )
}

export default Login
