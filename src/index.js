import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// For changing the style of the span dynamically
let cssStyle = {

};

let greeting = "";

let currDate = new Date();
currDate = currDate.getHours();

if(currDate >= 1 && currDate < 12){
    greeting = "Good Morning";
    cssStyle.color = "Green";
}else if(currDate >= 12 && currDate < 19){
    greeting = "Good AfterNoon";
    cssStyle.color = "Orange";
}else{
    greeting = "Good Night"
    cssStyle.color = "DarkBlue";
}

ReactDOM.render(
    <>
        <div>
            <h1>Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
        </div>
    </>,
    document.getElementById("root")
);