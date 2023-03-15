import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';



const App = () => {
    let[num, setNum] = useState(0);

    const increNum = () => {
        setNum(num+1); 
    }
    
    const decreNum = () => {
        if(num > 0){
            setNum(num-1); 
        }

    }

    return(
        <>
            <div className='container'> 
                <h1 className='heading'>{num}</h1>

                <div className='child'>
                    <h1 onClick={increNum}><AddIcon /></h1>
                    <h1 onClick={decreNum}><RemoveIcon /></h1>
                </div>
            </div>
        </>
    )
}

export default App;