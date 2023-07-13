import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards.jsx'

import Data from './Data.jsx';

const App = () => {
    return(
        <>
            
            {Data.map((obj) => {
                <Card 
                    imrsrc = {obj.imgsrc}
                    title = {obj.title}
                />
            })}
            
            
           



        </>
    )
}

export default App;