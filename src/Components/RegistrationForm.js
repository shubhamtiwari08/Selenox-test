import React, { useContext, useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Component.css'
import Calendar from "./Calendar";
import { DataContext } from "../Context/DataProvider";
import { useParams } from "react-router";



function RegistrationForm() {

    const {formData,setFormData,Navigate,updateEmployee,initialState,registerNewEmployee,employeeData} = useContext(DataContext)

    const {id} = useParams()
    

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
  if(id){
    updateEmployee(formData,id)
    
  }else{
    registerNewEmployee(formData)
  }
  Navigate('/')
  setFormData(initialState)
  }

  useEffect(()=>{
    const data = employeeData.filter(data=>Number(data.id) === Number(id) )
    console.log(data)
    setFormData(data[0])
  },[])


  return (
    <div className="registration-form">
      <h1>Employee Registration Form</h1>
      <form type="submit">
        <div className="name">
          <div className="name-content">
            <label htmlFor="FirstName">first Name* </label>
            <br />
            <input
              type="text"
              name="FirstName"
              placeholder="first Name"
              value={formData?.FirstName}
              onChange={handleInput}
            />
          </div>
          <div className="name-content">
            <label htmlFor="LastName">last Name*</label>
            <br />
            <input
              type="text"
              name="LastName"
              placeholder="last Name"
              value={formData?.LastName}
              onChange={handleInput}
            />
          </div>
        </div>
        <label htmlFor="DOB">DOB</label>
       <input type="date" name="DOB" value={formData?.DOB} onChange={handleInput}  />

        <label htmlFor="Study">Study</label>
        <input
          type="text"
          name="Study"
          placeholder="B.E"
          value={formData?.Study}
          onChange={handleInput}
        />

        <div className="date">
          <div className="date-content">
            <label htmlFor="StartDate">Start Date</label>
            <br />
            <input type="date" name="StartDate" value={formData?.StartDate} onChange={handleInput} />
          </div>

          <div className="date-content">
            <label htmlFor="End Date">End Date</label>
            <br />
            <input type="date" name="EndDate" value={formData?.EndDate} onChange={handleInput}/>
          </div>
        </div>

        <label htmlFor="CurrentSalary">currentSalary </label>
        <input
          type="text"
          name="CurrentSalary"
          placeholder="30000"
          value={formData?.currentSalary}
          onChange={handleInput}
        />

        <label htmlFor="Description">Description </label>
        <textarea id="Description" name="Description" rows="6" cols="40" value={formData?.Description}
          onChange={handleInput} style={{border:"none"}}></textarea>
        <div className="action-btns">
        <input type="button" value="cancel" onClick={()=>Navigate('/')} />
        <input type="button" value="save" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
