import './App.css'
import UserContextProvider from "./context/userContextProvider"
import Login from "./components/login"
import Profile from "./components/profile"

function App() {

  return (
    <UserContextProvider>
     <h1>React with Chai and This is for Context API</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
