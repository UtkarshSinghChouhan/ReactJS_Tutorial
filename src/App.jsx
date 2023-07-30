import React, { useState } from 'react';


 

const App = () => {
    let [time, setTime] = useState(new Date().toLocaleTimeString());

    let date = new Date().toDateString();

    
    //setInterval() is not a part of the React-ecosystem hence it causes infinite rendering
    // To avoid infinite rendering we use useEffect() hook ---[Topic of further discussion]
    console.log("rendered")

    
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