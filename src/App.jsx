import React from 'react'

import {Route, Routes} from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Instagram from "./Instagram";
import Error from "./Error"

const App = () => {
  return (
    <>
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