import React, {useState} from 'react'

const GrandChild = (props) => {
  return (
    <div>
      <h3>GrandChild: </h3>
      <Child course={props.course} />
    </div>
  )
}

const Child = (props) => {
  return (
    <div>
      <h2>Child:  {props.course} </h2>
    </div>
  )
}

const App = () => {
  const [courseName, setCourseName] = useState('React.js');
  return (
    <div>
      <h1>INeuron.ai</h1>
      <GrandChild course = {courseName}/>
    </div>
  )
}

export default App