import React, { useState } from 'react';
import './index.css';




const App = () => {

    let[fullName, setName] = useState({
        fname : "",
        lname : "",
        email : "",
        number : ""
    });

    const inputEvent = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        // console.log(e.target.placeholder);


        setName((previousValue) => {

            let{name, value} = e.target;   //object Destructuring

            console.log(previousValue)

            return{
                ...previousValue,
                [name] : value
            }

            // if(name === 'fname'){
            //     return{
            //         fname : value,
            //         lname : previousValue.lname,
            //         email : previousValue.email,
            //         number : previousValue.number
            //     }
            // }else if(name === 'lname'){
            //     return{
            //         fname : previousValue.fname,
            //         lname : value,
            //         email : previousValue.email,
            //         number : previousValue.number
            //     }
            // }else if(name === 'email'){
            //     return{
            //         fname : previousValue.fname,
            //         lname : previousValue.lname,
            //         email : value,
            //         number : previousValue.number
            //     }
            // }else if(name === 'number'){
            //     return{
            //         fname : previousValue.fname,
            //         lname : previousValue.lname,
            //         email : previousValue.email,
            //         number : value
            //     }
            // }

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
                    <p>{fullName.email} {fullName.number}</p>

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

                    <input 
                        type='email' 
                        placeholder='Enter Your Email' 
                        name='email'
                        onChange={inputEvent}
                        value={fullName.email}
                    />

                    <input 
                        type='number' 
                        placeholder='Enter Your Phone Number' 
                        name='number'
                        onChange={inputEvent}
                        value={fullName.number}
                    />

                    <button type='submit'>Submit</button>

                </form>
            </div>
        </>
    );
}

export default App;  