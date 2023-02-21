import React from 'react';
import ReactDOM from 'react-dom';

const name = "Utkarsh Singh Chouhan";

const img1 = "https://picsum.photos/id/237/200/300";
const img2 = "https://picsum.photos/id/237/250/300";
const img3 = "https://picsum.photos/id/237/300/300";

const link = "https://in.pinterest.com/";

ReactDOM.render(
    <>
        <h1 contentEditable>{name}</h1>
        <img src={img1}/>
        <img src={img2}/>

        <a href={link} target="_blank">
            <img src={img3}/>
        </a>
    </>,
    document.getElementById("root")
);