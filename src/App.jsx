import React from 'react'

import {Route, Routes} from "react-router-dom";

import "./index.css"

import About from "./About";
import Contact from "./Contact";
import Instagram from "./Instagram";
import Error from "./Error"
import Home from "./Home";
import Header from "./Header"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact/instagram' element={<Instagram />} />
          <Route  path='*' element={<Error />}/>
        </Route>
      </Routes>

    </>
  )
}

export default App