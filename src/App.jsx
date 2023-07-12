import React, {useState} from 'react';


const App = () => {

  let [time, update] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    update(new Date().toLocaleTimeString());
  }, 1000);

  return(
    <>
      <div className="container">
        <h1>{time}</h1>
      </div>
    </>
  )
}

export default App;