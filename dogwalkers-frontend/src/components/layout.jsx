// src/components/Layout.jsx
import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../assets/walker.jpeg'; // garante que a imagem seja incluída no build


const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-light p-3">
        <h4 className="mb-4">Dog Walkers App</h4>
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link as={Link} to="/" className="text-light">Login</Nav.Link>
          <Nav.Link as={Link} to="/register" className="text-light">Register</Nav.Link>
          <Nav.Link as={Link} to="/schedule" className="text-light">Schedule</Nav.Link>
    
        </Nav>
      </div>

      {/* Conteúdo principal */}
      <div className="main-content container-fluid p-4">

        {children}
      </div>
    </div>
  )
}

export default Layout
