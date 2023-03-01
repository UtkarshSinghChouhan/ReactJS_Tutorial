import React from "react";

const Card = (props) => {
    // let x = props.x, y = props.y, z = props.z;

    let {x, y, z} = props;   //Object Destucturing

    if((x === y) && (y === z)){
        return(
            <h1 className='card'>
                {x} {y} {z}
                <h6>This is <span style={{fontWeight : 'bold', backgroundColor:'#d2dbdd'}}>Matching</span></h6>
            </h1>
        )
    }else{
        return(
            <h1 className='card'>
                {x} {y} {z}
                <h6>This is <span style={{fontWeight : 'bold', backgroundColor:'#d2dbdd'}}>Not Matching</span></h6>
            </h1>
        )

    }
}

export default Card;