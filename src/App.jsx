import React, { useState } from 'react';


 

const App = () => {
    let [time, setTime] = useState(new Date().toLocaleTimeString());

    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setTime(time);
    }

    return(
        <>
        <div className='container'>
            <h1 className='heading'> {time} </h1>
            <button onClick={updateTime}>  GET TIME</button>
        </div>
            
        </>
    )
}

export default App;