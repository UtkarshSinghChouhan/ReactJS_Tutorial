import React  from 'react';
import ReactDOM  from 'react-dom';


// ADDING MUTIPLE JSX ELEMENT INSIDE THE render() function


// In React v-16 it is possile for the render() function
//  to return an array of elements

// ReactDOM.render(
//     [
//         <h1>Hello World!!</h1>, 
//         <h1>Hello World!!</h1>, 
//         <h1>Hello World!!</h1>
//     ],
//     document.getElementById("root")
// );

//  OR we can simple put the multiple elements inside the div tag

ReactDOM.render(
   <div>
    <h1>Hello World!!</h1>
    <h1>Hello World!!</h1>
    <h1>Hello World!!</h1>
   </div>,
    document.getElementById("root")
);

