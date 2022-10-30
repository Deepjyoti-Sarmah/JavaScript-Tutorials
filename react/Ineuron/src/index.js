import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Ineuron()
{
  // return (
  //   <div className='hyder'>
  //     {/* <h1>iNeuron Bengaluru</h1> */}
  //     <Blockchain/>
  //     <Blockchain/>
  //     <ReactJS/>
  //   </div>

  // );

  return (
    <section className='style'>
      <h1>Books List is</h1>
      <Image></Image>
      <Title/>
      <Author/>
    </section>
  );

}

// const Blockchain = () =>
// {
//   return <h4>Blockchain + React is Deadly </h4>
// } 

// const ReactJS = () =>
// {
//   return <h4>Learning React can get us more pay. FOCUS is key </h4>
// } 

const Image =() => {
  return <img src="https://ci6.googleusercontent.com/proxy/ianAjWDkAKS0-1QOEo2pBxFLYRIxg7_Tq9fIrsXOKvNBomHSohRm0pa6MMj1t4CuH-5bopqnJOgtAl8vEPrEMB21NjtklM_PfUfa16xlAeQRDtW57kvahBN60BImG2nSJ7RhvQ=s0-d-e1-ft#https://s3.ap-south-1.amazonaws.com/cdn.ineuron.ai/assets/emails/announcement.png" alt="" srcset="" />
}

const Title = () => {
  return <h2>The Basics of Bitcoin and Blockchain</h2>
}

const Author = () =>{
  return <h4>Antony</h4>
}


ReactDOM.render(<Ineuron/>
  , document.getElementById("root"));
