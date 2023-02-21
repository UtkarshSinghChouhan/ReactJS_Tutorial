import React from'react';
import ReactDOM from'react-dom';

const firstName = "Utkarsh Singh Chouhan";


// JS in JSX 
ReactDOM.render(
    <>
        <h1>My name is : {firstName}</h1>


        <h1>My age is : 2023 - 1999</h1>
        <h1>My age is : {2023 - 1999}</h1>
    </>,
    document.getElementById("root")
);