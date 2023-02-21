import React from 'react';
import ReactDOM from 'react-dom';

const name = "Utkarsh Singh Chouhan";
const d = new Date();


ReactDOM.render(
    <>
        <h1>{`My name is ${name}`}</h1>
        <h1>{`Date = ${d.toLocaleDateString()}`}</h1>
        <h1>{`Time = ${d.toLocaleTimeString()}`}</h1>
    </>,
    document.getElementById("root")
);