import React  from 'react';
import ReactDOM  from 'react-dom';


ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById("root"));


var h1 = document.createElement("h1");
h1.innerHTML = "Utkarsh Singh Chouhan";
document.getElementById("root").appendChild(h1);