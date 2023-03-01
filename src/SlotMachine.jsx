import React from "react";
import Card from "./Cards";


const SlotMachine  = () => {
    return(
        <>
            <div className='container'>
                <div className='slot_machine'>
                    <Card x = "😄" y = '🎅' z = '😄' />
                    <Card x = "😄" y = '😸' z = '😄'/>
                    <Card x = "😄" y = '😄' z = '😄'/>
                </div>
            </div>
        </>
    )
}

export default SlotMachine;