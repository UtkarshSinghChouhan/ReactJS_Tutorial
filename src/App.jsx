import React, { useState } from 'react';


 

const App = () => {
    const [num, setCount] = useState(0);

    const IncNum = () => {
        setCount(num+1);
    }

    return(
        <>
        <div className='container'>
            <h1 className='heading'> {num} </h1>
            <button onClick={IncNum}> click ME</button>
        </div>
            
        </>
    )
}

export default App;