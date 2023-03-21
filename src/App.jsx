import React, { useState } from "react";
import './index.css'
import Header from './Components/Header';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';
import Footer from './Components/Footer';

const App = () => {
  let[addItem, setItem] = useState([]);   //addItems represent array of objects


  const viewNote = (note) =>{
    // alert("Clicked");
    setItem((preVal) => {
        return[...preVal, note]
    })

    // console.log(note)
  }

  const onDelete = (id) => {
    // console.log("inside App triggered id " + id);

    //preVal is the array of objects
    setItem((preVal) => {
      return preVal.filter((ele, idx) => {
        return idx != id;  //it basically says that return all those objects whose id is not equal to the id of the triggered object. 
      })
    })
  }

  return(
    <>
      <Header/>
      <CreateNote passNote={viewNote}/>

     
      {addItem.map((ele, idx) => {
          let{title, content} = ele;

          return <Note 
            key={idx}
            id={idx}
            title={title}
            content={content}
            delete={onDelete}
          />
      })}

      <Footer/>
    </>
  )
}

export default App;