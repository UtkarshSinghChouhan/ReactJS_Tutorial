import React, { useState } from 'react'

const App = () => {
  const  [name, setName] = useState("");
  const  [res, setRes] = useState("");

  const handleEvent = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log(name)
    setRes(name)
  }


  return (
    <>
        <div className='container'>
            <h1>Hello {res}</h1>

            <input 
                type="text"
                placeholder='Enter Your Name' 
                onChange={handleEvent}
                value= {name}
            />

            <button onClick={handleSubmit}>Click Me</button>

        </div>
    </>
  )
}

export default App