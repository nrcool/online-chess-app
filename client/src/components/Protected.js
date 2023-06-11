import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { Navigate } from 'react-router-dom'

export default function Protected({children,navigate}) {
    const {user} =useContext(MyContext)
    if(user){
        return (
            <>{children}</>
          ) 
        
    }else{
   return <Navigate to={`/login`} />
    }
  
}
