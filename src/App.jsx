import React, { useState } from 'react';
import './index.css';

const App = () => {

    let[message, updateMessage] = useState("");
    let[fullMessage, updateFullMessage] = useState("");

    let[lastName, updateLast] = useState("");
    let[LastN, updateLastName] = useState("");

    const inputEvent = (e) => {
        updateMessage(e.target.value);
    }

    const inputEventTwo = (e) => {
        updateLast(e.target.value);
    }



    const onSubmits = (e) => {
        e.preventDefault();  //it will prevent the page from reloading while clicking the submit button

        fullMessage = message;
        updateFullMessage(fullMessage);

        LastN = lastName;
        updateLastName(LastN);
    }

    return(
        <>
            <div className='container'>
                <form onSubmit={onSubmits}>
                    <h1>Hello {fullMessage} {LastN}</h1>

                    <input 
                        type='text' 
                        placeholder='Enter Your Name' 
                        onChange={inputEvent}
                        value={message}
                    />

                    <input 
                        type='text' 
                        placeholder='Enter Your Last Name' 
                        onChange={inputEventTwo}
                        value={lastName}
                    />

                    <button type='submit'>Submit</button>

                </form>
            </div>
        </>
    );
}

export default App; 