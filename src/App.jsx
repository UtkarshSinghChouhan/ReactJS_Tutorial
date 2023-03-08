import React, { useState } from 'react';
import './index.css';

const App = () => {

    let[fullName, setName] = useState({
        fname : "",
        lname : ""
    });

    const inputEvent = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        console.log(e.target.placeholder);


        setName((previousValue) => {
            let value = e.target.value;
            let name = e.target.name;

            if(name === 'fname'){
                return{
                    fname : value,
                    lname : previousValue.lname
                }
            }else if(name === 'lname'){
                return{
                    fname : previousValue.fname,
                    lname : value
                }
            }
        })
    }



    const onSubmits = (e) => {
        e.preventDefault();  //it will prevent the page from reloading while clicking the submit button
        alert("Form Submitted");
    }

    return(
        <>
            <div className='container'>
                <form onSubmit={onSubmits}>
                    <h1>Hello {fullName.fname} {fullName.lname}</h1>

                    <input 
                        type='text' 
                        placeholder='Enter Your Name' 
                        name='fname'
                        onChange={inputEvent}
                        value={fullName.fname}
                    />

                    <input 
                        type='text' 
                        placeholder='Enter Your Last Name' 
                        name='lname'
                        onChange={inputEvent}
                        value={fullName.lname}
                    />

                    <button type='submit'>Submit</button>

                </form>
            </div>
        </>
    );
}

export default App;  