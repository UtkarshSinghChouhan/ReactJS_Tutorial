import React, {useState} from 'react';

const App = () => {
    let [bgColor, setColor] = useState('salmon');

    const changeColor = () => {
        bgColor = 'gray';
        setColor(bgColor);
    };

    const changeNewColor = () => {
        bgColor = 'salmon';
        setColor(bgColor);
    }

    return(
        <>
            <div className='container' style={{backgroundColor:bgColor}}>
                <button onClick={changeColor} onDoubleClick={changeNewColor}>Click Me</button>
            </div>
        </>
    );
}

export default App;
