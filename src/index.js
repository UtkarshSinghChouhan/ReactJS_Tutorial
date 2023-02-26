import React from 'react';
import ReactDOM from 'react-dom';
// import firstName, {lastName, favProgram, favLanguage} from './App';


// ReactDOM.render(
//     <>
//         <ol>
//             <li>{firstName}</li>
//             <li>{lastName()}</li>
//             <li>{favProgram()}</li>
//             <li>{favLanguage}</li>
//         </ol>
//     </>,
//     document.getElementById("root")
// );


// We can also import everything as an object
import * as obj from './App';

ReactDOM.render(
    <>
        <ol>
            <li>{obj.default}</li>
            <li>{obj.lastName()}</li>
            <li>{obj.favProgram()}</li>
            <li>{obj.favLanguage}</li>
        </ol>
    </>,
    document.getElementById("root")
);