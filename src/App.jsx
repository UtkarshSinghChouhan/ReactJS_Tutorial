import React, { useState } from "react";

const App = () =>{

  

  const[num, update] = useState(0);

  const incre = () => {
    update(num  + 1);
  }

  return(
    <>
      <div className="container">
        <h1>{num}</h1>
        <button onClick={incre}> Click</button>
      </div>
    </>
  )
}

export default App;