import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Accordian = ({question, answer}) => {
    let[show, setShow] = useState(false)
  return (
    <>
        <div className='accor_child'>
            <div className='heading'>
                <Button onClick={() => setShow(true)}> <AddIcon/> </Button>
                <h6>{question}</h6>

            </div>
            
            {
                show === false ? <p></p>:<p>{answer}</p>
            }
        </div>
    </>
  )
}

export default Accordian;