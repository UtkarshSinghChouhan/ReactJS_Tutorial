import react, { useState } from 'react';

const App = () => {

  let[time, update] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    update(new Date().toLocaleTimeString());
  }


  return(
    <>
      <div className="container">
        <h1>{time}</h1>
        <button onClick={updateTime}>Update Time</button>
      </div>
    </>
  )
}

export default App;