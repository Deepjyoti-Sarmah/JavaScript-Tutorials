import React, { Fragment } from 'react'
import Provider from './provider.js'
import Context from './context.js';

const Child1 = () => {
  console.log("Child");
  return <GrandChild1></GrandChild1>
}

const GrandChild1 = () => {
  console.log("GChild");
  return <GreatGrandChild1></GreatGrandChild1>
}

const GreatGrandChild1 = () => {
  
  console.log("GGChild");

  return (
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
            <h4>Actually here consuming</h4>
            <p>Mission name: {context.data.mname}</p>
            <p>Accept state: {context.data.accept}</p>
            <button onClick={context.isMissionAccepted}>Choose to accept</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}

const App = () => {
  
  return (
    <>
      <div>
        <h2>Context API Ex 2</h2>
        <Provider child= "ineuron">
          <Child1/>
        </Provider>
      </div>
    </>
  )
}

export default App