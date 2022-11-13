import './index.js'
import React, { useState } from 'react';

//useState is function
//use is used to call hooks
//return array([valuem function] )
//mandate to use hook inside function/component
//component must be in UpperCase

const UseStateBasic = () => {
    // let title = 'react is best';
    const [message, setMessage] = useState('react is best');

    const changeRes = () => {
        // console.log(useState());
        // title = 'react is easy';
        // console.log(title);
         setMessage('React is easy');
    }
    return (
        <>
            <h2>{message}</h2>
            <button className='btn' onClick={changeRes}>Change</button>
        </>
    );
}
export default UseStateBasic;