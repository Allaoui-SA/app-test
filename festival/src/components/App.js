import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Dashboard from "./Dashboard"
import Signup from "./Signup"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"


function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route 
                 path="/" 
                element={
                  <PrivateRoute path="/">
                    <Dashboard />
                  </PrivateRoute>
                } />
              <Route 
                path="/signup" 
                element={
                  <PrivateRoute path="/signup">
                    <Signup />
                  </PrivateRoute>
                } />
              <Route 
                path="/login" 
                element={
                  <PrivateRoute path="/login">
                    <Login />
                  </PrivateRoute>
                } />
            </Routes>
          </AuthProvider>

        </Router>
      </div>
    </Container>
  );
}

export default App;
