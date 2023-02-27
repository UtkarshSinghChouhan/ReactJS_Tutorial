import React from 'react';
import Image from './Image';
import Title from './Title';

function Card(props){
    return(
        <>
            <div className='card'>
                <Image imgsrc={props.imgsrc}/>
                
                <div className='card_info'>
                    <span className='card_category'> A Netflix Original Series</span>
                    <Title title={props.title}/>
                    <a href='' target='_blank'>
                        <button> Watch Now </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;