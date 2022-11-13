import { useState } from "react";

const UseStateObject = () => {

    const[person, setPerson] = useState({
        age: 21,
        name: 'Deepjyoti',
        message:"Blockchain is future",
    });

    const [name, setName] = useState("Sanjeevan");
    const [age, setAge] = useState(28);
    const [message, setMessage] = useState("Hi");

    const changeMessage = () => {
        // setPerson({ ...person , message:'Blockchain is easy'});
        setMessage("Blockchain is future");
    }

    return (
        <>
            {/* <h2>{person.name}</h2>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3> */}
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className="btn" onClick={changeMessage}>Change Message</button>
        </>
    );
}

export default UseStateObject;