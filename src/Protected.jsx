import React, { useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const location = useLocation();
  console.log(location)
    const navigate =useNavigate()
    console.log(navigate)
    var isAuth = localStorage.getItem('accessToken')
     //isAuth = true;
    
  return isAuth ? (<>{ children }</>) :  (
    <>
  <Navigate to="/" replace state={{ path: location.pathname }} />
    </>
  )
}

export default Protected