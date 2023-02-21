import React from 'react';
import ReactDOM from 'react-dom';


const heading = {
    color:"#fa9191",
    textAlign:"center",
    textTransform:"capitalize",
    fontFamily: 'Roboto'
}

const name = "Utkarsh Singh Chouhan"

ReactDOM.render(
    <>
        <h1 style={heading}>{name}</h1>
        
        <p style={{color:"#fa9191", textAlign:"center", textTransform:"capitalize", fontFamily: 'Roboto'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi saepe libero quia unde, voluptatibus impedit enim dicta temporibus velit perferendis!
        </p>
    </>,
    document.getElementById("root")
);