import React, { useContext } from "react";
import { FirstName, LastName } from "./App";

const CompC = () => {
  const fName = useContext(FirstName);
  const lName = useContext(LastName);

  return (
    <>
      {/* <h1>{`${fName} ${lName}`}</h1> */}
      <h1>
        {fName} {lName}
      </h1>
    </>
  );
};

export default CompC;
