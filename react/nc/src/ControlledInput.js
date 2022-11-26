import React, {useState, useEffect} from 'react'

const ControlledInput = () => {

    const[firstName, SetFirstName] = useState('');
    const[email, SetEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello lets check");
    }

  return (
    <>
        <article>
            <h2>Form</h2>
            <form className='form' action="" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="firstName">Name : </label>
                    <input type="text" id='firstName' name='firstName' value={firstName} 
                    onChange= {(e) => SetFirstName(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email : </label>
                    <input type="text" id='email' name='email' value={email}
                    onChange= {(e) => SetFirstName(e.target.value)}/>
                </div>
                <button type='submit'>Add person</button>
            </form>
        </article>
    </>
  )
}

export default ControlledInput