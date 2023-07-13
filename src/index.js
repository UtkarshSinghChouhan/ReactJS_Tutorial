import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {

    console.log(props)
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

ReactDOM.render(
    <>

       <Card  
            imgsrc = "https://www.denofgeek.com/wp-content/uploads/2022/05/stranger-things-season-4-poster.jpeg?resize=768%2C432"
            title = "Stranger Things"
       />

      
            
      
       <Card  
            imgsrc = "https://www.denofgeek.com/wp-content/uploads/2022/05/stranger-things-season-4-poster.jpeg?resize=768%2C432"
            title = "Stranger Things"
       />

      
            
      
       

            
    </>,
    document.getElementById('root')
)