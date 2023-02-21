import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Utkarsh Singh Chouhan";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";

const link = "https://in.pinterest.com/";

ReactDOM.render(
    <>
        <h1 className='heading'>{name}</h1>

        <div className='img_div'>
            <img src={img1}/>
            <img src={img2}/>

            <a href={link} target="_blank">
                <img src={img3}/>
            </a>

        </div>
    </>,
    document.getElementById("root")
);