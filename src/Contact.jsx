import React, { useState } from 'react'
import "./Contact.css";


const Contact = ({alldata}) => {

  // Local state to handle form fields
  const [data, setData] = useState({ name: "", email: "", contact: "" });

  // Handle change for all inputs
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value }); // adding uuid4() to each data
  };

  const formdata=(e)=>{
    if(data.name===""|| data.contact==="" || data.email===""){
      alert("Please Fill the Details:")
      return;
    }
    // console.log(data)
     e.preventDefault();
    alldata(data);
    setData({ name: "", email: "", contact: "" });
  }
  return (
    <div>
      <form className="form">
        <div className="form-group">
          <label htmlFor ="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Enter your name" value={data.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Enter your email" value={data.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input id="contact" name="contact" type="tel" placeholder="Enter your phone number" value={data.contact} onChange={handleChange} required />
        </div>

        <button type="submit" onClick={formdata}>Submit</button>
      </form>

    </div>

  )
}

export default Contact
