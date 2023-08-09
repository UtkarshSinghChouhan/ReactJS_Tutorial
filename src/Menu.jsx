import React from 'react'
import {NavLink} from "react-router-dom"

const Menu = () => {
  return (
    <>
        {/* <a href="/about">AboutUs</a>
        <a href="/contact">Contact</a> */}

        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>

    </>
  )
}

export default Menu;