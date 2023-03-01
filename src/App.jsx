import React, { useState } from 'react';


 

const App = () => {
    let [time, setTime] = useState(new Date().toLocaleTimeString());

    let date = new Date().toDateString();

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return(
        <>
        <div className='container'>
            <h1 className='heading'> {time} </h1>
            <h1 className='heading'> {date} </h1>
        </div>
            
        </>
    )
}

export default App;