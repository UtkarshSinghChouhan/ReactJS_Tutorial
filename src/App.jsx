import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';



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
                    <Tooltip title="Add">
                        <Button onClick={increNum} className='incre'>
                            <AddIcon />
                        </Button> 
                    </Tooltip>

                    <Tooltip title="Delete">
                        <Button onClick={decreNum} className='decre'>
                            <RemoveIcon />
                        </Button>

                    </Tooltip>
                </div>
            </div>
        </>
    )
}

export default App;