import React, { useState } from 'react';
import './index.css';

const App = () => {

    let[message, updateMessage] = useState("");
    let[fullMessage, updateFullMessage] = useState("");

    const inputEvent = (e) => {
        updateMessage(e.target.value);

        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.value);
    }

    const onSubmit = () => {
        fullMessage = message;
        updateFullMessage(fullMessage);
    }

    return(
        <>
            <div className='container'>
                <h1>Hello {fullMessage}</h1>

                <input 
                    type='text' 
                    placeholder='Enter Your Name' 
                    onChange={inputEvent}
                    value={message}
                />

                <button onClick={onSubmit}>Submit</button>
            </div>
        </>
    );
}

export default App; 