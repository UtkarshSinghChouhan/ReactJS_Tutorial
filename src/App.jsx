import React, {useState} from 'react';


const App = () => {

  let [time, update] = useState(new Date().toLocaleTimeString());


  return(
    <>
      <div className="container">
        <h1>{time}</h1>
      </div>
    </>
  )
}

export default App;