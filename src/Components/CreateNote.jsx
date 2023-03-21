import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    let[note, setNote] = useState({
        title:"",
        content:""
    });

    let[view, setView] = useState(false);

    const inputEvent = (e)=>{
        let{name, value} = e.target;

        setNote((preVal) => {
            return{
                ...preVal,
                [name]:value
            }
        })
    }

    const submit = () => {
        props.passNote(note);


        setNote(() => {
            return{
                title:"",
                content:""
            };
        })
    }

    const changeView = () => {
        setView(true);
    }

    const changeViewBack = () =>{
        setView(false);
    }

    return(
        <>
            <div className='main_note' onDoubleClick={changeViewBack}>
                <form>
                    {(view == true)?<input 
                        type='text' 
                        placeholder='Title' 
                        autoComplete='off'
                        onChange={inputEvent}
                        value={note.title}
                        name='title'
                    />:null}

                    <textarea 
                        rows='' 
                        column='' 
                        placeholder='Write a note...'
                        onChange={inputEvent}
                        value={note.content}
                        name='content'
                        onClick={changeView}
                    ></textarea>

                    {(view == true)?<Button onClick={submit}> <AddIcon/> </Button>:null}
                </form>
            </div>
        </>
    )
}

export default CreateNote; 