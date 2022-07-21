import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Login from './Login'

export default function PrivateRoute({ path, children }) {

  const { currentUser } = useAuth()
  
console.log('currentUser', currentUser)

  if (currentUser) {
    if (path === '/login' || path === '/signup') {
      return <Navigate to="/" />
    } else {
      return children
    }
  } else if (path === '/login' || path === '/signup') {
    return children
  }
  
  return <Navigate to="/login" />
  
//   if(currentUser) {
//     if(children !== <Login />) {
    
//       return children
//     } else return <Navigate to="/" />
//   } else return <Navigate to="/login" />
}
