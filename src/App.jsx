import React, { useState } from 'react'
import { questions } from './Components/api'
import Accordian from './Components/Accordian'

const App = () => {
//   let[data, setData] = useState(questions);
  return (
    <>
        <div className='accor_container'>
            <h1> React Interview Questions</h1>
            {
                questions.map((ele) => {
                    const {id} = ele;
                    return <Accordian key={id} {...ele}/>;
                })
            }
        </div>

    </>
  )
}

export default App