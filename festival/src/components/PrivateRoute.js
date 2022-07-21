import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Login from './Login'

export default function PrivateRoute({ path, children }) {

const { currentUser } = useAuth()

  // Si un utilisateur est connecté
  if (currentUser) {
    
    // Si l'url chemine vers la vue Login ou Signup 
    if (path === '/login' || path === '/signup') {
      // rediriger vers la home/dashboard
      return <Navigate to="/" />
    }    
    // Sinon retouner l'enfant du composant PrivateRoute
    return children
    
    // Fin de condition Connecté et page Login ou Signup
  }

  // Sinon si aucun utilisateur n'est connecté et que l'url chemine vers Login ou Signup
  else if (path === '/login' || path === '/signup') {
    // Retouner l'enfant du composant PrivateRoute
    return children
  }
  // Rediriger vers la page Login
  return <Navigate to="/login" />
}
