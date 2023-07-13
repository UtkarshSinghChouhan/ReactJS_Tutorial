import React from 'react';
import Card from './Cards.jsx'

import Data from './Data.jsx';

const App = () => {
    return(
        <>
            
            {Data.map((obj) => {
                return (
                    <Card 
                        imgsrc = {obj.imgsrc}
                        title = {obj.title}
                    />
                )
            })}
            
            
           



        </>
    )
}

export default App;