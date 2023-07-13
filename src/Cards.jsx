import React from "react";

const Card = (props) => {

    return(
        <>
            <div className="card">

                <img src={props.imgsrc} 
                    alt="myPic" 
                    className="card_img"
                />


                <div className="card_info">

                    <div className="card_category">A Netflix Original</div>

                    <h3 className="card_category">{props.title}</h3>

                    <a href="#" target="_blank">
                        <button>Watch Now</button>
                    </a>


                </div>

            </div>

        </>
    );
}

export default Card;