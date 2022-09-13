import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from './NavbarElements';

function Navbar() {
   return (
      <Nav>
         <NavLink to="/">
            <h1>todo</h1>
         </NavLink>
         <Bars />
         <NavMenu>
            <NavLink to="/about" activeStyle>
               About
            </NavLink>
            <NavLink to="/log-in" activeStyle>
               Log in
            </NavLink>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
         </NavMenu>
         {/* <NavBtn>
            <NavBtnLink to="login">Login</NavBtnLink>
         </NavBtn> */}
      </Nav>
   )
}

export default Navbar;