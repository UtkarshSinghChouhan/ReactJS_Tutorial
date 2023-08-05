import React, {useContext}from 'react'
import {fname, lname} from "./App";

const CompC = () => {

  const f = useContext(fname);
  const l = useContext(lname);

  return (
    <div>{f} "+" {l}</div>
  )
}

export default CompC