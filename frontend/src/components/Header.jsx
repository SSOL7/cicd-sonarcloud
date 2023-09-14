import React from 'react'
import { NavLink } from 'react-router-dom'

import HeaderCart from './HeaderCart'

function Header() {
  return (
    <header className="shadow-sm">
      <nav className="navbar bg-body-tertiary mb-3 d-flex position-relative">
        <div className="container-fluid justify-content-center">
          <NavLink className="navbar-brand fs-1" to="/">
            Homepage
          </NavLink>
          <NavLink className="navbar-brand fs-1" to="/products">
            Products
          </NavLink>
        </div>
        <div className="position-absolute top-50 end-0 me-5 translate-middle-y">
          <HeaderCart />
        </div>
      </nav>
    </header>
  )
}

export default Header
