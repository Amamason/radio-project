import { useState } from 'react';
import React from 'react';

export default function Subscribe() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);

fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<p> {name} successfully registered!!</p>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div className="message" >
  <div>
  <h3 className="call">why not subscribe</h3>
  <h5 className="subHead">you know you want to!</h5>
  <p className='welcomeMessage'>We'll send you our monthly newsletter full of music news, glam rock hair updates <br></br> and even some inspirational merch so you will impress your mates with your neon splendour!</p>

</div>

{/* Calling to the methods */}
<div className="messages" style={{height: '100vh'}}>
  {errorMessage()}
  {successMessage()}

<form className="subscribeForm">
{/* Labels and inputs for form data */}
<label className="label"></label>
<input onChange={handleName} className="input" placeholder="Name"
value={name} type="text" />

<label className="label"></label>
<input onChange={handleEmail} className="input" placeholder="Email"
value={email} type="email" />

<label className="label"></label>
<input onChange={handlePassword} className="input" placeholder="Password"
value={password} type="password" />

<button onClick={handleSubmit} className="btn" type="submit">
Submit
</button>
</form>
</div>
</div>

);
}
