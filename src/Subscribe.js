import React from 'react';


function Subscribe(){

    return <div>
        Subscribe to our boombox!
    </div>
}

export default Subscribe;

/*
const [formData, setFormData] = useState({
  username: "",
  password: "",
});

//since the id values are the same as the keys in formData, we can write an abstract setFormData here
function handleChange(event) {
  setFormData({
    ...formData,
    [event.target.id]: event.target.value,
  });
}

return (
  <form onSubmit={this.handleSubmit}>
    <input
      type="text"
      id="username"
      value={formData.username}
      onChange={handleChange}
    />
    <input
      type="text"
      id="password"
      value={formData.password}
      onChange={handleChange}
    />
  </form>
); 


function handleSubmit(event) {
  event.preventDefault();
  fetch("the server URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
} 



POST /questions

Required Headers:
{ "Content-Type": "application/json" }

Body:
{
  "prompt": string,
  "answers": array of strings,
  "correctIndex": integer
} 
*/