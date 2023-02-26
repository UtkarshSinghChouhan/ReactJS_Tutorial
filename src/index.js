import React from 'react';
import ReactDOM from 'react-dom';
import * as obj from './App';

ReactDOM.render(
    <>
        <ul>
            <li>Sum of two numbers is {obj.sum(1, 2)}</li>
            <li>Subtraction of two numbers is {obj.subtract(3, 4)}</li>
            <li>Multiplication of two numbers is {obj.multiply(3, 4)}</li>
            <li>Division of two numbers is {obj.division(4, 2)}</li>
        </ul>
    </>,
    document.getElementById("root")
);