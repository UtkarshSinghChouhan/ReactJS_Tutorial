import React from 'react';
import * as obj from './Calc';

function App(){
    return(
        <ul>
        <li>Sum of two numbers is {obj.sum(1, 2)}</li>
        <li>Subtraction of two numbers is {obj.subtract(3, 4)}</li>
        <li>Multiplication of two numbers is {obj.multiply(3, 4)}</li>
        <li>Division of two numbers is {obj.division(13, 3)}</li>
    </ul>
    );
}

export default App;