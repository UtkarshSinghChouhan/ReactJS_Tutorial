import React from 'react';
import Card from './Cards';
import Header from './Header';
import PropData from './Data';


function App(){
    return(
        <>
            <Header />

            <div className='container'>

                {
                    PropData.map((val) => {
                        return(
                            <Card imgsrc={val.imgsrc}
                            title={val.title}/>
                        );
                    })
                }

            </div>

        </>        
    );
}

export default App;
