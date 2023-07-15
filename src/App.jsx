import React, { useState } from 'react';
import './index.css';




const App = () => {

    let[fullName, setName] = useState({
        fname : "",
        email : "",
        comments : "",
        checkbox : false
    });

    const inputEvent = (e) => {


        setName((previousValue) => {

            let{name, value, type, checked} = e.target;   //object Destructuring

            

            return{
              ...previousValue,
              [name] : (type === 'checkbox') ? checked : value
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
                    <h1>Hello {fullName.fname}</h1>
                    <p>{fullName.email}</p>

                    <input 
                        type='text' 
                        placeholder='Enter Your Name' 
                        name='fname'
                        onChange={inputEvent}
                        value={fullName.fname}
                    />

                    
                    <input 
                        type='email' 
                        placeholder='Enter Your Email' 
                        name='email'
                        onChange={inputEvent}
                        value={fullName.email}
                    />


                    <textarea
                      name='comments' 
                      placeholder='Comments...'
                      onChange={inputEvent}
                      value={fullName.comments}
                    />

                    <div className="signUp">
                      <input
                        id='choose'
                        name='checkbox'
                        type="checkbox" 
                        onChange={inputEvent}
                        checked={fullName.checkbox}
                      />
                      <label for='choose'> Sign Up for NewsLetters</label>

                    </div>


                    <button>Submit</button>

                </form>
            </div>
        </>
    );
}

export default App;  