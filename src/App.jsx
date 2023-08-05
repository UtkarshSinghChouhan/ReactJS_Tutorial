import React, {useReducer} from "react";

const App = () => {
  // let [num, setNum] = useState(0);

  const initialState = 0;
  const reducer = (currState, action) =>{

   

    switch(action){
      case "incre":
        currState += 1;
        break;

      case "decre":
        currState -= 1;
        break;

      default:
        break;
    }
    return currState;

  }

  const [state, dispatch] = useReducer(reducer, initialState);


  
  return (
    <>

      <h1>{state}</h1>

      <button
        onClick={() => {
          dispatch("incre");
        }}
        >
       "➕"
      </button>

      <button
        onClick={() => {
          dispatch("decre");
        }}
      >
       "➖"
      </button>
    </>
  );
};

export default App;
