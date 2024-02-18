import React, {useState, useEffect} from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {
 
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  const authStatus = useSelector(state => state.auth.status)
 
useEffect(()=>{
  if(authentication && authStatus !==authentication){
    navigate("/login")
  }else if (!authentication && authStatus!==authentication){
    navigate("/")
  }
  setLoader(false)
  }
,[authStatus,navigate, authentication])

  return loader ? <h1>loading...</h1> : <>{children}</>
}


