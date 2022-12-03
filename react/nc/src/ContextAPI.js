import React, {useState, useContext} from 'react'
import {data} from './data'
//more component
//prop drilling ==> context api -- redux

const PersonContext =  React.createContext();
//two - provider, consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople(()=> {
            return people.filter((person) => person.id !== id)
        })
    }

  return (
    <>
    <PersonContext.Provider value={{removePerson}}>
        <section>
            <h3>context API</h3>
            <List people = {people} ></List>
        </section>
    </PersonContext.Provider>
    </>
  )
}

const List = ({people}) => {
    return ( 
        <>
            {
                people.map((person) => {
                    return (
                        <SinglePerson key={person.id}
                            {...person}
                        />
                    )
                })
            }
        </>
    )
}

const SinglePerson = ({id, name}) => {
    const {removePerson} = useContext(PersonContext)
    console.log(data);

    return(
            <div className='item'>
                <h4>
                    {name}
                </h4>
                <button onClick={() => removePerson(id)}>Remove Person</button>
            </div>
    )
}

export default ContextAPI