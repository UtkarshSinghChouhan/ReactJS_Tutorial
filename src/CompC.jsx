import React from 'react'
import {fname, lname} from './App';

const CompC = () => {
  return (
    <fname.Consumer>
      {
        (val) =>{
          return(

            <lname.Consumer>

              {
                (val2)=>{
                  
                  return <div>{val} {val2}</div>
                }
              }
            </lname.Consumer>
            
          )
        }
      }

    </fname.Consumer>
  )
}

export default CompC