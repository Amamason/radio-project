import React, { useState } from "react";

function Subscribe() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [comment, setComment] = useState("");


  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleComment(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { firstName: firstName, lastName: lastName, comment: comment };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setComment("");
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName} {data.comment}
      </div>
    );
  });

  return (
    <div className="subscribeForm">

      <h3>Subscribe to RadioStar</h3>


      <form onSubmit={handleSubmit}>
        <label> First name
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        </label>

        <label> Last name
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        </label>
        
        <label> Tell us what you think
        <textarea  onChange={handleComment} value={comment} />
        </label>

        <button type="submit">Submit</button>
      </form>
      {listOfSubmissions}
    </div>
  );
}

export default Subscribe; 
