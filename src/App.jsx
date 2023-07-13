import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards.jsx'

import Data from './Data.jsx';

const App = () => {
    return(
        <>
            <Card  
                imgsrc = {Data[0].imgsrc}
                title = {Data[0].title}
            />

      
            
            <Card  
                imgsrc = {Data[1].imgsrc}
                title = {Data[1].title}
            />

      
            
            <Card  
                imgsrc = {Data[2].imgsrc}
                title = {Data[2].title}
            />

      
            
            
           



        </>
    )
}

export default App;