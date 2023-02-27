import React from 'react';

function Card(props){
    return(
        <>
            <div className='card'>
                <img src={props.imgsrc} alt='' className='card_img'/>

                <div className='card_info'>
                    <span className='card_category'> A Netflix Original Series</span>
                    <h3 className='card_title'> {props.title} </h3>
                    <a href='' target='_blank'>
                        <button> Watch Now </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;