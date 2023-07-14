import React,{useState} from 'react'

const App = () => {

  const [name1, setName1] = useState("");
  const [fName, setFName] = useState("");
  
  
  const handleFirstName = (e) => {
    setName1(e.target.value);
  }
  
  const [name2, setName2] = useState("");
  const [LName, setLName] = useState("");

  const handleLastName = (e) => {
    setName2(e.target.value)
  }



  const handleSubmit = (e) => {
    e.preventDefault(); 
    setFName(name1);
    setLName(name2);
  }

  return (
    <div className='container'>

      <form onSubmit={handleSubmit}>
        <h1>Hello {fName} {LName}</h1>

        <input 
          type="text" 
          placeholder='Enter First Name'
          value={name1}
          onChange={handleFirstName}
        />

        <input 
          type="text" 
          placeholder='Enter Last Name'
          value={name2}
          onChange={handleLastName}
        />

        <button type='submit'> Submit </button>

      </form>

    </div>
  )
}

export default App