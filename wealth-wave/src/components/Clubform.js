import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios'
import club from "./club.jpg"

function Clubform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    workingType: "",
    interest: ""
 
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

 async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    try {
        await axios.post('http://localhost:3001/api/form', formData,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert('Form submitted successfully');
        setFormData({ name: '', email: '', phone: '',city: '',workingType:'',interest:"" }); // Clear form after submission
      } catch (error) {
        console.error('Error submitting the form', error);
        alert('Failed to submit the form');
      }

  }
  return (
    <div className="container">
      <img src={club} style={{height: "250px", width: "250px", marginLeft: "400px"}} alt="image"></img>
      <h1 style={{marginLeft: "300px"}}>Fill the form for join the club!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-5">
          <label for="formGroupExampleInput">Full Name: </label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={handleChange}
          />
          <div className="form-group">
            <label for="formGroupExampleInput">Phone No.: </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">City Name: </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              className="form-control"
              onChange={handleChange}
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Working Type</label>
          <select
            class="form-control"
            value={formData.workingType}
            name="workingType"
            onChange={handleChange}
            id="exampleFormControlSelect1"
          >
            <option>Student</option>
            <option>Worling Professional</option>
            <option>Investor</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Your Interest</label>
          <select
            
            class="form-control"
            value={formData.interest}
            name="interest"
            onChange={handleChange}
            id="exampleFormControlSelect1"
          >
            <option>Stock Market</option>
            <option>Taxation</option>
            <option>Fundamental Analysis</option>
            <option>Personal Finance Planning</option>
          </select>
        </div> 
         {/* <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div> */}
        <Button type="submit" className="mt-2">Submit</Button>
      </form>
    </div>
  );
}

export default Clubform;
