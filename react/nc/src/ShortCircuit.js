import React,{useState, useEffect} from "react";

//short-circuit evaluation
//ternary operator
//form basics
//input from form to state(useState)

const ShortCircuit = () => {

    const[text, setText] = useState('Deepjyoti');
    const [isError, setIsError] = useState(false);

    const firstValue = text || 'ineuron'
    const secondValue = text && 'ineuron'
    
    return(
        <>
            {/* <h1>{firstValue}</h1>
            <h2>value : {secondValue}</h2> */}
            <h1>{text || 'ineuron'}</h1>
            <button className="btn" onClick={()=> setIsError(!isError)}>Toggle error</button>
            {/* {text && <h2>React + Blockchain</h2>} */}
            {/* {!text && <h2>NFT's</h2>} */}
            {isError && <h2>Error...</h2>}
            {isError ? ( <p>Blockchain is future </p> ) :  ( <div> 
                    <h3>Blockchain future is doubtfull </h3>
                </div>)}
        </>
    )
}

export default ShortCircuit;