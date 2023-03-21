import React, { createContext, useContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value="Utkarsh">
        <LastName.Provider value="Chouhan">
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, LastName };
