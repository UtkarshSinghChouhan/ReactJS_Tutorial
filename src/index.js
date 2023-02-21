import React from 'react';
import ReactDOM from 'react-dom';

const firstName = "Utkarsh";
const LastName = "Singh";

// Normally we use template literals in the Javascript  like this
console.log(`My name is ${firstName} ${LastName}`)


// Inside the JSX we can use the template literal like this
ReactDOM.render(
    <>
        <h1>My name is {firstName} {LastName}</h1>

        {/* template literals */}
        <h1>{`My name is ${firstName} ${LastName}`}</h1>
        <h1>{`My age is ${2023 - 1999}`}</h1>
    </>,
    document.getElementById("root")
);