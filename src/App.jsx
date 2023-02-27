import React from 'react';
import Card from './Cards';
import Header from './Header';
import CardData from './Data';


function App(){
    return(
        <>
            <Header />

            <div className='container'>
                
                <Card imgsrc={CardData[0].imgsrc}
                    title={CardData[0].title}/>
                <Card imgsrc={CardData[1].imgsrc}
                    title={CardData[1].title}/>
                <Card imgsrc={CardData[2].imgsrc}
                    title={CardData[2].title}/>

            </div>

        </>        
    );
}

export default App;
