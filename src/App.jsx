import React, { useEffect, useState } from "react";

const App = () => {
  let [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${num} times`;
  },[num]);

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Clicked {num} times
      </button>
    </>
  );
};

export default App;
