import React,{useState} from 'react'

const App = () => {

  const [name, setName] = useState({
    fname : "",
    lname : ""
  });

 

  // We are using the same event handler function here for both the input feilds
  const handleName = (e) => {



    const name = e.target.name
    const val = e.target.value
    console.log(e.target);

    setName({...name, [name] : val})
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  }

  return (
    <div className='container'>

      <form onSubmit={handleSubmit}>
        <h1>Hello {name.fname} {name.lname}</h1>

        <input 
          type="text" 
          placeholder='Enter First Name'
          name='fname'
          value={name.fname}
          onChange={handleName}
        />

        <input 
          type="text" 
          placeholder='Enter Last Name'
          name='lname'
          value={name.lname}
          onChange={handleName}
        />

        <button type='submit'> Submit </button>

      </form>

    </div>
  )
}

export default App