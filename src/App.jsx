import React, { useEffect, useState } from "react";

const App = () => {
  let [num, setNum] = useState(0);
  let [nums, setNums] = useState(0);

  //Remember that use effect always expect a function
  useEffect(() => {
    alert("clicked");
  }, [num]);

  const changeNum = () => {
    setNum(num + 1);
  };

  const changeNums = () => {
    setNums(nums + 1);
  };

  return (
    <>
      <button onClick={changeNum}>Click me to change the state : {num}</button>
      <br />
      <br />
      <button onClick={changeNums}>
        Click me to change the state : {nums}
      </button>
    </>
  );
};

export default App;
