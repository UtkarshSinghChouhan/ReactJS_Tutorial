 import React from 'react';
 import SlotMachine from './SlotMachine';




 

 const App = () => {
    return(
        <>
            <h1 className='heading'>Welcome To <span style={{fontWeight : 'bold', backgroundColor:'#d2dbdd'}}>The Slot Machine Game 🎰</span></h1>
            <SlotMachine />
        </>
    )
 }

 export default App;