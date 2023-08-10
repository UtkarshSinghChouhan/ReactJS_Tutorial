import React from 'react'

import {Route, Routes} from "react-router-dom";

import "./index.css"

import About from "./About";
import Contact from "./Contact";
import Instagram from "./Instagram";
import Error from "./Error"
import Header from "./Header"

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/instagram' element={<Instagram />} />
        <Route  path='*' element={<Error />}/>
      </Routes>

    </>
  )
}

export default App