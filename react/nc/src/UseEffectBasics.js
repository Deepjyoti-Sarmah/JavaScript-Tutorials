import { useState, useEffect } from "react";

const UseEffectBasic = () => {

    const[value, setValue] = useState(0);

    useEffect(() => {

        if (value >= 2) {
            console.log("Use effect called rendering ");
            document.title = `New Messsage(${value})`;
        }else {
            console.log('tried');
        }

    },[value])

    return(
        <>
            <h2>Use Effect learning</h2>
            <h2>{value}</h2>
            <button className="btn" onClick={() => {
                setValue(value+1)
            }}>Increase</button>
        </>
    );
}
export default UseEffectBasic;