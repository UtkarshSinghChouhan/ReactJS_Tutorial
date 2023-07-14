import React,{useState} from 'react'

const App = () => {

  const [name1, setName1] = useState("");
  const [fName, setFName] = useState("");
  
 
  const [name2, setName2] = useState("");
  const [LName, setLName] = useState("");

 

  // We are using the same event handleer function here for both the input feilds
  const handleName = (e) => {
    const name = e.target.name

    console.log(name)

    if(name === 'fname'){
      setName1(e.target.value)
    }else{
      
      setName2(e.target.value)
    }
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
          name='fname'
          value={name1}
          onChange={handleName}
          />

        <input 
          type="text" 
          placeholder='Enter Last Name'
          name='lname'
          value={name2}
          onChange={handleName}
        />

        <button type='submit'> Submit </button>

      </form>

    </div>
  )
}

export default App